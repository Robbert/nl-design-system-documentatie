"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2013],
 {
  81191: (e) => {
   function n(e) {
    e.languages.erlang = { comment: /%.+/, string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, "quoted-function": { pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/, alias: "function" }, "quoted-atom": { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: "atom" }, boolean: /\b(?:false|true)\b/, keyword: /\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/, number: [/\$\\?./, /\b\d+#[a-z0-9]+/i, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i], function: /\b[a-z][\w@]*(?=\()/, variable: { pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, lookbehind: !0 }, operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/, { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 }, { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }], atom: /\b[a-z][\w@]*/, punctuation: /[()[\]{}:;,.#|]|<<|>>/ };
   }
   (e.exports = n), (n.displayName = "erlang"), (n.aliases = []);
  },
 },
]);
