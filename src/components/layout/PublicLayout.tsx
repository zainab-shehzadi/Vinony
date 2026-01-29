import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "./Header";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
