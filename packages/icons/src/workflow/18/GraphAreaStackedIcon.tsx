import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphAreaStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.371 16.321 34 23.578v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-15l10 12 3.584-5.378a.5.5 0 0 1 .832 0L20 29.578l9.517-13.324a.5.5 0 0 1 .854.067Z" />
                <path d="m11.769 25.239 2.151-3.227a2.5 2.5 0 0 1 4.16 0L20.074 25l7.906-11.067a2.5 2.5 0 0 1 4.271.335L34 17.765V7.578l-3.57-5.355a.5.5 0 0 0-.84.012L20 17.578 16.416 12.2a.5.5 0 0 0-.832 0L12 17.578l-10-10v5.938Z" />
            </svg>
        );
    },
);
