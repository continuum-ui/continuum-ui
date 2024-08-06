import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SelectGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 8.731V6h10v6.107l4 3.982V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2ZM35.193 25.786h-2.125a6.142 6.142 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.145 6.145 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.145 6.145 0 0 0-2.178.9l-1.513-1.513a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.513 1.513a6.142 6.142 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.142 6.142 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.145 6.145 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.131a6.145 6.145 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.142 6.142 0 0 0 .9-2.179h2.125a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.609-.607ZM27 30.164A3.164 3.164 0 1 1 30.164 27 3.164 3.164 0 0 1 27 30.164Z" />
                <path d="M18.55 18.1 8.5 8.086A.285.285 0 0 0 8.294 8 .292.292 0 0 0 8 8.292v19.139a.292.292 0 0 0 .294.293.285.285 0 0 0 .2-.086l4.37-5.657h2.939A12.318 12.318 0 0 1 18.55 18.1Z" />
            </svg>
        );
    },
);
