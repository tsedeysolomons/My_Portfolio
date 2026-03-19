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
    <div className="relative min-h-screen selection:bg-brand-500/30">
      {/* High-Energy Animated Background */}
      <div className="bg-cosmic" />
      
      {/* Dynamic Floating Blobs */}
      <div className="blob w-[500px] h-[500px] bg-brand-500/10 -top-24 -left-24" />
      <div className="blob w-[400px] h-[400px] bg-accent-pink/10 top-1/2 -right-24 delay-1000" />
      <div className="blob w-[600px] h-[600px] bg-accent-blue/10 -bottom-48 left-1/4 delay-700" />
      <div className="blob w-[300px] h-[300px] bg-brand-600/10 top-1/4 left-1/2 delay-500" />

      <Header onToggle={handleToggle} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
