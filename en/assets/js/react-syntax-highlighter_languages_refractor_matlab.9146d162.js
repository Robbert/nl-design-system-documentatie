"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [58404],
 {
  3722: (e) => {
   function s(e) {
    e.languages.matlab = { comment: [/%\{[\s\S]*?\}%/, /%.+/], string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 }, number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/, keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/, function: /\b(?!\d)\w+(?=\s*\()/, operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/, punctuation: /\.{3}|[.,;\[\](){}!]/ };
   }
   (e.exports = s), (s.displayName = "matlab"), (s.aliases = []);
  },
 },
]);
