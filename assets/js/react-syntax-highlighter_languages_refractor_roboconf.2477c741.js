"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [13236],
 {
  98557: (t) => {
   function e(t) {
    t.languages.roboconf = { comment: /#.*/, keyword: { pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/, lookbehind: !0 }, component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: "variable" }, property: /[\w.-]+(?=[ \t]*:)/, value: { pattern: /(=[ \t]*(?![ \t]))[^,;]+/, lookbehind: !0, alias: "attr-value" }, optional: { pattern: /\(optional\)/, alias: "builtin" }, wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: "operator" }, punctuation: /[{},.;:=]/ };
   }
   (t.exports = e), (e.displayName = "roboconf"), (e.aliases = []);
  },
 },
]);
