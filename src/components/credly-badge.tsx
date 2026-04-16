"use client";

import { useEffect, useRef } from "react";

interface CredlyBadgeProps {
  badgeId: string;
  width?: string;
  height?: string;
  className?: string;
}

export function CredlyBadge({
  badgeId,
  width = "100%",
  height = "100%",
  className,
}: CredlyBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the badge div that Credly's script looks for
    const badgeDiv = document.createElement("div");
    badgeDiv.setAttribute("data-iframe-width", width);
    badgeDiv.setAttribute("data-iframe-height", height);
    badgeDiv.setAttribute("data-share-badge-id", badgeId);
    badgeDiv.setAttribute("data-share-badge-host", "https://www.credly.com");

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(badgeDiv);
    }

    // Load the Credly embed script
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      script.remove();
    };
  }, [badgeId, width, height]);

  return <div ref={containerRef} className={className} />;
}
