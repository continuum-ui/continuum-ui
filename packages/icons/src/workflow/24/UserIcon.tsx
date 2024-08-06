import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41.977 44A2.008 2.008 0 0 0 44 41.743c-1.364-8.282-10.117-11.143-12.853-11.38-2.075-.18-2.108-1.841-2.108-3.911 0 0 4.449-4.942 4.449-11.229C33.488 8.424 29.6 4 24 4s-9.488 4.424-9.488 11.223c0 6.287 4.449 11.229 4.449 11.229 0 2.07-.033 3.731-2.108 3.911C14.117 30.6 5.364 33.461 4 41.743A2.008 2.008 0 0 0 6.023 44Z" />
            </svg>
        );
    },
);
