import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphStreamRankedAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.438 16.575c-4.077 0-7-4.986-12.466-4.986-7.455 0-6.643 4.986-9.973 4.986v7.974c.91 0 1.57-.57 2.756-1.66 1.523-1.4 3.611-3.326 7.217-3.326 3.258 0 5.518 1.531 7.51 2.881a12.033 12.033 0 0 0 3.685 1.942 15.983 15.983 0 0 1 2.041-1.629 48.718 48.718 0 0 0 .71-5.661c.041-.493.086-1 .133-1.519a2.09 2.09 0 0 1-1.613.998Zm9.974-10.466c-3.3 0-3.951 4.693-4.508 11.322a95.68 95.68 0 0 1-.318 3.3 15.341 15.341 0 0 1 6.31-.511 8.63 8.63 0 0 1 3.5-.665h2.492V6.109ZM13.973 23.562c-2.045 0-3.131 1-4.506 2.268S6.514 28.548 4 28.548v5.969A10.939 10.939 0 0 1 8.947 35.8a10.494 10.494 0 0 0 5.025 1.215 20.781 20.781 0 0 0 5.49-.9l.64-.163a15.8 15.8 0 0 1 2.373-8.275 21.509 21.509 0 0 1-3.237-1.914C17.5 24.578 16 23.562 13.973 23.562Zm0 17.449c-3.809 0-8.76-2.494-9.973-2.494V44h18.275a15.757 15.757 0 0 1-1.724-4.293 21.463 21.463 0 0 1-6.578 1.304ZM24.1 36A11.9 11.9 0 1 0 36 24.1 11.9 11.9 0 0 0 24.1 36Zm13.4-8a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
