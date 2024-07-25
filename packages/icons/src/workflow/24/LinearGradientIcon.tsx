import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinearGradientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 8h32v32H8ZM4 6v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" />
                <path opacity=".75" d="M8 40v-2h32v2z" />
                <path opacity=".7" d="M8 38v-2h32v2z" />
                <path opacity=".65" d="M8 36v-2h32v2z" />
                <path opacity=".6" d="M8 34v-2h32v2z" />
                <path opacity=".55" d="M8 32v-2h32v2z" />
                <path opacity=".5" d="M8 30v-2h32v2z" />
                <path opacity=".45" d="M8 28v-2h32v2z" />
                <path opacity=".4" d="M8 26v-2h32v2z" />
                <path opacity=".35" d="M8 24v-2h32v2z" />
                <path opacity=".3" d="M8 22v-2h32v2z" />
                <path opacity=".25" d="M8 20v-2h32v2z" />
                <path opacity=".2" d="M8 18v-2h32v2z" />
                <path opacity=".15" d="M8 16v-2h32v2z" />
                <path opacity=".1" d="M8 14v-2h32v2z" />
                <path opacity=".05" d="M8 12v-2h32v2z" />
            </svg>
        );
    },
);
