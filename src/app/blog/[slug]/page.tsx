import { BlogContent } from "@/components/sections/blog-content";
import { buttonVariants } from "@/components/ui/button";
import { getBlogBySlug } from "@/lib/actions/blog";
import { cn, formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Blog({ params }: PageProps) {
  const slug = (await params).slug;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[70ch] min-h-screen font-sans px-4 pt-20">
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "outline" }), "h-7 has-[>svg]:pl-1 gap-1 mb-8 text-muted-foreground")}
      >
        <ChevronLeft className="size-4" />
        Back
      </Link>

      <h1 className="text-4xl text-foreground font-semibold mb-4">{blog.metadata.title}</h1>

      <span className="mb-8 inline-block text-muted-foreground">{formatDate(blog.metadata.date)}</span>

      <article className="prose prose-invert prose-headings:text-white prose-a:text-white hover:prose-a:underline">
        <BlogContent source={blog.content} />
      </article>
    </main>
  );
}
