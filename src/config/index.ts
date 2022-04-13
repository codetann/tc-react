import { Route } from "./config";

const routes: Array<Route> = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "photo",
    path: "/photo",
  },
  {
    name: "video",
    path: "/video",
  },
  {
    name: "beauty",
    path: "/beauty",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const config = {
  routes,
};
