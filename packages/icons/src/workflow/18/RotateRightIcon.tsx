import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const RotateRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M25 10H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
                <path d="M35.5 15h-2v-3a9 9 0 0 0-9-9h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a6 6 0 0 1 6 6v3h-2a.5.5 0 0 0-.5.5.49.49 0 0 0 .147.35l3.537 4.033a.5.5 0 0 0 .632 0l3.537-4.033A.49.49 0 0 0 36 15.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
