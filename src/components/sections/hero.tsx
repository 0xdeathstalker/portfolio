import { portfolio } from '@/lib/config/site';
import Socials from './socials';

export default function Hero() {
  return (
    <section className="pb-5">
      <div className="flex items-start justify-between">
        <h1 className="text-4xl font-medium mb-10">{portfolio.author}</h1>

        <Socials />
      </div>
      <p className="text-muted-foreground text-sm">{portfolio.bio}</p>
    </section>
  );
}
