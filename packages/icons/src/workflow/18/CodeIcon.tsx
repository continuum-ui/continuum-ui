import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.493 19.061-8.193 8.32a1 1 0 0 1-1.425 0l-.893-.907a1.006 1.006 0 0 1 0-1.4L31.943 18l-6.959-7.071a1.006 1.006 0 0 1 0-1.4l.893-.907a1 1 0 0 1 1.425 0l8.191 8.32a1.523 1.523 0 0 1 0 2.119ZM.507 16.939 8.7 8.619a1 1 0 0 1 1.425 0l.893.907a1.006 1.006 0 0 1 0 1.4L4.057 18l6.959 7.071a1.006 1.006 0 0 1 0 1.4l-.893.907a1 1 0 0 1-1.425 0L.507 19.061a1.523 1.523 0 0 1 0-2.122ZM15.489 29.687h-1.144a1 1 0 0 1-.966-1.259l6.192-23.041a1 1 0 0 1 .966-.741h1.105a1 1 0 0 1 .966 1.254l-6.153 23.046a1 1 0 0 1-.966.741Z" />
            </svg>
        );
    },
);
