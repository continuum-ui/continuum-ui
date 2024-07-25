import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphAreaIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.371 16.743 34 24v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V18l10 12 3.584-5.376a.5.5 0 0 1 .832 0L20 30l9.517-13.324a.5.5 0 0 1 .854.067Z" />
                <path d="m11.769 25.66 2.068-3.1.083-.124a2.5 2.5 0 0 1 4.16 0l.083.124 1.911 2.866 7.811-10.935.1-.135a2.5 2.5 0 0 1 4.271.335l.074.148L34 18.187V2l-8 10-5.609-5.609a.5.5 0 0 0-.74.037L7.8 20.9Z" />
            </svg>
        );
    },
);
