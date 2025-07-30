import { works } from '@/lib/config/work';
import type { Work as WorkType } from '@/lib/types';
import Link from 'next/link';
import LinkIcon from '../link-icon';

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
      <div className="w-fit relative">
        <Link
          href={work.href}
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground peer text-lg link"
        >
          {work.company}
          <LinkIcon />
        </Link>

        <div className="absolute bottom-1 w-0 h-[1px] peer-hover:w-full bg-black transition-all ease-[cubic-bezier(0.785,0.135,0.15,0.86)] duration-300" />
      </div>
      <h2 className="text-neutral-600">
        {work.role} {work.period && `(${work.period})`}
      </h2>
      <p className="text-sm">{work.description}</p>
    </div>
  );
}
