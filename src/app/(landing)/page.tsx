import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { projects } from '@/config/projects';
import type { Project } from '@/lib/types';

export default function Home() {
  return (
    <section className="mt-6 text-sm">
      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-dashed p-6 space-y-3 text-muted-foreground group hover:border-foreground/40 transition-colors ease-in-out">
      <Link
        href={project.href}
        className="inline-flex items-center gap-1 text-base text-white hover:underline underline-offset-4"
      >
        {project.title}
        {/* TODO: animate on hover  */}
        <ArrowTopRightIcon className="w-4 h-4 text-muted-foreground transition-colors ease-in-out group-hover:text-foreground" />
      </Link>
      <h2 className="text-neutral-600 text-xs mt-3">
        {project.role} {project.period && `(${project.period})`}
      </h2>
      <p>{project.description}</p>
    </div>
  );
}
