"use client";

import { githubConfig } from "@/components/shared/Github";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import Container from "./shared/Container";
const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false },
);

const numberFormat = new Intl.NumberFormat("en-US");

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  total?: { lastYear?: number };
  contributions?: ContributionItem[];
};

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}?y=last`,
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: GitHubContributionResponse = await response.json();

        if (data.contributions && data.contributions.length > 0) {
          setContributions(data.contributions);
          setTotalContributions(data.total?.lastYear ?? 0);
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">
              {githubConfig.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total:{" "}
                <span className="font-black">
                  {numberFormat.format(totalContributions)}
                </span>{" "}
                contributions
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div
            role="status"
            aria-live="polite"
            className="flex items-center justify-center py-16"
          >
            <div className="text-center">
              <div
                aria-hidden="true"
                className="border-primary mx-auto mb-4 h-8 w-8 motion-safe:animate-spin rounded-full border-2 border-t-transparent"
              ></div>
              <p className="text-muted-foreground text-sm">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="text-muted-foreground border-border rounded-xl border-2 border-dashed p-8 text-center">
            <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <GitHubLogoIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <p className="mb-4 text-sm">
              {githubConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <GitHubLogoIcon className="h-4 w-4" aria-hidden="true" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-xs dark:border-white/10">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  maxLevel={githubConfig.maxLevel}
                  showTotalCount={false}
                  showColorLegend={true}
                  showMonthLabels={true}
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                  style={{
                    color: "rgb(139, 148, 158)",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
