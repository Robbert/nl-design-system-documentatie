"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [43971],
 {
  45626: (e) => {
   function a(e) {
    (e.languages.actionscript = e.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ })), (e.languages.actionscript["class-name"].alias = "function"), delete e.languages.actionscript.parameter, delete e.languages.actionscript["literal-property"], e.languages.markup && e.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: e.languages.markup } });
   }
   (e.exports = a), (a.displayName = "actionscript"), (a.aliases = []);
  },
 },
]);
