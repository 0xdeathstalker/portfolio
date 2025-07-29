import { work } from '@/lib/config/work';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Work() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-medium mb-8">work</h1>
      <div className="space-y-3">
        {work.map((exp) => (
          <div className="space-y-3 text-muted-foreground">
            <Link
              href={exp.href}
              target="_blank"
              className="inline-flex items-center gap-1 text-base text-foreground hover:underline underline-offset-4 text-lg"
            >
              {exp.company}
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </Link>
            <h2 className="text-neutral-600">
              {exp.role} {exp.period && `(${exp.period})`}
            </h2>
            <p className="text-sm">{exp.description}</p>
            {/* <div className="inline-flex items-center gap-3 flex-wrap">
        {exp.technologies.map((technology) => (
          <div key={technology} className="p-1 bg-accent text-xs">
            {technology}
          </div>
        ))}
      </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
