import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LinkOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m14.848 12.698-1.994 1.919-7.105-6.986 1.995-1.92 7.104 6.987zM42.401 40.369l-1.994 1.92-7.066-7.113 1.994-1.919 7.066 7.112zM14.743 2.4h3.086v6.171h-3.086zM2.4 14.743h6.171v3.086H2.4zM39.429 30.171H45.6v3.086h-6.171zM30.171 39.429h3.086V45.6h-3.086zM42.1 5.9a10.913 10.913 0 0 0-15.434 0c-.408.408-4.428 4.4-6.546 6.5l3.312 3.312a8392.05 8392.05 0 0 0 6.541-6.5 6.236 6.236 0 1 1 8.819 8.819l-6.521 6.521 3.307 3.307 6.522-6.521a10.913 10.913 0 0 0 0-15.438ZM24.529 32.243c-2.152 2.173-6.3 6.349-6.5 6.545a6.236 6.236 0 0 1-8.819-8.819l6.521-6.522-3.305-3.307-6.521 6.522A10.913 10.913 0 1 0 21.339 42.1c.418-.419 4.4-4.439 6.492-6.551Z" />
            </svg>
        );
    },
);
