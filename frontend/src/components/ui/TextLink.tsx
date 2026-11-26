import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function TextLink({ className, ...props }: TextLinkProps) {
  return <a className={cn("text-link", className)} {...props} />;
}
