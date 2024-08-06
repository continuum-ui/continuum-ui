import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ColumnSettingsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M10 34H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7ZM17.42 30.937a3.613 3.613 0 0 1-2.22-3.33v-1.214a3.612 3.612 0 0 1 2.22-3.33 3.614 3.614 0 0 1 .775-3.948l.918-.919a3.584 3.584 0 0 1 2.552-1.057c.114 0 .223.023.334.033V2H14v32h3.546a3.627 3.627 0 0 1-.126-3.063ZM26.393 15.2h1.214a3.613 3.613 0 0 1 3.329 2.219 3.545 3.545 0 0 1 3.064.144V3a1 1 0 0 0-1-1h-7v13.26a3.42 3.42 0 0 1 .393-.06Z" />
                <path d="M35.193 25.786h-2.125a6.142 6.142 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.145 6.145 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.145 6.145 0 0 0-2.178.9l-1.513-1.513a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.513 1.513a6.142 6.142 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.142 6.142 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.145 6.145 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.131a6.145 6.145 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.142 6.142 0 0 0 .9-2.179h2.125a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.607-.607ZM27 30.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
