import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPostsMetadata } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = getBlogPostsMetadata().toSorted(
    (a, b) =>
      Date.parse(b.metadata.publishedAt) - Date.parse(a.metadata.publishedAt),
  );

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8">Blog</h1>
      </BlurFade>
      {posts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{post.metadata.title}</p>
              <time
                dateTime={post.metadata.publishedAt}
                className="h-6 text-xs text-muted-foreground"
              >
                {formatDate(post.metadata.publishedAt)}
              </time>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
