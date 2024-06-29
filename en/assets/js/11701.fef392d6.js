'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [11701],
 {
  39026: (t, r, o) => {
   function e(t) {
    var r,
     o,
     c = '';
    if ('string' == typeof t || 'number' == typeof t) c += t;
    else if ('object' == typeof t)
     if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (o = e(t[r])) && (c && (c += ' '), (c += o));
     else for (r in t) t[r] && (c && (c += ' '), (c += r));
    return c;
   }
   function c() {
    for (var t, r, o = 0, c = ''; o < arguments.length; ) (t = arguments[o++]) && (r = e(t)) && (c && (c += ' '), (c += r));
    return c;
   }
   o.d(r, { c: () => c });
  },
  11701: (t, r, o) => {
   o.r(r), o.d(r, { utrecht_textbox: () => l });
   var e = o(79058),
    c = o(39026);
   const l = class {
    constructor(t) {
     (0, e.r)(this, t), (this.utrechtBlur = (0, e.c)(this, 'utrechtBlur', 7)), (this.utrechtChange = (0, e.c)(this, 'utrechtChange', 7)), (this.utrechtFocus = (0, e.c)(this, 'utrechtFocus', 7)), (this.utrechtInput = (0, e.c)(this, 'utrechtInput', 7)), (this.autoComplete = ''), (this.disabled = !1), (this.invalid = !1), (this.min = ''), (this.max = ''), (this.pattern = ''), (this.placeholder = ''), (this.readOnly = !1), (this.required = !1), (this.type = ''), (this.value = '');
    }
    render() {
     const { autoComplete: t, disabled: r, invalid: o, min: l, max: a, pattern: u, placeholder: n, readOnly: h, required: i, type: d, value: b } = this;
     return (0, e.h)('input', {
      class: (0, c.c)('utrecht-textbox', 'utrecht-textbox--html-input', r && 'utrecht-textbox--disabled', o && 'utrecht-textbox--invalid', h && 'utrecht-textbox--readonly'),
      type: d || 'text',
      autoComplete: t || null,
      disabled: r,
      dir: 'auto',
      min: 'number' == typeof l ? String(l) : 'string' == typeof l ? l : null,
      max: 'number' == typeof a ? String(a) : 'string' == typeof a ? a : null,
      pattern: u || null,
      placeholder: n || null,
      readonly: h,
      required: i,
      value: b,
      onBlur: (t) => this.utrechtBlur.emit(t),
      onChange: (t) => this.utrechtChange.emit(t),
      onFocus: (t) => this.utrechtFocus.emit(t),
      onInput: (t) => {
       (this.value = t.target.value), this.utrechtInput.emit(t);
      },
     });
    }
   };
   l.style = '.utrecht-textbox{--_utrecht-textbox-value-char:0.667em + 0.334ch;--_utrecht-textbox-max-inline-size:calc(\n    calc(var(--utrecht-textbox-value-max-length) * var(--_utrecht-textbox-value-char)) +\n      var(--utrecht-textbox-padding-inline-end, var(--utrecht-form-control-padding-inline-end, 0)) +\n      var(--utrecht-textbox-padding-inline-start, var(--utrecht-form-control-padding-inline-start, 0)) +\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width, 0)) +\n      var(--utrecht-textbox-autocomplete-ui-size, 44px)\n  );background-color:var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color));block-size:initial;border-width:var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textbox-border-bottom-width, var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textbox-border-radius, var(--utrecht-form-control-border-radius, 0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textbox-color, var(--utrecht-form-control-color));font-family:var(--utrecht-textbox-font-family, var(--utrecht-form-control-font-family));font-size:var(--utrecht-textbox-font-size, var(--utrecht-form-control-font-size, inherit));font-weight:initial;inline-size:100%;line-height:var(--utrecht-textbox-line-height, var(--utrecht-form-control-line-height, initial));min-block-size:var(--utrecht-pointer-target-min-size, 44px);min-inline-size:var(--utrecht-pointer-target-min-size, 44px);max-inline-size:min(var(--_utrecht-textbox-max-inline-size, 100%), var(--utrecht-textbox-max-inline-size, var(--utrecht-form-control-max-inline-size)));padding-block-end:var(--utrecht-textbox-padding-block-end, var(--utrecht-form-control-padding-block-end, 0));padding-block-start:var(--utrecht-textbox-padding-block-start, var(--utrecht-form-control-padding-block-start, 0));padding-inline-end:var(--utrecht-textbox-padding-inline-end, var(--utrecht-form-control-padding-inline-end, initial));padding-inline-start:var(--utrecht-textbox-padding-inline-start, var(--utrecht-form-control-padding-inline-start, initial))}.utrecht-textbox--invalid{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textbox--focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-textbox--read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox__placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--numeric{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}.utrecht-textbox--password{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--postal-code-nl-size{--utrecht-textbox-value-max-length:7}.utrecht-textbox--house-number-size{--utrecht-textbox-value-max-length:5}.utrecht-textbox--house-letter-size{--utrecht-textbox-value-max-length:1}.utrecht-textbox--house-addition-size{--utrecht-textbox-value-max-length:4}.utrecht-textbox--voorvoegsel-size{--utrecht-textbox-value-max-length:10}.utrecht-textbox--tel-size{--utrecht-textbox-value-max-length:19}.utrecht-textbox--tel-nl-size{--utrecht-textbox-value-max-length:13}.utrecht-textbox--iban-size{--utrecht-textbox-value-max-length:41}.utrecht-textbox--iban-nl-size{--utrecht-textbox-value-max-length:22}.utrecht-textbox--placeholder-ltr::placeholder,.utrecht-textbox--placeholder-ltr:placeholder-shown{direction:ltr}.utrecht-textbox--placeholder-rtl::placeholder,.utrecht-textbox--placeholder-rtl:placeholder-shown{direction:rtl}.utrecht-textbox--url{font-variant-ligatures:none}.utrecht-textbox--html-input{}.utrecht-textbox--html-input:focus{background-color:var(--utrecht-textbox-focus-background-color, var(--utrecht-form-control-focus-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color, var(--utrecht-form-control-focus-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color, var(--utrecht-form-control-focus-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)\n    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-textbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-textbox--html-input:invalid,.utrecht-textbox--html-input[aria-invalid=true]{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,\n    var(\n      --utrecht-form-control-invalid-border-width,\n      var(--utrecht-textbox-border-width, var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color, var(--utrecht-form-control-invalid-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width, var(--utrecht-form-control-invalid-border-bottom-width, var(--utrecht-textbox-border-bottom-width, var(--utrecht-form-control-border-bottom-width, var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color, var(--utrecht-form-control-invalid-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color, var(--utrecht-form-control-invalid-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:read-only{background-color:var(--utrecht-textbox-read-only-background-color, var(--utrecht-form-control-read-only-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color, var(--utrecht-form-control-read-only-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color, var(--utrecht-form-control-read-only-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:disabled{background-color:var(--utrecht-textbox-disabled-background-color, var(--utrecht-form-control-disabled-background-color, var(--utrecht-textbox-background-color, var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color, var(--utrecht-form-control-disabled-border-color, var(--utrecht-textbox-border-color, var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color, var(--utrecht-form-control-disabled-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor, not-allowed)}.utrecht-textbox--html-input::placeholder{color:var(--utrecht-textbox-placeholder-color, var(--utrecht-form-control-placeholder-color, var(--utrecht-textbox-color, var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--html-input[type=password i]{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--html-input[type=url i],.utrecht-textbox--html-input[type=email i],.utrecht-textbox--html-input[inputMode=email i],.utrecht-textbox--html-input[inputMode=url i]{font-variant-ligatures:none}.utrecht-textbox--html-input[pattern="\\\\d*"],.utrecht-textbox--html-input[pattern="[0-9]*"],.utrecht-textbox--html-input[type=number i],.utrecht-textbox--html-input[type=tel i],.utrecht-textbox--html-input[inputMode=numeric i],.utrecht-textbox--html-input[inputMode=decimal i],.utrecht-textbox--html-input[inputMode=tel i]{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}:host{display:block}:host([hidden]){display:none !important}';
  },
 },
]);
