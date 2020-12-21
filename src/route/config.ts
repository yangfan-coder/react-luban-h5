import { RouteConfig } from "luban-router/es/definitions";
import { Home } from "@/views/Home";

export const config: RouteConfig = {
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
      meta: { name: "Home" },
    },
  ],
};
