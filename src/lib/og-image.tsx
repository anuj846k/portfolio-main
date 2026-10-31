import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };

const avatarSrc = readFile(
  join(process.cwd(), "public/images/avatar/avatar.png"),
).then((file) => `data:image/png;base64,${file.toString("base64")}`);

// Shared 1200x630 social preview card for the site and blog posts.
export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const avatar = await avatarSrc;
  const host = new URL(DATA.url).host.replace(/^www\./, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(147,145,252,0.35), transparent 45%), radial-gradient(circle at 10% 95%, rgba(251,146,60,0.25), transparent 40%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img
            src={avatar}
            alt=""
            width={96}
            height={96}
            style={{ borderRadius: 9999, border: "3px solid rgba(255,255,255,0.2)" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>{DATA.name}</div>
            <div style={{ fontSize: 24, color: "#a1a1aa" }}>{eyebrow}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: title.length > 40 ? 60 : 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#71717a" }}>
          {host}
        </div>
      </div>
    ),
    ogImageSize,
  );
}
