import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
// AppLayout.tsx
export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
