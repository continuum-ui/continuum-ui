import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const OrganizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 8H2V5a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293ZM33 10H2v21a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-21 4.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5ZM8.5 27.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75Zm0-6a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75Zm0-6a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75ZM25 27.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5Zm6-6a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
