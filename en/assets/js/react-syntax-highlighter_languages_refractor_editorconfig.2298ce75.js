"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [81151],
 {
  88165: (e) => {
   function t(e) {
    e.languages.editorconfig = { comment: /[;#].*/, section: { pattern: /(^[ \t]*)\[.+\]/m, lookbehind: !0, alias: "selector", inside: { regex: /\\\\[\[\]{},!?.*]/, operator: /[!?]|\.\.|\*{1,2}/, punctuation: /[\[\]{},]/ } }, key: { pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m, lookbehind: !0, alias: "attr-name" }, value: { pattern: /=.*/, alias: "attr-value", inside: { punctuation: /^=/ } } };
   }
   (e.exports = t), (t.displayName = "editorconfig"), (t.aliases = []);
  },
 },
]);
