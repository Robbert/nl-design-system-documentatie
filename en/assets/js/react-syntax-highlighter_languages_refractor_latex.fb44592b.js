"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4732],
 {
  61802: (e) => {
   function a(e) {
    !(function (e) {
     var a = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
      t = { "equation-command": { pattern: a, alias: "regex" } };
     (e.languages.latex = {
      comment: /%.*/,
      cdata: { pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0 },
      equation: [
       { pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/, inside: t, alias: "string" },
       { pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0, inside: t, alias: "string" },
      ],
      keyword: { pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/, lookbehind: !0 },
      url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
      headline: { pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/, lookbehind: !0, alias: "class-name" },
      function: { pattern: a, alias: "selector" },
      punctuation: /[[\]{}&]/,
     }),
      (e.languages.tex = e.languages.latex),
      (e.languages.context = e.languages.latex);
    })(e);
   }
   (e.exports = a), (a.displayName = "latex"), (a.aliases = ["tex", "context"]);
  },
 },
]);
