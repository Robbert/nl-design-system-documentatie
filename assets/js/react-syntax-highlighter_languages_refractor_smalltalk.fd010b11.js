"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [72822],
 {
  63443: (e) => {
   function a(e) {
    e.languages.smalltalk = { comment: { pattern: /"(?:""|[^"])*"/, greedy: !0 }, char: { pattern: /\$./, greedy: !0 }, string: { pattern: /'(?:''|[^'])*'/, greedy: !0 }, symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i, "block-arguments": { pattern: /(\[\s*):[^\[|]*\|/, lookbehind: !0, inside: { variable: /:[\da-z]+/i, punctuation: /\|/ } }, "temporary-variables": { pattern: /\|[^|]+\|/, inside: { variable: /[\da-z]+/i, punctuation: /\|/ } }, keyword: /\b(?:new|nil|self|super)\b/, boolean: /\b(?:false|true)\b/, number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /\b\d+(?:\.\d+)?(?:e-?\d+)?/], operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/, punctuation: /[.;:?\[\](){}]/ };
   }
   (e.exports = a), (a.displayName = "smalltalk"), (a.aliases = []);
  },
 },
]);
