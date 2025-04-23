import { defineComponent as l, openBlock as a, createElementBlock as d, normalizeClass as u, renderSlot as c } from "vue";
const p = ["disabled"], r = /* @__PURE__ */ l({
  __name: "Button",
  props: {
    type: { default: "primary" },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const o = t, i = n, s = (e) => {
      o.disabled || i("click", e);
    };
    return (e, m) => (a(), d("button", {
      class: u(["ui-button", [
        `ui-button--${e.type}`,
        `ui-button--${e.size}`,
        { "ui-button--disabled": e.disabled }
      ]]),
      disabled: e.disabled,
      onClick: s
    }, [
      c(e.$slots, "default")
    ], 10, p));
  }
});
const f = {
  install: (t) => {
    t.component("UiButton", r);
  }
};
export {
  r as UiButton,
  f as default
};
