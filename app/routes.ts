import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx"),

  layout("layouts/wrapper.tsx", [index("routes/index.tsx")]),
] satisfies RouteConfig;
