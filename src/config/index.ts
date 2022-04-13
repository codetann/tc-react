import { Route } from "./config";
import { Home } from "@pages";

const routes: Array<Route> = [
  {
    name: "home",
    path: "/",
    element: Home,
  },
  {
    name: "photo",
    path: "/photo",
    element: await import("../pages/Photo").then((m) => m.default),
  },
  {
    name: "video",
    path: "/video",
    element: await import("../pages/Video").then((m) => m.default),
  },
  // {
  //   name: "beauty",
  //   path: "/beauty",
  // },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

export const config = {
  routes,
};
