import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ChatAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.1 36a15.933 15.933 0 0 1 .139-2h-4.55a2 2 0 0 0-1.422.593L9.6 39.6V35a1 1 0 0 0-1-1H4.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v3.146a15.881 15.881 0 0 1 4-2.365V20a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h2v8.793a.5.5 0 0 0 .5.5.488.488 0 0 0 .35-.148L16 38h4.239a15.936 15.936 0 0 1-.139-2Z" />
                <path d="M34 18v2.239a15.654 15.654 0 0 1 13.04 4.333A3.963 3.963 0 0 0 48 22V8a4 4 0 0 0-4-4H22a4 4 0 0 0-4 4v4h10a6 6 0 0 1 6 6ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
