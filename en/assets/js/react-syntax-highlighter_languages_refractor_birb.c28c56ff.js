"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [38486],
 {
  83578: (e) => {
   function s(e) {
    (e.languages.birb = e.languages.extend("clike", { string: { pattern: /r?("|')(?:\\.|(?!\1)[^\\])*\1/, greedy: !0 }, "class-name": [/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/, /\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/], keyword: /\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/, operator: /\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/, variable: /\b[a-z_]\w*\b/ })), e.languages.insertBefore("birb", "function", { metadata: { pattern: /<\w+>/, greedy: !0, alias: "symbol" } });
   }
   (e.exports = s), (s.displayName = "birb"), (s.aliases = []);
  },
 },
]);
