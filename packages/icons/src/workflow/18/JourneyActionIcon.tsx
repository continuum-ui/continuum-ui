import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const JourneyActionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.193 25.786h-2.125a6.125 6.125 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.147 6.147 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.147 6.147 0 0 0-2.178.9L22.1 20.319a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.508 1.513a6.125 6.125 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.125 6.125 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.147 6.147 0 0 0 2.178.9V35.2a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.132a6.147 6.147 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.125 6.125 0 0 0 .9-2.179h2.13a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.607-.607ZM27 30.164A3.164 3.164 0 1 1 30.164 27 3.165 3.165 0 0 1 27 30.164Z" />
                <path d="M16 26c0 .114.024.222.034.334A10.924 10.924 0 0 1 18 20.687V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16ZM29 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
