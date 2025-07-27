import { MapPin } from 'lucide-react';
import { portfolio } from '@/config/site';
import { skills } from '@/config/skills';
import Socials from './socials';

export default function Hero() {
  return (
    <div>
      <h1 className="uppercase text-3xl font-semibold">{portfolio.author}</h1>
      <h2 className="inline-flex items-center gap-2 text-muted-foreground text-sm mt-3">
        <MapPin className="w-4 h-4" /> kolkata, india
      </h2>

      <p className="text-muted-foreground mt-3 text-sm">{portfolio.bio}</p>

      <Socials />

      <div className="flex flex-col items-start gap-4">
        {skills.map((skill) => (
          <p
            key={skill.category}
            className="text-sm text-accent-foreground/90 dark:text-muted-foreground tracking-tight"
          >
            <span className="font-semibold text-foreground">
              {skill.category}:{' '}
            </span>
            {skill.technologies.join(', ')}
          </p>
        ))}
      </div>
    </div>
  );
}
