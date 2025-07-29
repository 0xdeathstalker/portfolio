import { works } from '@/lib/config/work';
import type { Work as WorkType } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Work() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-medium mb-8">work</h1>
      <div className="space-y-3">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: WorkType }) {
  return (
    <div className="space-y-3 text-muted-foreground">
      <Link
        href={work.href}
        target="_blank"
        className="inline-flex items-center gap-1 text-base text-foreground hover:underline underline-offset-4 text-lg"
      >
        {work.company}
        <ArrowUpRight className="w-4 h-4 text-foreground" />
      </Link>
      <h2 className="text-neutral-600">
        {work.role} {work.period && `(${work.period})`}
      </h2>
      <p className="text-sm">{work.description}</p>
    </div>
  );
}
