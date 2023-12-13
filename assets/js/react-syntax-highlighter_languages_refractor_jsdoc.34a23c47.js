"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38825, 40902, 89461],
 {
  90491: (e) => {
   function a(e) {
    !(function (e) {
     var a = (e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ });
     Object.defineProperty(a, "addSupport", {
      value: function (a, n) {
       "string" == typeof a && (a = [a]),
        a.forEach(function (a) {
         !(function (a, n) {
          var s = "doc-comment",
           t = e.languages[a];
          if (t) {
           var i = t[s];
           if (!i) {
            var r = {};
            (r[s] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" }), (i = (t = e.languages.insertBefore(a, "comment", r))[s]);
           }
           if ((i instanceof RegExp && (i = t[s] = { pattern: i }), Array.isArray(i))) for (var o = 0, p = i.length; o < p; o++) i[o] instanceof RegExp && (i[o] = { pattern: i[o] }), n(i[o]);
           else n(i);
          }
         })(a, function (e) {
          e.inside || (e.inside = {}), (e.inside.rest = n);
         });
        });
      },
     }),
      a.addSupport(["java", "javascript", "php"], a);
    })(e);
   }
   (e.exports = a), (a.displayName = "javadoclike"), (a.aliases = []);
  },
  21024: (e, a, n) => {
   var s = n(90491),
    t = n(66409);
   function i(e) {
    e.register(s),
     e.register(t),
     (function (e) {
      var a = e.languages.javascript,
       n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
       s = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
      (e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(s + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } })),
       e.languages.insertBefore("jsdoc", "keyword", {
        "optional-parameter": { pattern: RegExp(s + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: a, alias: "language-javascript" }, punctuation: /[=[\]]/ } },
        "class-name": [
         {
          pattern: RegExp(
           /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function () {
            return n;
           })
          ),
          lookbehind: !0,
          inside: { punctuation: /\./ },
         },
         { pattern: RegExp("(@[a-z]+\\s+)" + n), lookbehind: !0, inside: { string: a.string, number: a.number, boolean: a.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } },
        ],
        example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: a, alias: "language-javascript" } } },
       }),
       e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
     })(e);
   }
   (e.exports = i), (i.displayName = "jsdoc"), (i.aliases = []);
  },
  66409: (e) => {
   function a(e) {
    !(function (e) {
     (e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ })), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
     var a = e.languages.extend("typescript", {});
     delete a["class-name"], (e.languages.typescript["class-name"].inside = a), e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: a } } } }), (e.languages.ts = e.languages.typescript);
    })(e);
   }
   (e.exports = a), (a.displayName = "typescript"), (a.aliases = ["ts"]);
  },
 },
]);
