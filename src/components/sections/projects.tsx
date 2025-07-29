import { projects } from '@/lib/config/projects';
import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-medium mb-8">projects</h1>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="space-y-3 text-muted-foreground">
      <Link
        href={project.href}
        target="_blank"
        className="inline-flex items-center gap-1 text-base text-foreground hover:underline underline-offset-4 text-lg"
      >
        {project.title}
        <ArrowUpRight className="w-4 h-4 text-foreground" />
      </Link>
      <h2 className="text-neutral-600 text-xs">
        {project.role} {project.period && `(${project.period})`}
      </h2>
      <p className="text-sm">{project.description}</p>
      <div className="inline-flex items-center gap-3 flex-wrap">
        {project.technologies.map((technology) => (
          <div key={technology} className="p-1 bg-accent text-xs">
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
