import { portfolio } from "@/lib/config/site-data";
import Socials from "./socials";

export default function Hero() {
  return (
    <section className="pb-10 sm:pb-5">
      <div className="flex flex-col sm:flex-row items-start justify-start gap-5 sm:justify-between mb-10">
        <h1 className="text-4xl font-medium">{portfolio.author}</h1>

        <Socials />
      </div>
      <p className="text-muted-foreground text-sm">{portfolio.bio}</p>
    </section>
  );
}
