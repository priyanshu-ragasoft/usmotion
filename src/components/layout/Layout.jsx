import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="film-grain" aria-hidden="true" />
    </div>
  );
}
