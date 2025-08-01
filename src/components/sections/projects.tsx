import Link from "next/link";
import LinkIcon from "@/components/link-icon";
import { projects } from "@/lib/config/site-data";
import type { Project } from "@/lib/types";

export default function Projects() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-medium mb-8">builds</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="space-y-3 text-muted-foreground">
      <div className="w-fit relative">
        <Link
          href={project.href}
          target="_blank"
          className="inline-flex items-center gap-1 text-foreground peer text-lg link"
        >
          {project.title}
          <LinkIcon />
        </Link>

        <div className="absolute bottom-1 w-0 h-[1px] peer-hover:w-full dark:bg-neutral-100 bg-neutral-900 transition-all ease-[cubic-bezier(0.785,0.135,0.15,0.86)] duration-300" />
      </div>

      <h2 className="dark:text-neutral-300 text-neutral-700 text-xs">
        {project.role} {project.period && `(${project.period})`}
      </h2>
      <p className="text-sm">{project.description}</p>
      <div className="inline-flex items-center gap-3 flex-wrap">
        {project.technologies.map((technology) => (
          <div
            key={technology}
            className="py-1 px-1.5 bg-accent rounded-sm text-xs"
          >
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
