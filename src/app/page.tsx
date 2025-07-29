import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Work from '@/components/sections/work';

export default function Home() {
  return (
    <main className="py-20 container mx-auto min-h-screen w-full max-w-[70ch] px-4 font-sans">
      <Hero />

      <Work />

      <Projects />
    </main>
  );
}
