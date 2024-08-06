import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.935 6.935 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.526 4.252-9.778-9.777a6.966 6.966 0 0 1 9.778 9.777Z" />
                <path d="M16.04 28S16 26.984 16 26V8h8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8v20H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8.21a10.934 10.934 0 0 1-1.17-4Z" />
            </svg>
        );
    },
);
