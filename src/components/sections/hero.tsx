import { portfolio } from '@/config/site';
import Socials from './socials';

export default function Hero() {
  return (
    <div>
      <h1 className="uppercase text-3xl font-semibold">{portfolio.author}</h1>
      <p className="text-muted-foreground mt-3 text-sm">{portfolio.bio}</p>

      <Socials />
    </div>
  );
}
