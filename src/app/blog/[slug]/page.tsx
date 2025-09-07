import { BlogContent } from "@/components/sections/blog-content";
import { getBlogBySlug } from "@/lib/actions/blog";
import { formatDate } from "@/lib/utils";
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
    <section className="mx-auto max-w-[70ch] font-sans px-4 pt-20">
      <h1 className="text-4xl text-white">{blog.metadata.title}</h1>

      <span>{formatDate(blog.metadata.date)}</span>

      <article className="prose prose-invert prose-headings:text-white prose-a:text-white hover:prose-a:underline">
        <BlogContent source={blog.content} />
      </article>
    </section>
  );
}
