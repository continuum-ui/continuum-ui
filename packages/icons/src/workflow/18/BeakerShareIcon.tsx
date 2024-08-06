import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BeakerShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 35V23a2.976 2.976 0 0 1 .031-.3l-5.3 1.667L12 14.453V4h8v9.45l2-2.218V4h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v10L.928 31.759A3 3 0 0 0 3.659 36h8.525A2.972 2.972 0 0 1 12 35Z" />
                <path d="M29.722 18.331 24 12l-5.708 6.331A1 1 0 0 0 19.035 20H22v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M30 22v10H18V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
