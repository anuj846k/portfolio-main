import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${DATA.name}, ${DATA.description}`,
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-8 pb-28">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-2")}
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back
        </Link>
        <h1 className="font-serif text-xl font-bold">Resume</h1>
        <a
          href={DATA.resumeUrl}
          download
          className={cn(buttonVariants({ size: "sm" }), "gap-2 rounded-full")}
        >
          <Download className="size-4" aria-hidden="true" />
          Download PDF
        </a>
      </div>

      <iframe
        src={`${DATA.resumeUrl}#view=FitH`}
        title={`${DATA.name} resume`}
        className="h-[80dvh] w-full rounded-xl border bg-muted shadow-sm"
      />

      <p className="text-center text-xs text-muted-foreground">
        Can&apos;t see the preview?{" "}
        <a href={DATA.resumeUrl} className="underline underline-offset-4">
          Open the PDF directly
        </a>
        .
      </p>
    </main>
  );
}
