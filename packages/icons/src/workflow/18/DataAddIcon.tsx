import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm4.9 10.4h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5ZM15 27a11.972 11.972 0 0 1 .347-2.82C10.288 23.856 3.5 22.653 2 20.27V29c0 2.683 6.769 4.866 15.258 4.988A11.932 11.932 0 0 1 15 27Z" />
                <path d="M27 15a11.924 11.924 0 0 1 6.961 2.238A1.5 1.5 0 0 0 34 17v-6.73c-2.447 3.1-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.562 6.171 4.671 14.12 4.963A11.989 11.989 0 0 1 27 15Z" />
            </svg>
        );
    },
);
