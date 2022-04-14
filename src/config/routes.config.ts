import { Route } from "./config";
import { Home, Photo } from "@pages";

export const routes: Array<Route> = [
  {
    name: "home",
    path: "/",
    element: Home,
  },
  {
    name: "photo",
    path: "/photo",
    element: Photo,
  },
  {
    name: "video",
    path: "/video",
    element: await import("../pages/Video").then((m) => m.default),
  },
  // {
  //   name: "beauty",
  //   path: "/beauty",
  //   element: document.createElement("div"),
  // },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];
