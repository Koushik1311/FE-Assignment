import CategoryBar from "@/components/layouts/CategoryBar";
import MobileNavbar from "@/components/layouts/MobileNavbar";
import MobileSearchbar from "@/components/layouts/MobileSearchbar";
import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookMyShow",
  description: "Watch Movies Online in HD | Buy or Rent TV Series",
};

export default function Baselayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <header className="container">
        {/* Navbar */}
        <Navbar />

        {/* Mobile navbar show only on small device */}
        <MobileNavbar />

        {/* Mobile Searchbar show only on small device */}
        <MobileSearchbar />

        {/* Category Bar */}
        <CategoryBar />
      </header>
      {children}

      <footer>{/* footer */}</footer>
    </section>
  );
}
