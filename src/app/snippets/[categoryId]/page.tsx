import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/snippets/code-block";
import { snippetCategories, type Snippet } from "@/data/snippets";

export function generateStaticParams() {
  return snippetCategories.map((category) => ({ categoryId: category.id }));
}

function getCodeLanguage(snippet: Snippet) {
  const extension = snippet.fileName?.split(".").pop();
  return extension === "ts" || extension === "tsx" ? extension : "typescript";
}

function getFileName(snippet: Snippet) {
  return snippet.fileName || snippet.code.split("\n")[0].replace("//", "").trim();
}

export default async function SnippetCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const category = snippetCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10 dark:bg-black">
      <h1 className="text-4xl font-bold mb-4 text-center text-balance text-foreground">
        {category.title}
      </h1>
      <p className="text-center mb-10 text-muted-foreground text-pretty">
        {category.description}
      </p>

      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        {category.snippets.map((snippet) => {
          const showTerminalIcon = snippet.tech === "Next.js";

          return (
            <div key={snippet.name} className="rounded-lg overflow-hidden">
              <div className="bg-[#252526] p-4 border-b border-[#333333]">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold text-white">
                      {snippet.name}
                    </h2>
                    {snippet.description && (
                      <p className="text-sm text-gray-400 mt-1">
                        {snippet.description}
                      </p>
                    )}
                  </div>
                  <span
                    className="shrink-0 px-3 py-1 rounded-full bg-[#303030] text-blue-400 text-sm"
                    translate="no"
                  >
                    {snippet.tech}
                  </span>
                </div>
              </div>

              {snippet.setup && (
                <CodeBlock
                  code={snippet.setup}
                  lang="bash"
                  fileName="Terminal"
                  showTerminalIcon={showTerminalIcon}
                />
              )}

              {snippet.env && (
                <div className="mt-4">
                  <CodeBlock
                    code={snippet.env}
                    lang="dotenv"
                    fileName=".env"
                    showTerminalIcon={showTerminalIcon}
                  />
                </div>
              )}

              <div className="mt-4">
                <CodeBlock
                  code={snippet.code}
                  lang={getCodeLanguage(snippet)}
                  fileName={getFileName(snippet)}
                  showTerminalIcon={showTerminalIcon}
                  showLineNumbers
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
