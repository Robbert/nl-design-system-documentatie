'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [48074],
 {
  24747: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => i, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => d });
   var s = n(52676),
    o = n(24785);
   const a = { title: 'Templates', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Templates', sidebar_position: 1, pagination_label: 'Templates', description: 'Templates', keywords: ['index', 'voorbeelden', 'templates'] },
    i = 'Templates',
    l = { id: 'voorbeelden/templates/README', title: 'Templates', description: 'Templates', source: '@site/docs/voorbeelden/templates/README.md', sourceDirName: 'voorbeelden/templates', slug: '/voorbeelden/templates/', permalink: '/en/voorbeelden/templates/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/templates/README.md', tags: [], version: 'current', sidebarPosition: 1, frontMatter: { title: 'Templates', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Templates', sidebar_position: 1, pagination_label: 'Templates', description: 'Templates', keywords: ['index', 'voorbeelden', 'templates'] } },
    r = {},
    d = [];
   function p(e) {
    const t = { h1: 'h1', ...(0, o.a)(), ...e.components };
    return (0, s.jsx)(t.h1, { id: 'templates', children: 'Templates' });
   }
   function c(e = {}) {
    const { wrapper: t } = { ...(0, o.a)(), ...e.components };
    return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
   }
  },
  24785: (e, t, n) => {
   n.d(t, { Z: () => l, a: () => i });
   var s = n(75271);
   const o = {},
    a = s.createContext(o);
   function i(e) {
    const t = s.useContext(a);
    return s.useMemo(
     function () {
      return 'function' == typeof e ? e(t) : { ...t, ...e };
     },
     [t, e],
    );
   }
   function l(e) {
    let t;
    return (t = e.disableParentContext ? ('function' == typeof e.components ? e.components(o) : e.components || o) : i(e.components)), s.createElement(a.Provider, { value: t }, e.children);
   }
  },
 },
]);
