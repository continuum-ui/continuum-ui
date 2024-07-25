import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AsteriskIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.585 29.5c.249.25.417.584 0 .917l-5.167 3.334c-.417.25-.583.083-.751-.334l-6.416-11.169L8.833 31.5c-.083.166-.333.332-.582 0l-4-4.168c-.417-.25-.334-.5 0-.749l9.5-7.918L2.917 14.58c-.168 0-.417-.332-.251-.749L5.5 8.164A.438.438 0 0 1 6.25 8l9.5 6.167L16.335 2a.439.439 0 0 1 .5-.5l6.917.916c.417 0 .5.167.417.584l-3.251 11.914 11-3.333c.249-.167.5-.167.666.333l1.084 6.167c.083.416 0 .583-.334.583l-11.5.917Z" />
            </svg>
        );
    },
);
