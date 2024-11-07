import MovieStreamGallery from "@/components/movie&stream/MovieStreamGallery";
import Carousel from "@/components/ui/Carousel";

export default async function HomePage() {
  return (
    <main className="mb-20">
      <Carousel />
      <MovieStreamGallery />
    </main>
  );
}
