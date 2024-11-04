import CategoryBar from "@/components/layouts/CategoryBar";
import Navbar from "@/components/layouts/Navbar";

export default function Baselayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <header className="container">
        {/* Navbar */}
        <Navbar />

        {/* Category Bar */}
        <CategoryBar />
      </header>
      {children}

      <footer>{/* footer */}</footer>
    </section>
  );
}
