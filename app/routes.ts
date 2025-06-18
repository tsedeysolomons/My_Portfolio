import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { Contact } from "lucide-react";

export default [
  index("routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("skill", "./routes/skill.tsx"),
  route("project", "./routes/project.tsx"),
  route("experience", "./routes/experience.tsx"),
  route("blog", "./routes/blog.tsx"),
] satisfies RouteConfig;
