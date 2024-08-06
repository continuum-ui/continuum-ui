import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const StraightenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="7" cy="11" r="1.3" />
                <circle cx="27" cy="11" r="1.3" />
                <circle cx="17" cy="5" r="1.3" />
                <circle cx="11" cy="7" r="1.3" />
                <circle cx="23" cy="7" r="1.3" />
                <path d="M6 14H.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H6ZM33.5 14H28v12h5.5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5ZM17 18c1.807 0 4.983-1 4.983-2.983L21.965 14H12v1.041C12 17 15.18 18 17 18Z" />
                <path d="M24.1 14v1c0 3-3.234 5.1-7.1 5.1S9.9 18 9.9 15v-1H8v12h18V14Z" />
            </svg>
        );
    },
);
