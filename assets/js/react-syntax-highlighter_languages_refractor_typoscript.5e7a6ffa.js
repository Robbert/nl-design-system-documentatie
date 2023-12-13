"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60255],
 {
  25826: (n) => {
   function t(n) {
    !(function (n) {
     var t = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
     (n.languages.typoscript = {
      comment: [
       { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
       { pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/, lookbehind: !0, greedy: !0 },
       { pattern: /(^|[^"'])#.*/, lookbehind: !0, greedy: !0 },
      ],
      function: [
       { pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/, inside: { string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, inside: { keyword: t } }, keyword: { pattern: /INCLUDE_TYPOSCRIPT/ } } },
       { pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/, inside: { string: /"[^"\r\n]*"|'[^'\r\n]*'/ } },
      ],
      string: { pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/, lookbehind: !0, inside: { function: /\{\$.*\}/, keyword: t, number: /^\d+$/, punctuation: /[,|:]/ } },
      keyword: t,
      number: { pattern: /\b\d+\s*[.{=]/, inside: { operator: /[.{=]/ } },
      tag: { pattern: /\.?[-\w\\]+\.?/, inside: { punctuation: /\./ } },
      punctuation: /[{}[\];(),.:|]/,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
     }),
      (n.languages.tsconfig = n.languages.typoscript);
    })(n);
   }
   (n.exports = t), (t.displayName = "typoscript"), (t.aliases = ["tsconfig"]);
  },
 },
]);
