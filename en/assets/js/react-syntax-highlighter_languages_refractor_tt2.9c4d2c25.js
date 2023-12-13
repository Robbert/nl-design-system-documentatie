"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [53444, 63047],
 {
  47305: (e) => {
   function t(e) {
    !(function (e) {
     function t(e, t) {
      return "___" + e.toUpperCase() + t + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (n, a, r, s) {
        if (n.language === a) {
         var i = (n.tokenStack = []);
         (n.code = n.code.replace(r, function (e) {
          if ("function" == typeof s && !s(e)) return e;
          for (var r, o = i.length; -1 !== n.code.indexOf((r = t(a, o))); ) ++o;
          return (i[o] = e), r;
         })),
          (n.grammar = e.languages.markup);
        }
       },
      },
      tokenizePlaceholders: {
       value: function (n, a) {
        if (n.language === a && n.tokenStack) {
         n.grammar = e.languages[a];
         var r = 0,
          s = Object.keys(n.tokenStack);
         !(function i(o) {
          for (var g = 0; g < o.length && !(r >= s.length); g++) {
           var l = o[g];
           if ("string" == typeof l || (l.content && "string" == typeof l.content)) {
            var u = s[r],
             p = n.tokenStack[u],
             c = "string" == typeof l ? l : l.content,
             d = t(a, u),
             f = c.indexOf(d);
            if (f > -1) {
             ++r;
             var k = c.substring(0, f),
              E = new e.Token(a, e.tokenize(p, n.grammar), "language-" + a, p),
              m = c.substring(f + d.length),
              S = [];
             k && S.push.apply(S, i([k])), S.push(E), m && S.push.apply(S, i([m])), "string" == typeof l ? o.splice.apply(o, [g, 1].concat(S)) : (l.content = S);
            }
           } else l.content && i(l.content);
          }
          return o;
         })(n.tokens);
        }
       },
      },
     });
    })(e);
   }
   (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
  },
  70345: (e, t, n) => {
   var a = n(47305);
   function r(e) {
    e.register(a),
     (function (e) {
      (e.languages.tt2 = e.languages.extend("clike", { comment: /#.*|\[%#[\s\S]*?%\]/, keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/, punctuation: /[[\]{},()]/ })),
       e.languages.insertBefore("tt2", "number", { operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/, variable: { pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i } }),
       e.languages.insertBefore("tt2", "keyword", { delimiter: { pattern: /^(?:\[%|%%)-?|-?%\]$/, alias: "punctuation" } }),
       e.languages.insertBefore("tt2", "string", { "single-quoted-string": { pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/, greedy: !0, alias: "string" }, "double-quoted-string": { pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/, greedy: !0, alias: "string", inside: { variable: { pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i } } } }),
       delete e.languages.tt2.string,
       e.hooks.add("before-tokenize", function (t) {
        e.languages["markup-templating"].buildPlaceholders(t, "tt2", /\[%[\s\S]+?%\]/g);
       }),
       e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "tt2");
       });
     })(e);
   }
   (e.exports = r), (r.displayName = "tt2"), (r.aliases = []);
  },
 },
]);
