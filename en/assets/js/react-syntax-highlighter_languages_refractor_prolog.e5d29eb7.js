"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [14045],
 {
  57378: (e) => {
   function n(e) {
    e.languages.prolog = { comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 }, string: { pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/, greedy: !0 }, builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/, function: /\b[a-z]\w*(?:(?=\()|\/\d+)/, number: /\b\d+(?:\.\d*)?/, operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/, punctuation: /[(){}\[\],]/ };
   }
   (e.exports = n), (n.displayName = "prolog"), (n.aliases = []);
  },
 },
]);
