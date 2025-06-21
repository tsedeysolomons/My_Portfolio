import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/Applayout.tsx", [
    index("routes/home.tsx"), // <- This should be a file path, not just "routes/home.tsx"
    route("about", "./routes/about.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("skill", "./routes/skill.tsx"),
    route("project", "./routes/project.tsx"),
    route("experience", "./routes/experience.tsx"),
    route("blog", "./routes/blog.tsx"),
  ]),
] satisfies RouteConfig;
