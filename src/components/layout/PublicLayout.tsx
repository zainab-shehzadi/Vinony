import Footer from "@/components/layout/Footer";
import Header from "./Header";
import AnimatedOutlet from "@/routes/AnimatedOutlet";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
}
