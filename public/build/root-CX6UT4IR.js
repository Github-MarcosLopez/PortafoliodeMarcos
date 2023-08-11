import {
  NextUIProvider
} from "/build/_shared/chunk-SDWWKMA5.js";
import "/build/_shared/chunk-524W4XIG.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet
} from "/build/_shared/chunk-DFFBMGQJ.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YL3VFSG7.css";

// app/stylesGlobal/global-large.css
var global_large_default = "/build/_assets/global-large-6HOZAAJY.css";

// app/stylesGlobal/global-medium.css
var global_medium_default = "/build/_assets/global-medium-GGZBBYKN.css";

// app/stylesGlobal/global.css
var global_default = "/build/_assets/global-Y3ZEOUPO.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
];
var meta = () => {
  return [
    {
      charset: "utf-8",
      title: "Portafolio",
      viewport: "width=device-width, initial-scale=1"
    }
  ];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "meta",
        {
          name: "google-site-verification",
          content: "axgEwjOvGX8m2Aag850jmd45ATtOWJ8dYhq7rriBCro"
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextUIProvider, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-CX6UT4IR.js.map
