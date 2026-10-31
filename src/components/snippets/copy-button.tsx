"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={status === "copied" ? "Copied" : "Copy code"}
        className="absolute top-4 right-4 p-2 rounded-md hover:bg-[#2D2D2D] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0ea5e9]"
      >
        {status === "copied" ? (
          <Check size={16} className="text-green-500" aria-hidden="true" />
        ) : (
          <Copy size={16} className="text-gray-400" aria-hidden="true" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "copied" && "Code copied to clipboard"}
        {status === "failed" && "Copy failed. Select the code and copy it manually."}
      </span>
    </>
  );
}
