"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10400],
 {
  28949: (e) => {
   function t(e) {
    !(function (e) {
     var t = /%%?[~:\w]+%?|!\S+!/,
      r = { pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im, alias: "attr-name", inside: { punctuation: /:/ } },
      n = /"(?:[\\"]"|[^"])*"(?!")/,
      i = /(?:\b|-)\d+\b/;
     e.languages.batch = {
      comment: [/^::.*/m, { pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0 }],
      label: { pattern: /^:.*/m, alias: "property" },
      command: [
       { pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im, lookbehind: !0, inside: { keyword: /\b(?:do|in)\b|^for\b/i, string: n, parameter: r, variable: t, number: i, punctuation: /[()',]/ } },
       { pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im, lookbehind: !0, inside: { keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i, string: n, parameter: r, variable: t, number: i, operator: /\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i } },
       { pattern: /((?:^|[&()])[ \t]*)else\b/im, lookbehind: !0, inside: { keyword: /^else\b/i } },
       { pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0, inside: { keyword: /^set\b/i, string: n, parameter: r, variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/], number: i, operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/, punctuation: /[()',]/ } },
       { pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m, lookbehind: !0, inside: { keyword: /^\w+\b/, string: n, parameter: r, label: { pattern: /(^\s*):\S+/m, lookbehind: !0, alias: "property" }, variable: t, number: i, operator: /\^/ } },
      ],
      operator: /[&@]/,
      punctuation: /[()']/,
     };
    })(e);
   }
   (e.exports = t), (t.displayName = "batch"), (t.aliases = []);
  },
 },
]);
