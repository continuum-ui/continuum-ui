import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const InfoOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.15 12A2.15 2.15 0 1 1 18 9.85 2.15 2.15 0 0 1 20.15 12Zm.183 12H20v-7.6a.4.4 0 0 0-.4-.4h-3.934s-1.166.032-1.166 1c0 .967 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1c0 .967 1.167 1 1.167 1h4.667s1.166-.033 1.166-1c0-.968-1.167-1-1.167-1ZM18 1a17 17 0 1 0 17 17A17 17 0 0 0 18 1Zm0 30.35A13.35 13.35 0 1 1 31.35 18 13.35 13.35 0 0 1 18 31.35Z" />
            </svg>
        );
    },
);
