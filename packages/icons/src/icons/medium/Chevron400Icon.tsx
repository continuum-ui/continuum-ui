import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Chevron400Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.97 15.044a.989.989 0 01-.698-1.688L9.627 8 4.27 2.644A.989.989 0 015.67 1.246L11.726 7.3a.988.988 0 010 1.398L5.67 14.754a.985.985 0 01-.7.29z" />
            </svg>
        );
    },
);
