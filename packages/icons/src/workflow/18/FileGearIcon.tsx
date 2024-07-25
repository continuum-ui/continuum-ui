import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.193 25.786h-2.125a6.142 6.142 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.145 6.145 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.145 6.145 0 0 0-2.178.9l-1.513-1.513a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.513 1.513a6.142 6.142 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.142 6.142 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.145 6.145 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.131a6.145 6.145 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.142 6.142 0 0 0 .9-2.179h2.125a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.609-.607ZM27 30.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5ZM16 2v10H6L16 2z" />
                <path d="M16.5 27A10.5 10.5 0 0 1 27 16.5a10.378 10.378 0 0 1 3 .488V3a1 1 0 0 0-1-1H18v11a1 1 0 0 1-1 1H6v19a1 1 0 0 0 1 1h12.225a10.423 10.423 0 0 1-2.725-7Z" />
            </svg>
        );
    },
);
