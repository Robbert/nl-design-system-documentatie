"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [25508],
 {
  36389: (e) => {
   function t(e) {
    e.languages.julia = { comment: { pattern: /(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/, lookbehind: !0 }, regex: { pattern: /r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/, greedy: !0 }, string: { pattern: /"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/, greedy: !0 }, char: { pattern: /(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/, boolean: /\b(?:false|true)\b/, number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i, operator: /&&|\|\||[-+*^%\xf7\u22bb&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265'\u221a\u221b]/, punctuation: /::?|[{}[\]();,.?]/, constant: /\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[\u03c0\u212f]/ };
   }
   (e.exports = t), (t.displayName = "julia"), (t.aliases = []);
  },
 },
]);
