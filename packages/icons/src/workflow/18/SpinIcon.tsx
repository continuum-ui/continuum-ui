import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SpinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 15v3.054c-6.836.185-7.634.254-9.648-.039-3.137-.451-6.837-1.968-6.952-3.968C7.257 12 9.47 9.918 12.517 8.894A16.148 16.148 0 0 1 16 8.133V16h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.022a18.64 18.64 0 0 0-4.167.672c-3.69 1.082-7.248 3.632-7.221 7.494.075 4.05 5.187 6.291 9.165 7.132 2.292.46 3.159.434 10.223.625V25a.5.5 0 0 0 .8.4L32 20l-7.2-5.4a.5.5 0 0 0-.8.4Z" />
                <circle cx="22.9" cy="6.9" r="1.1" />
                <circle cx="26.968" cy="7.371" r="1.1" />
                <circle cx="30.9" cy="8.9" r="1.1" />
                <path d="M16 33a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9h-4Z" />
            </svg>
        );
    },
);
