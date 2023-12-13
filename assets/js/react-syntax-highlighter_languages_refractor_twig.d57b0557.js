"use strict";
exports.id = 8827;
exports.ids = [8827, 3047];
exports.modules = {
 /***/ 47305: /***/ (module) => {
  module.exports = markupTemplating;
  markupTemplating.displayName = "markupTemplating";
  markupTemplating.aliases = [];
  function markupTemplating(Prism) {
   (function (Prism) {
    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
     return "___" + language.toUpperCase() + index + "___";
    }
    Object.defineProperties((Prism.languages["markup-templating"] = {}), {
     buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
       if (env.language !== language) {
        return;
       }
       var tokenStack = (env.tokenStack = []);
       env.code = env.code.replace(placeholderPattern, function (match) {
        if (typeof replaceFilter === "function" && !replaceFilter(match)) {
         return match;
        }
        var i = tokenStack.length;
        var placeholder; // Check for existing strings
        while (env.code.indexOf((placeholder = getPlaceholder(language, i))) !== -1) {
         ++i;
        } // Create a sparse array
        tokenStack[i] = match;
        return placeholder;
       }); // Switch the grammar to markup
       env.grammar = Prism.languages.markup;
      },
     },
     tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
       if (env.language !== language || !env.tokenStack) {
        return;
       } // Switch the grammar back
       env.grammar = Prism.languages[language];
       var j = 0;
       var keys = Object.keys(env.tokenStack);
       function walkTokens(tokens) {
        for (var i = 0; i < tokens.length; i++) {
         // all placeholders are replaced already
         if (j >= keys.length) {
          break;
         }
         var token = tokens[i];
         if (typeof token === "string" || (token.content && typeof token.content === "string")) {
          var k = keys[j];
          var t = env.tokenStack[k];
          var s = typeof token === "string" ? token : token.content;
          var placeholder = getPlaceholder(language, k);
          var index = s.indexOf(placeholder);
          if (index > -1) {
           ++j;
           var before = s.substring(0, index);
           var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), "language-" + language, t);
           var after = s.substring(index + placeholder.length);
           var replacement = [];
           if (before) {
            replacement.push.apply(replacement, walkTokens([before]));
           }
           replacement.push(middle);
           if (after) {
            replacement.push.apply(replacement, walkTokens([after]));
           }
           if (typeof token === "string") {
            tokens.splice.apply(tokens, [i, 1].concat(replacement));
           } else {
            token.content = replacement;
           }
          }
         } else if (
          token.content
          /* && typeof token.content !== 'string' */
         ) {
          walkTokens(token.content);
         }
        }
        return tokens;
       }
       walkTokens(env.tokens);
      },
     },
    });
   })(Prism);
  }

  /***/
 },

 /***/ 50955: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
  var refractorMarkupTemplating = __webpack_require__(47305);
  module.exports = twig;
  twig.displayName = "twig";
  twig.aliases = [];
  function twig(Prism) {
   Prism.register(refractorMarkupTemplating);
   Prism.languages.twig = {
    comment: /^\{#[\s\S]*?#\}$/,
    "tag-name": {
     pattern: /(^\{%-?\s*)\w+/,
     lookbehind: true,
     alias: "keyword",
    },
    delimiter: {
     pattern: /^\{[{%]-?|-?[%}]\}$/,
     alias: "punctuation",
    },
    string: {
     pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
     inside: {
      punctuation: /^['"]|['"]$/,
     },
    },
    keyword: /\b(?:even|if|odd)\b/,
    boolean: /\b(?:false|null|true)\b/,
    number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
    operator: [
     {
      pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
      lookbehind: true,
     },
     /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
    ],
    punctuation: /[()\[\]{}:.,]/,
   };
   Prism.hooks.add("before-tokenize", function (env) {
    if (env.language !== "twig") {
     return;
    }
    var pattern = /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;
    Prism.languages["markup-templating"].buildPlaceholders(env, "twig", pattern);
   });
   Prism.hooks.add("after-tokenize", function (env) {
    Prism.languages["markup-templating"].tokenizePlaceholders(env, "twig");
   });
  }

  /***/
 },
};
