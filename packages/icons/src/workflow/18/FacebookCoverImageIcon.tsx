import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FacebookCoverImageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.136 28.345v-1.014a.7.7 0 0 1 .177-.452 5.386 5.386 0 0 0 1.2-3.34c0-2.527-1.326-3.94-3.33-3.94s-3.368 1.468-3.368 3.94a5.442 5.442 0 0 0 1.265 3.34.707.707 0 0 1 .177.452v1.009a.694.694 0 0 1-.6.7C4.629 29.4 4 32.18 4 33.278c0 .122.014.6.023.722h14.364s.013-.6.013-.722c0-1.052-.711-3.825-4.665-4.231a.7.7 0 0 1-.599-.702Z" />
                <path d="M33 4H3a1 1 0 0 0-1 1v23.4a1.551 1.551 0 0 0 .291.9 7.336 7.336 0 0 1 3.221-2.564 8.159 8.159 0 0 1-.693-3.2 8.264 8.264 0 0 1 .447-2.729A12.66 12.66 0 0 0 4 21.379V8h28v15.187a6.155 6.155 0 0 1-4.51-2.416c-1.375-1.81-3.276-3.97-4.519-3.97-1.694 0-3.721 3.307-5.6 5.161a8.822 8.822 0 0 1 .147 1.579 8.3 8.3 0 0 1-.662 3.217A7.364 7.364 0 0 1 20.521 30H33a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
