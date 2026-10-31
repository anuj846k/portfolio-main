import { Terminal } from "lucide-react";
import { codeToHtml } from "shiki";

import { CopyButton } from "@/components/snippets/copy-button";
import { cn } from "@/lib/utils";

const lineNumberClasses =
  "[&_.line]:before:[counter-increment:line] [&_.line]:before:content-[counter(line)] [&_.line]:before:inline-block [&_.line]:before:w-6 [&_.line]:before:mr-4 [&_.line]:before:text-right [&_.line]:before:text-gray-600";

export async function CodeBlock({
  code,
  lang,
  fileName,
  showTerminalIcon,
  showLineNumbers = false,
}: {
  code: string;
  lang: string;
  fileName: string;
  showTerminalIcon: boolean;
  showLineNumbers?: boolean;
}) {
  const html = await codeToHtml(code, { lang, theme: "dark-plus" });

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-[#1E1E1E] border-b border-[#333333] px-4 py-2 rounded-t-lg">
        {showTerminalIcon && (
          <Terminal size={16} className="text-white" aria-hidden="true" />
        )}
        <span className="text-sm text-gray-400" translate="no">
          {fileName}
        </span>
      </div>
      <div className="relative bg-[#1E1E1E] p-4">
        <div
          className={cn(
            "overflow-x-auto text-sm [&_pre]:bg-transparent! [&_pre]:py-0! pr-10",
            showLineNumbers && lineNumberClasses,
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyButton code={code} />
      </div>
    </div>
  );
}
