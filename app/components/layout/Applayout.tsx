import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import { useState } from "react";
// AppLayout.tsx
export default function AppLayout() {
  const [dark, setDark] = useState(false);
  const handleToggle = () => {
    setDark((prev) => !prev);
    // Optionally, add logic to toggle dark mode class on <html> or <body>
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="relative min-h-screen">
      <div className="bg-mesh" />
      <Header onToggle={handleToggle} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
