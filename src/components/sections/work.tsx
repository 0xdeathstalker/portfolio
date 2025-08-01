import Link from "next/link";
import LinkIcon from "@/components/link-icon";
import { works } from "@/lib/config/site-data";
import type { Work as WorkType } from "@/lib/types";

export default function Work() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-medium mb-8">places i've been</h1>
      <div className="space-y-12">
        {works.map((work, index) => (
          <WorkCard
            // biome-ignore lint/suspicious/noArrayIndexKey: no other variable to use as key
            key={index}
            work={work}
          />
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

        <div className="absolute bottom-1 w-0 h-[1px] peer-hover:w-full dark:bg-neutral-100 bg-neutral-900 transition-all ease-[cubic-bezier(0.785,0.135,0.15,0.86)] duration-300" />
      </div>
      <h2 className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base">
        {work.role} {work.period && `(${work.period})`}
      </h2>
      <div className="text-sm">
        {work.description.map((d, i) => (
          <p
            // biome-ignore lint/suspicious/noArrayIndexKey: no other variable to use as key
            key={i}
            className="inline mx-0.5"
          >
            {d}
          </p>
        ))}
      </div>
    </div>
  );
}
