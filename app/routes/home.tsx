import Welcome from "../routes/welcome";
import { Link } from "react-router-dom";
//import ContactPage from "./Contact";?

export function meta() {
  return [
    { title: "Tsedey Solomon" },
    { name: "description", content: "Welcome to Tsedey Solomon's portfolio!" },
  ];
}
export default function Home() {
  return <Welcome />;
  // To show About component, replace the above line with: return <About />;
}
