import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type GridProps = HTMLAttributes<HTMLDivElement>;

export function Grid({ className, ...props }: GridProps) {
  return <div className={cn("grid-primitive", className)} {...props} />;
}
