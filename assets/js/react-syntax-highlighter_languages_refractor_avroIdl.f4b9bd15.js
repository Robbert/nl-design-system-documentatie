"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3933],
 {
  40162: (e) => {
   function n(e) {
    (e.languages["avro-idl"] = { comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/, lookbehind: !0, greedy: !0 }, annotation: { pattern: /@(?:[$\w.-]|`[^\r\n`]+`)+/, greedy: !0, alias: "function" }, "function-identifier": { pattern: /`[^\r\n`]+`(?=\s*\()/, greedy: !0, alias: "function" }, identifier: { pattern: /`[^\r\n`]+`/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: [{ pattern: /(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i, lookbehind: !0 }, /-?\b(?:Infinity|NaN)\b/], operator: /=/, punctuation: /[()\[\]{}<>.:,;-]/ }), (e.languages.avdl = e.languages["avro-idl"]);
   }
   (e.exports = n), (n.displayName = "avroIdl"), (n.aliases = []);
  },
 },
]);
