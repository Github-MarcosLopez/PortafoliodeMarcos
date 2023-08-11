var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YL3VFSG7.css";

// app/root.tsx
var import_react3 = require("@nextui-org/react");

// app/stylesGlobal/global-large.css
var global_large_default = "/build/_assets/global-large-6HOZAAJY.css";

// app/stylesGlobal/global-medium.css
var global_medium_default = "/build/_assets/global-medium-GGZBBYKN.css";

// app/stylesGlobal/global.css
var global_default = "/build/_assets/global-Y3ZEOUPO.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
], meta = () => [
  {
    charset: "utf-8",
    title: "Portafolio",
    viewport: "width=device-width, initial-scale=1"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "google-site-verification",
          content: "axgEwjOvGX8m2Aag850jmd45ATtOWJ8dYhq7rriBCro"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.NextUIProvider, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/portafolio.experiencia.tsx
var portafolio_experiencia_exports = {};
__export(portafolio_experiencia_exports, {
  default: () => ExperienciaPortafolioRoute,
  links: () => links2
});

// app/routes/styles/experiencia.css
var experiencia_default = "/build/_assets/experiencia-PHX4WES4.css";

// public/svg/icon-portafolio.svg
var icon_portafolio_default = "/build/_assets/icon-portafolio-QDHNVWKQ.svg";

// app/routes/portafolio.experiencia.tsx
var import_ri = require("react-icons/ri"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: experiencia_default }
];
function ExperienciaPortafolioRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "experiencia_container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Experiencia" }, void 0, !1, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Clonaciones" }, void 0, !1, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "La experiencia obtenida es por el aprendizaje General de las tecnolog\xEDas." }, void 0, !1, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "experiencia_content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Cascada Santiago Yosond\xFAa" }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bar", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "emptybar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 32,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "filledbar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 33,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "-Pagina web Realizada con las siguentes herramientas: Html, Css, JavaScript." }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "circle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { className: "stroke", cx: 60, cy: 98, r: 50 }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 44,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "perfile-img", src: icon_portafolio_default, alt: "Marcos_Lopez" }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 45,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              className: "icon",
              href: "https://cascada-yosondua-no-oficial.netlify.app/",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiPagesFill, {}, void 0, !1, {
                fileName: "app/routes/portafolio.experiencia.tsx",
                lineNumber: 51,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 47,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.experiencia.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Pagina Publivalle Dania" }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bar", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "emptybar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "filledbar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "-Pagina web Realizada con las siguentes herramientas: Html, Css, JavaScript." }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "circle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { className: "stroke", cx: 60, cy: 98, r: 50 }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "perfile-img", src: icon_portafolio_default, alt: "Marcos_Lopez" }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              className: "icon",
              href: "https://publivalle-dania.netlify.app/",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiPagesFill, {}, void 0, !1, {
                fileName: "app/routes/portafolio.experiencia.tsx",
                lineNumber: 80,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 76,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.experiencia.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "netlify Clone de Mercado Libre" }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bar", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "emptybar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "filledbar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "-Pagina web Realizada con las siguentes herramientas: Html, Css, JavaScript." }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "circle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { className: "stroke", cx: 60, cy: 98, r: 50 }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "perfile-img", src: icon_portafolio_default, alt: "Marcos_Lopez" }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 103,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              className: "icon",
              href: "https://mercado-libre-clone.netlify.app/",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiPagesFill, {}, void 0, !1, {
                fileName: "app/routes/portafolio.experiencia.tsx",
                lineNumber: 109,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 105,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.experiencia.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Github: Codigo de este Portafolio" }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bar", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "emptybar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "filledbar" }, void 0, !1, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
            "-Pagina Realizada con documentacion de  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "remix", href: "https://remix.run/", children: "https://remix.run/" }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 122,
              columnNumber: 59
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "circle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { className: "stroke", cx: 60, cy: 98, r: 50 }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "perfile-img", src: icon_portafolio_default, alt: "Marcos_Lopez" }, void 0, !1, {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.experiencia.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "a",
            {
              className: "icon",
              href: "https://github.com/programmer-lopez/portafolio-html",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ri.RiPagesFill, {}, void 0, !1, {
                fileName: "app/routes/portafolio.experiencia.tsx",
                lineNumber: 137,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/portafolio.experiencia.tsx",
              lineNumber: 133,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.experiencia.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.experiencia.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/portafolio.experiencia.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portafolio.experiencia.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/portafolio.experiencia.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/portafolio.contacto.tsx
var portafolio_contacto_exports = {};
__export(portafolio_contacto_exports, {
  default: () => ContactoPortafolioRoute,
  links: () => links3
});

// app/routes/styles/contactame.css
var contactame_default = "/build/_assets/contactame-GKYX5U7C.css";

// app/routes/portafolio.contacto.tsx
var import_react4 = require("@remix-run/react");

// public/img/CurriculumVitae.jpg
var CurriculumVitae_default = "/build/_assets/CurriculumVitae-MCTWR2TT.jpg";

// public/img/mac.png
var mac_default = "/build/_assets/mac-QCN76QZ6.png";

// public/img/correo.png
var correo_default = "/build/_assets/correo-RX6WCW6X.png";

// app/routes/portafolio.contacto.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: contactame_default }
];
function ContactoPortafolioRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "portafolio_contactame", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contactame_container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "encabezado", children: "Desarrolador Junior" }, void 0, !1, {
        fileName: "app/routes/portafolio.contacto.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "encabezado", children: "Marcos Lopez Sanchez" }, void 0, !1, {
        fileName: "app/routes/portafolio.contacto.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "encabezado", children: "PORTAFOLIO CONTACTO" }, void 0, !1, {
        fileName: "app/routes/portafolio.contacto.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contactame_content", style: { marginRight: "100px" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { style: { width: "100px", marginRight: "0", borderRadius: "10px" }, src: CurriculumVitae_default, alt: "" }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { style: { width: "300px" }, src: mac_default, alt: "" }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { style: { width: "300px", marginTop: "70px" }, src: correo_default, alt: "" }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.contacto.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio.contacto.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react4.Link,
      {
        className: "button",
        to: "https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link",
        download: "CV",
        reloadDocument: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", {}, void 0, !1, {
            fileName: "app/routes/portafolio.contacto.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this),
          "CV.pdf"
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.contacto.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/portafolio.contacto.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/portafolio.contacto.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/portafolio.contacto.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/portafolio.contacto.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/portafolio._index.tsx
var portafolio_index_exports = {};
__export(portafolio_index_exports, {
  default: () => PortafolioIndexRoute,
  links: () => links4
});

// public/img/perfile.png
var perfile_default = "/build/_assets/perfile-HGOCGL2P.png";

// app/routes/styles/portaIndex.css
var portaIndex_default = "/build/_assets/portaIndex-GUOAVMJS.css";

// app/routes/portafolio._index.tsx
var import_fa6 = require("react-icons/fa6"), import_react5 = require("@nextui-org/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: portaIndex_default }
];
function PortafolioIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "portafolio_acerca", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { style: { textAlign: "center", color: "white" }, children: "Marcos Lopez Sanchez" }, void 0, !1, {
      fileName: "app/routes/portafolio._index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { style: { textAlign: "center", color: "white", marginTop: "10px" }, children: "Junior Developer" }, void 0, !1, {
      fileName: "app/routes/portafolio._index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { id: "portafolio_index", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "portafolio-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "perfile-img", src: perfile_default, alt: "Marcos_Lopez" }, void 0, !1, {
          fileName: "app/routes/portafolio._index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "about-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "about-container", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-conteiner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 33,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "portafolio-h3", children: "Habilidades" }, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 34,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { style: { fontSize: "20px" }, children: "Experiencia en:" }, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 36,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 39,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 40,
                columnNumber: 25
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_fa6.FaReact, { style: { fontSize: "30px" } }, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 40,
                columnNumber: 32
              }, this),
              "React ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 41,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_fa6.FaJava, { style: { fontSize: "30px" } }, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 42,
                columnNumber: 25
              }, this),
              "java ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 43,
                columnNumber: 30
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_fa6.FaFileCode, { style: { fontSize: "30px" } }, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 44,
                columnNumber: 25
              }, this),
              "Spring Boot",
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 46,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_fa6.FaMdb, { style: { fontSize: "30px" } }, void 0, !1, {
                fileName: "app/routes/portafolio._index.tsx",
                lineNumber: 47,
                columnNumber: 25
              }, this),
              " Mongo DB"
            ] }, void 0, !0, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 35,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 31,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-conteiner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 55,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "portafolio-h3", children: "Disponibilidad" }, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 56,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "La experiencia obtenida es por el aprendizaje autodidacta con ayuda de las tecnolog\xEDa de la informacion. Cuento con toda la disponibilidad de esfuerzo, dedicaci\xF3n y tiempo." }, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 57,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 54,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-conteiner", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 69,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "portafolio-h3", children: "Compromiso" }, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 70,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Enfrento situaciones poco comunes, bajo presi\xF3n desarrollando habilidades tanto responsabilidad para un crecimiento propio, con una curva de aprendizaje en base a mi experiencia." }, void 0, !1, {
              fileName: "app/routes/portafolio._index.tsx",
              lineNumber: 71,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 68,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio._index.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio._index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio._index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "default",
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "primary",
            src: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 89,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "secondary",
            src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 94,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "success",
            src: "https://i.pravatar.cc/150?u=a04258114e29026302d"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 99,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "warning",
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 104,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react5.Avatar,
          {
            isBordered: !0,
            color: "danger",
            src: "https://i.pravatar.cc/150?u=a04258114e29026708c"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/portafolio._index.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio._index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio._index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portafolio._index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/portafolio._index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/portafolio.about.tsx
var portafolio_about_exports = {};
__export(portafolio_about_exports, {
  default: () => AboutPortafolioRoute,
  links: () => links5
});
var import_react6 = require("@remix-run/react");

// app/routes/styles/about.css
var about_default = "/build/_assets/about-K3NDR4O5.css";

// public/img/about.jpg
var about_default2 = "/build/_assets/about-ZXSBQION.jpg";

// app/routes/portafolio.about.tsx
var import_fa62 = require("react-icons/fa6"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links5 = () => [
  { rel: "stylesheet", href: about_default }
];
function AboutPortafolioRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "about-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Links, {}, void 0, !1, {
      fileName: "app/routes/portafolio.about.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Desarrollador de Software" }, void 0, !1, {
      fileName: "app/routes/portafolio.about.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Sobre m\xED" }, void 0, !1, {
      fileName: "app/routes/portafolio.about.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "Desarrollador de Software  " }, void 0, !1, {
      fileName: "app/routes/portafolio.about.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "about-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-conteiner", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: about_default2, alt: "Portafolio" }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 25,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 24,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "white" }, children: "Soy una persona que precisa instrucciones organizadas para que un ordenador pueda ejecutar sistemas, programas y aplicaciones que sean eficaces, accesibles y afable. Con atenci\xF3n, esfuerzo y perseverancia." }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 27,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.about.tsx",
          lineNumber: 22,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaTwitter, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 35,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://github.com/programmer-lopez/portafolio-html.git", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaGithub, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaLinkedin, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.about.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.about.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.about.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-conteiner", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "Experiencias" }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "white" }, children: "Me estoy enfocando en aprender nuevas tecnolog\xEDas, actualmente Remix es una de ellas, \xE9ste Portafolio esta desarrollado en Remix-tsx." }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h4", { children: "Disponibilidad y compromiso " }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "white" }, children: "Cuento con toda la disponibilidad de esfuerzo, dedicaci\xF3n y tiempo. Enfrento situaciones comunes dentro del desarrollo de software, habilidades para trabajar bajo presi\xF3n tanto responsabilidad para un crecimiento propio, con una curva de aprendizaje descendente." }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.about.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaTwitter, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://github.com/programmer-lopez/portafolio-html.git", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaGithub, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_fa62.FaLinkedin, {}, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.about.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.about.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.about.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.about.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio.about.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portafolio.about.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/portafolio.about.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/portafolio.tsx
var portafolio_exports = {};
__export(portafolio_exports, {
  default: () => PortafolioRoute,
  links: () => links6
});
var import_react7 = require("@remix-run/react");

// app/stylesGlobal/navigation.css
var navigation_default = "/build/_assets/navigation-G7ZMYJM6.css";

// app/routes/portafolio.tsx
var import_fa63 = require("react-icons/fa6"), import_bi = require("react-icons/bi"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links6 = () => [
  { rel: "stylesheet", href: navigation_default }
];
function PortafolioRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: "portafolio-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio__container-logo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: icon_portafolio_default, alt: "Portafolio", className: "portafolio-logo" }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/", title: "Portafolio", "aria-label": "Remix Portafolio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "logo-medium", children: "Developed with Remix Tsx" }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/portafolio.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "portafolio-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio__container-perfile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio-perfile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: about_default2, alt: "Acerca-de-Mi" }, void 0, !1, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h5", { className: "portafolio-perfile-h5", children: "Marcos Lopez" }, void 0, !1, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
          "Ingeniero en sistemas computacionales, enfocado en Desarrollo de",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Junior Developer" }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio-card-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "portafolio-card-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "mailto:ing.marcoslopezsanchez@gmail.com?Subject=Oferta%20de%20trabajo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_bi.BiLogoGmail, {}, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "https://www.linkedin.com/in/marcos-lopez-sanchez-455271219/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_fa63.FaLinkedin, {}, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 46,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 45,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "https://github.com/programmer-lopez/portafolio-html.git", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_fa63.FaGithub, {}, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 51,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_fa63.FaTwitter, {}, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "portafolio__links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "column hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: ".", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this),
            "Home"
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio.tsx",
              lineNumber: 72,
              columnNumber: 21
            }, this),
            "Acerca de mi"
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "experiencia", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio.tsx",
              lineNumber: 79,
              columnNumber: 21
            }, this),
            "Experiencia"
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "contacto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/portafolio.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this),
            "Contacto"
          ] }, void 0, !0, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/portafolio.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portafolio.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "portafolio-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/portafolio.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portafolio.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portafolio.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute,
  links: () => links7
});
var import_react8 = require("@remix-run/react");

// app/routes/styles/local.css
var local_default = "/build/_assets/local-JQO6VYX3.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links7 = () => [
  { rel: "stylesheet", href: local_default }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Marcos Lopez." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "content-hover ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "row hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "portafolio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 21,
          columnNumber: 19
        }, this),
        "Portafolio"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "row hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react8.Link,
        {
          to: "https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link",
          download: "CV",
          reloadDocument: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", {}, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this),
            "CV.pdf"
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 26,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-Y2ZLEDJ6.js", imports: ["/build/_shared/chunk-524W4XIG.js", "/build/_shared/chunk-DFFBMGQJ.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CX6UT4IR.js", imports: ["/build/_shared/chunk-SDWWKMA5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-REXEEGSF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portafolio": { id: "routes/portafolio", parentId: "root", path: "portafolio", index: void 0, caseSensitive: void 0, module: "/build/routes/portafolio-ERLRFEUK.js", imports: ["/build/_shared/chunk-T6FDUMDR.js", "/build/_shared/chunk-HB6NVDOX.js", "/build/_shared/chunk-3H3FF2GI.js", "/build/_shared/chunk-SGXQ7AX7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portafolio._index": { id: "routes/portafolio._index", parentId: "routes/portafolio", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/portafolio._index-DF4ULVHL.js", imports: ["/build/_shared/chunk-SDWWKMA5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portafolio.about": { id: "routes/portafolio.about", parentId: "routes/portafolio", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/portafolio.about-NKHIEIUS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portafolio.contacto": { id: "routes/portafolio.contacto", parentId: "routes/portafolio", path: "contacto", index: void 0, caseSensitive: void 0, module: "/build/routes/portafolio.contacto-45GHLTDK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portafolio.experiencia": { id: "routes/portafolio.experiencia", parentId: "routes/portafolio", path: "experiencia", index: void 0, caseSensitive: void 0, module: "/build/routes/portafolio.experiencia-P245TGQZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "ae376032", hmr: void 0, url: "/build/manifest-AE376032.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/portafolio.experiencia": {
    id: "routes/portafolio.experiencia",
    parentId: "routes/portafolio",
    path: "experiencia",
    index: void 0,
    caseSensitive: void 0,
    module: portafolio_experiencia_exports
  },
  "routes/portafolio.contacto": {
    id: "routes/portafolio.contacto",
    parentId: "routes/portafolio",
    path: "contacto",
    index: void 0,
    caseSensitive: void 0,
    module: portafolio_contacto_exports
  },
  "routes/portafolio._index": {
    id: "routes/portafolio._index",
    parentId: "routes/portafolio",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: portafolio_index_exports
  },
  "routes/portafolio.about": {
    id: "routes/portafolio.about",
    parentId: "routes/portafolio",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: portafolio_about_exports
  },
  "routes/portafolio": {
    id: "routes/portafolio",
    parentId: "root",
    path: "portafolio",
    index: void 0,
    caseSensitive: void 0,
    module: portafolio_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
