import type * as React from "react";
import { cn } from "@continuum-ui/utils";
import { type VariantProps } from "class-variance-authority";

import { badgeVariants } from "./variants";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
