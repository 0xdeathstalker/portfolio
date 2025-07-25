import ScrambleText from './components/scramble-text';

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen w-full max-w-[100ch] px-4">
      <main className="py-20">
        <ScrambleText text="soumya mukherjee" />
      </main>
    </div>
  );
}
