"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [60048],
 {
  45847: (e) => {
   function t(e) {
    (e.languages.peoplecode = { comment: RegExp([/\/\*[\s\S]*?\*\//.source, /\bREM[^;]*;/.source, /<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source, /\/\+[\s\S]*?\+\//.source].join("|")), string: { pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/, greedy: !0 }, variable: /%\w+/, "function-definition": { pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i, lookbehind: !0, alias: "function" }, "class-name": { pattern: /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i, lookbehind: !0, inside: { punctuation: /:/ } }, keyword: /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i, "operator-keyword": { pattern: /\b(?:and|not|or)\b/i, alias: "operator" }, function: /[_a-z]\w*(?=\s*\()/i, boolean: /\b(?:false|true)\b/i, number: /\b\d+(?:\.\d+)?\b/, operator: /<>|[<>]=?|!=|\*\*|[-+*/|=@]/, punctuation: /[:.;,()[\]]/ }), (e.languages.pcode = e.languages.peoplecode);
   }
   (e.exports = t), (t.displayName = "peoplecode"), (t.aliases = ["pcode"]);
  },
 },
]);
