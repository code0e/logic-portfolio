import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "column" | "row";
};

export function Stack({
  direction = "column",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn("stack", direction === "row" && "stack--row", className)}
      {...props}
    />
  );
}
