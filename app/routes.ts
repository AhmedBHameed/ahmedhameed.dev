import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx"),

  layout("layouts/wrapper.tsx", [
    index("routes/index.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("hire-me", "routes/hire-me.tsx"),
  ]),
] satisfies RouteConfig;
