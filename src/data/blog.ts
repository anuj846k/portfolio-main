import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

const contentDir = path.join(process.cwd(), "content");

export const getPost = cache(async (slug: string) => {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: data as Metadata,
    slug,
  };
});

export function getBlogPostsMetadata() {
  return getMDXFiles(contentDir).map((file) => {
    const slug = path.basename(file, path.extname(file));
    const source = fs.readFileSync(path.join(contentDir, file), "utf-8");
    return { slug, metadata: matter(source).data as Metadata };
  });
}
