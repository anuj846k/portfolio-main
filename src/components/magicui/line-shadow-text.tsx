import { cn } from "@/lib/utils";

interface LineShadowTextProps extends React.HTMLAttributes<HTMLElement> {
  shadowColor?: string;
  as?: React.ElementType;
}

export function LineShadowText({
  children,
  shadowColor,
  className,
  style,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <Component
      style={
        shadowColor
          ? ({ "--shadow-color": shadowColor, ...style } as React.CSSProperties)
          : style
      }
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-size-[0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
      data-text={content}
      {...props}
    >
      {content}
    </Component>
  );
}
