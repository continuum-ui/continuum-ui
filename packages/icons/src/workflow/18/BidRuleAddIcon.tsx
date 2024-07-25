import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BidRuleAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect
                    height="3.155"
                    rx=".789"
                    ry=".789"
                    transform="rotate(-44.995 18.023 6.023)"
                    width="12.619"
                    x="11.713"
                    y="4.445"
                />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5ZM33.61 16.639l1.418-1.418a.789.789 0 0 0 0-1.116l-1.115-1.115a.789.789 0 0 0-1.116 0l-2.237 2.238a12.207 12.207 0 0 1 3.05 1.411ZM27 14.7c.1 0 .189.012.286.014L30 12l-6-6-6 6 3.844 3.844A12.231 12.231 0 0 1 27 14.7ZM19.938 16.938 18 15 1.939 29.818a1.5 1.5 0 0 0 0 2.122l2.122 2.12a1.5 1.5 0 0 0 2.121 0l8.761-9.5a12.305 12.305 0 0 1 4.995-7.622Z" />
            </svg>
        );
    },
);
