import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerWidth = "narrow" | "content" | "wide";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  width?: ContainerWidth;
};

export function Container({
  width = "wide",
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("container", `container--${width}`, className)} {...props} />
  );
}
