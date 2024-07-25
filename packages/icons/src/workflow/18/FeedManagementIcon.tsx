import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedManagementIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.74 28H6v-6h9.76a12.256 12.256 0 0 1 1.126-2H6v-6h24v1.069a12.216 12.216 0 0 1 2 .69V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h10.069a12.246 12.246 0 0 1-.329-2ZM6 6h24v6H6Z" />
                <path d="M35.193 25.786h-2.125a6.142 6.142 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.146 6.146 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.145 6.145 0 0 0-2.178.9l-1.513-1.513a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.513 1.513a6.143 6.143 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.143 6.143 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.145 6.145 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.131a6.145 6.145 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.142 6.142 0 0 0 .9-2.179h2.125a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.609-.607ZM27 30.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
