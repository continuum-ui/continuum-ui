import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VisitIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M44 6H4a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h3.028a11.7 11.7 0 0 1 2.893-4H6V14h36v22h-4.165a12.1 12.1 0 0 1 3 4H44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                <path d="M27.712 35.2v-1.95a1.349 1.349 0 0 1 .344-.87 10.3 10.3 0 0 0 2.344-6.421c0-4.863-2.579-7.581-6.476-7.581s-6.55 2.824-6.55 7.581a10.409 10.409 0 0 0 2.454 6.426 1.35 1.35 0 0 1 .344.87V35.2A1.339 1.339 0 0 1 19 36.548c-7.83.681-9 6.037-9 8.149 0 .235-.017 3.03 0 3.261h27.922s.024-3.027.024-3.261c0-2.024-1.383-7.361-9.071-8.142a1.345 1.345 0 0 1-1.163-1.355Z" />
            </svg>
        );
    },
);
