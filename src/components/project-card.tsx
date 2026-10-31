import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MagicCard } from "@/components/ui/magic-card";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ProjectVideo } from "./project-video";

const VISIBLE_TAGS = 5;

interface Props {
  title: string;
  href?: string;
  description: string;
  highlights?: readonly string[];
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectCard({
  title,
  href,
  description,
  highlights,
  dates,
  tags,
  image,
  video,
  links,
}: Props) {
  const media = (
    <div className="relative aspect-video overflow-hidden border-b bg-muted">
      {video && <ProjectVideo src={video} />}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 640px) 400px, 100vw"
          className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      )}
    </div>
  );
  const hiddenTagCount = tags.length - VISIBLE_TAGS;

  return (
    <MagicCard className="h-full">
      <article className="flex h-full flex-col">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className="block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          >
            {media}
          </Link>
        ) : (
          media
        )}

        <div className="flex flex-1 flex-col gap-3 p-4">
          <header className="flex items-baseline justify-between gap-2">
            <h3 className="truncate font-semibold tracking-tight">{title}</h3>
            <time className="shrink-0 text-xs tabular-nums text-muted-foreground">
              {dates}
            </time>
          </header>

          <p className="line-clamp-3 text-pretty text-xs text-muted-foreground">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <Collapsible className="group/details">
              <CollapsibleTrigger className="inline-flex items-center gap-1 rounded-sm text-xs font-medium hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring">
                <span className="group-data-[state=open]/details:hidden">Show details</span>
                <span className="hidden group-data-[state=open]/details:inline">Hide details</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-3 transition-transform group-data-[state=open]/details:rotate-180"
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="prose mt-2 max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert">
                  <Markdown>
                    {highlights.map((item) => `- ${item}`).join("\n")}
                  </Markdown>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          <ul className="flex flex-wrap gap-1" aria-label="Technologies">
            {tags.slice(0, VISIBLE_TAGS).map((tag) => (
              <li key={tag}>
                <Badge variant="secondary" className="px-1.5 py-0 text-[10px] font-normal">
                  {tag}
                </Badge>
              </li>
            ))}
            {hiddenTagCount > 0 && (
              <li>
                <Badge
                  variant="outline"
                  className="px-1.5 py-0 text-[10px] font-normal"
                  title={tags.slice(VISIBLE_TAGS).join(", ")}
                >
                  +{hiddenTagCount}
                </Badge>
              </li>
            )}
          </ul>

          {links && links.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-[11px] font-medium shadow-xs transition-colors hover:bg-accent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.icon}
                  {link.type}
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    </MagicCard>
  );
}
