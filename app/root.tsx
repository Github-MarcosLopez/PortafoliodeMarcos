import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { LiveReload, Outlet, Links, Meta } from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { NextUIProvider } from "@nextui-org/react";

import globalLargeStylesUrl from "~/stylesGlobal/global-large.css";
import globalMediumStylesUrl from "~/stylesGlobal/global-medium.css";
import globalStylesUrl from "~/stylesGlobal/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStylesUrl,
    media: "screen and (min-width: 1024px)",
  },
];

export const meta: V2_MetaFunction = () => {
  return [
    {
      charset: "utf-8",
      title: "Portafolio",
      viewport: "width=device-width, initial-scale=1",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta
          name="google-site-verification"
          content="axgEwjOvGX8m2Aag850jmd45ATtOWJ8dYhq7rriBCro"
        />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
