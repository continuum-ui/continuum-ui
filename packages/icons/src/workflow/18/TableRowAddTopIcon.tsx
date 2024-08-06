import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TableRowAddTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 17.9A8.9 8.9 0 1 0 18.1 9a8.9 8.9 0 0 0 8.9 8.9Zm-5-9.4a.5.5 0 0 1 .5-.5H26V4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V8h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V10h-3.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M16.893 2H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V19.107a12.236 12.236 0 0 1-2 1.124V22h-8v-1.084a12.154 12.154 0 0 1-2-.685V22h-8v-8h1.769a12.252 12.252 0 0 1 1.124-12ZM24 24h8v8h-8Zm-10 0h8v8h-8Zm-2-2H4v-8h8Zm0 10H4v-8h8Z" />
            </svg>
        );
    },
);
