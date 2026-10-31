import { getPost } from "@/data/blog";
import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Blog post";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return renderOgImage({
    eyebrow: "Blog",
    title: post?.metadata.title ?? "Blog",
    subtitle: post?.metadata.summary ?? "",
  });
}
