"use strict";
exports.id = 9566;
exports.ids = [9566];
exports.modules = {
 /***/ 39026: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ c: () => /* binding */ clsx,
   /* harmony export */
  });
  function r(e) {
   var t,
    f,
    n = "";
   if ("string" == typeof e || "number" == typeof e) n += e;
   else if ("object" == typeof e)
    if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), (n += f));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
   return n;
  }
  function clsx() {
   for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), (n += t));
   return n;
  }

  //# sourceMappingURL=clsx.m-9f200cc0.js.map

  /***/
 },

 /***/ 19566: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
   /* harmony export */ utrecht_breadcrumb_nav: () => /* binding */ BreadcrumbNav,
   /* harmony export */
  });
  /* harmony import */ var _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79058);
  /* harmony import */ var _clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39026);

  const breadcrumbNavCss = '.utrecht-breadcrumb-nav{--utrecht-focus-background-color:var(--utrecht-breadcrumb-nav-link-focus-background-color);--utrecht-link-background-color:var(--utrecht-breadcrumb-nav-link-background-color);--utrecht-link-text-decoration:var(--utrecht-breadcrumb-nav-link-text-decoration);--utrecht-link-focus-color:var(--utrecht-breadcrumb-nav-link-focus-color, var(--utrecht-breadcrumb-nav-link-color));--utrecht-link-focus-text-decoration:var(\n    --utrecht-breadcrumb-nav-link-focus-text-decoration,\n    var(--utrecht-breadcrumb-nav-link-text-decoration)\n  );--utrecht-link-hover-color:var(--utrecht-breadcrumb-nav-link-hover-color, var(--utrecht-breadcrumb-nav-link-color));--utrecht-link-hover-text-decoration:var(\n    --utrecht-breadcrumb-nav-link-hover-text-decoration,\n    var(--utrecht-breadcrumb-nav-link-text-decoration)\n  );--utrecht-link-visited-color:var(--utrecht-breadcrumb-nav-link-color);--utrecht-link-visited-text-decoration:var(--utrecht-link-text-decoration);--utrecht-link-color:var(--utrecht-breadcrumb-nav-link-color);--utrecht-link-placeholder-color:var(--utrecht-link-breadcrumb-link-disabled-color);font-family:var(--utrecht-document-font-family, inherit);font-size:var(--utrecht-breadcrumb-nav-font-size);text-transform:var(--utrecht-document-text-transform, inherit)}.utrecht-breadcrumb-nav__heading{display:none}.utrecht-breadcrumb-nav__list{display:flex;flex-wrap:wrap;min-block-size:var(--utrecht-breadcrumb-nav-min-block-size)}.utrecht-breadcrumb-nav__list--html-ol{list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0}.utrecht-breadcrumb-nav__list--html-p{margin-block-end:0;margin-block-start:0}.utrecht-breadcrumb-nav__item{block-size:100%}.utrecht-breadcrumb-nav__link{--utrecht-icon-size:var(--utrecht-breadcrumb-nav-link-icon-size);--utrecht-link-icon-size:var(--utrecht-breadcrumb-nav-link-icon-size);background-color:var(--utrecht-breadcrumb-nav-link-background-color);display:inline-block;padding-block-end:var(--utrecht-breadcrumb-nav-item-padding-block-end, 8px);padding-block-start:var(--utrecht-breadcrumb-nav-item-padding-block-start, 8px);padding-inline-end:var(--utrecht-breadcrumb-nav-item-padding-inline-end, 8px);padding-inline-start:var(--utrecht-breadcrumb-nav-item-padding-inline-start, 8px)}.utrecht-breadcrumb-nav__link--current{--utrecht-link-current-font-weight:var(--utrecht-breadcrumb-nav-link-current-font-weight, inherit);--_utrecht-breadcrumb-nav-link-current-cursor:var(--utrecht-action-inert-cursor, default);font-weight:var(--utrecht-breadcrumb-nav-link-current-font-weight, inherit)}.utrecht-breadcrumb-nav__link--disabled{--utrecht-link-placeholder-color:var(\n    --utrecht-breadcrumb-nav-link-disabled-color,\n    var(--utrecht-breadcrumb-nav-link-color)\n  );--_utrecht-breadcrumb-nav-link-disabled-cursor:var(--utrecht-action-disabled-cursor, not-allowed);background-color:var(--utrecht-breadcrumb-nav-link-disabled-background-color, var(--utrecht-breadcrumb-nav-link-background-color));cursor:var(--_utrecht-breadcrumb-nav-link-current-cursor, var(--_utrecht-breadcrumb-nav-link-disabled-cursor))}.utrecht-breadcrumb-nav__separator{--_utrecht-breadcrumb-nav-separator-display:inline-flex;--utrecht-icon-size:var(--utrecht-breadcrumb-nav-separator-icon-size);align-items:center;color:var(--utrecht-breadcrumb-nav-separator-color);cursor:var(--utrecht-action-inert-cursor, default);display:var(--_utrecht-breadcrumb-nav-separator-display);inline-size:fit-content;-webkit-user-select:none;user-select:none}.utrecht-breadcrumb-nav__separator--html-li{--_utrecht-breadcrumb-nav-separator-display:inline-flex;--utrecht-icon-size:var(--utrecht-breadcrumb-nav-separator-icon-size);align-items:center;color:var(--utrecht-breadcrumb-nav-separator-color);cursor:var(--utrecht-action-inert-cursor, default);display:var(--_utrecht-breadcrumb-nav-separator-display);inline-size:fit-content;-webkit-user-select:none;user-select:none}.utrecht-breadcrumb-nav--arrows{--utrecht-breadcrumb-nav-arrow-size:24px;min-block-size:var(--utrecht-breadcrumb-nav-min-block-size);overflow:hidden}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link{background-color:var(--utrecht-breadcrumb-nav-arrows-link-background-color);padding-inline-end:0;position:relative}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link::after,.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link::before{block-size:0;border-block-end-width:var(--utrecht-breadcrumb-nav-min-block-size);border-block-start-width:var(--utrecht-breadcrumb-nav-min-block-size);border-color:transparent;border-style:solid;content:" ";display:block;inline-size:0;inset-block-start:50%;inset-inline-start:100%;margin-block-start:calc(-1 * var(--utrecht-breadcrumb-nav-min-block-size));position:absolute}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link::after{border-inline-start-color:var(--utrecht-breadcrumb-nav-arrows-link-background-color);border-inline-start-width:var(--utrecht-breadcrumb-nav-arrow-size);z-index:2}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link::before{border-inline-start-color:var(--utrecht-document-background-color);border-inline-start-width:var(--utrecht-breadcrumb-nav-arrow-size);margin-block-start:calc(-1 * var(--utrecht-breadcrumb-nav-min-block-size));margin-inline-start:1px;z-index:1}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link--focus,.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link:focus{--utrecht-link-focus-background-color:var(--utrecht-breadcrumb-nav-arrows-link-focus-background-color);background-color:var(--utrecht-breadcrumb-nav-arrows-link-focus-background-color)}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link--focus::after,.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link:focus::after{border-inline-start-color:var(--utrecht-breadcrumb-nav-arrows-link-focus-background-color)}.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__link~.utrecht-breadcrumb-nav__link,.utrecht-breadcrumb-nav--arrows .utrecht-breadcrumb-nav__item~.utrecht-breadcrumb-nav__item .utrecht-breadcrumb-nav__link{padding-inline-start:calc(var(--utrecht-breadcrumb-nav-item-padding-inline-start) + var(--utrecht-breadcrumb-nav-arrow-size))}.utrecht-breadcrumb-nav__item~.utrecht-breadcrumb-nav__item{margin-inline-start:var(--utrecht-breadcrumb-nav-item-divider-inline-size)}.utrecht-link{--utrecht-icon-size:var(--utrecht-link-icon-size, 1em);color:var(--_utrecht-link-state-color, var(--utrecht-link-color, var(--_utrecht-link-forced-colors-color)))}.utrecht-link:any-link{--_utrecht-link-forced-colors-color:linktext;text-decoration-color:var(--_utrecht-link-state-text-decoration-color, var(--utrecht-link-text-decoration-color, currentColor));text-decoration-line:var(--_utrecht-link-state-text-decoration, var(--utrecht-link-text-decoration, underline));text-decoration-skip-ink:all;text-decoration-thickness:max(var(--_utrecht-link-state-text-decoration-thickness, var(--utrecht-link-text-decoration-thickness)), 1px);text-underline-offset:var(--utrecht-link-text-underline-offset)}.utrecht-link--icon-left{background-image:var(--utrecht-link-icon-left-background-image, none);background-position:0 0.25em;background-repeat:no-repeat;color:var(--utrecht-link-color, LinkText);font-weight:var(--utrecht-typography-weight-scale-bold-font-weight);padding-inline-start:var(--utrecht-space-block-md);text-decoration-line:none}.utrecht-link--visited{--_utrecht-link-forced-colors-color:visitedtext;--_utrecht-link-state-color:var(--utrecht-link-visited-color)}.utrecht-link--html-a:any-link:hover,.utrecht-link--hover{--_utrecht-link-forced-colors-color:linktext;--_utrecht-link-state-color:var(--utrecht-link-hover-color);--_utrecht-link-state-text-decoration:var(--utrecht-link-hover-text-decoration);--_utrecht-link-state-text-decoration-thickness:var(--utrecht-link-hover-text-decoration-thickness);text-decoration-skip:none;text-decoration-skip-ink:none}.utrecht-link--focus{--_utrecht-link-state-color:var(--utrecht-link-focus-color);--_utrecht-link-state-text-decoration:var(--utrecht-link-focus-text-decoration);--_utrecht-link-state-text-decoration-thickness:var(--utrecht-link-focus-text-decoration-thickness);background-color:var(--utrecht-link-focus-background-color, transparent);text-decoration-skip:none;text-decoration-skip-ink:none}.utrecht-link--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:var(--utrecht-stack-focus-z-index, 1)}.utrecht-link--html-span:focus,.utrecht-link--html-a:any-link:focus{--_utrecht-link-state-color:var(--utrecht-link-focus-color);--_utrecht-link-state-text-decoration:var(--utrecht-link-focus-text-decoration);--_utrecht-link-state-text-decoration-thickness:var(--utrecht-link-focus-text-decoration-thickness);background-color:var(--utrecht-link-focus-background-color, transparent);text-decoration-skip:none;text-decoration-skip-ink:none;--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert);z-index:var(--utrecht-stack-focus-z-index, 1)}.utrecht-link--html-span:focus:not(:focus-visible),.utrecht-link--html-a:any-link:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-link--html-span:active,.utrecht-link--html-a:any-link:active,.utrecht-link--active{--_utrecht-link-forced-colors-color:activetext;--_utrecht-link-state-color:var(--utrecht-link-active-color)}.utrecht-link--telephone{white-space:nowrap}.utrecht-link--current{cursor:var(--utrecht-action-inert-cursor, normal);font-weight:var(--utrecht-link-current-font-weight)}.utrecht-link--box-content:any-link{color:unset;display:inline-block;text-decoration-line:unset;text-decoration-skip-ink:unset;text-decoration-thickness:unset;text-underline-offset:unset}.utrecht-link--placeholder{--_utrecht-link-forced-colors-color:GrayText;--_utrecht-link-state-color:var(--utrecht-link-placeholder-color);cursor:var(--utrecht-action-disabled-cursor, not-allowed);font-weight:var(--utrecht-link-placeholder-font-weight);text-decoration-line:none}.utrecht-link--forced-colors{--utrecht-focus-outline-color:Highlight;--utrecht-focus-inverse-outline-color:HighlightText;--utrecht-link-color:linktext;--utrecht-link-hover-color:linktext;--utrecht-link-focus-color:linktext;--utrecht-link-active-color:activetext;--utrecht-link-visited-color:visitedtext;--utrecht-link-placeholder-color:GrayText}:host{display:block}:host([hidden]){display:none !important}';

  const BreadcrumbNav = class {
   constructor(hostRef) {
    (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.json = undefined;
    this.variant = undefined;
   }
   render() {
    const { json, variant } = this;
    const items = json ? JSON.parse(json) : [];
    return (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)(
     "nav",
     { class: (0, _clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-breadcrumb-nav", variant === "arrows" && "utrecht-breadcrumb-nav--arrows") },
     (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)(
      "ol",
      { class: "utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" },
      items.map(({ href, title, current }, index) => (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: href, class: "utrecht-breadcrumb-nav__item", itemscope: true, itemtype: "https://schema.org/ListItem", itemprop: "itemListElement" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: (0, _clsx_m_9f200cc0_js__WEBPACK_IMPORTED_MODULE_1__.c)("utrecht-breadcrumb-nav__link", "utrecht-link", "utrecht-link--html-a", current && "utrecht-link--current"), href: href, "aria-current": current ? "location" : null, itemprop: "item" }, (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "utrecht-breadcrumb-nav__text", itemprop: "name" }, title), (0, _index_47778138_js__WEBPACK_IMPORTED_MODULE_0__.h)("meta", { itemprop: "position", content: index + 1 })))),
     ),
    );
   }
  };
  BreadcrumbNav.style = breadcrumbNavCss;

  //# sourceMappingURL=utrecht-breadcrumb-nav.entry.js.map

  /***/
 },
};
