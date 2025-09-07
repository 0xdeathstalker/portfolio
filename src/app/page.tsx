import Blogs from "@/components/sections/blogs";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <main className="relative pt-20 min-h-screen w-full font-sans px-4">
      <div className="mx-auto max-w-[70ch]">
        <Hero />

        <Work />

        <Blogs />

        <Projects />
      </div>

      <Footer />
    </main>
  );
}
