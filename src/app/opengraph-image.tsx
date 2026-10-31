import { DATA } from "@/data/resume";
import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = `${DATA.name} – Full Stack Developer`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Full Stack Developer · Noida, India",
    title: "I build and ship production software.",
    subtitle: DATA.description,
  });
}
