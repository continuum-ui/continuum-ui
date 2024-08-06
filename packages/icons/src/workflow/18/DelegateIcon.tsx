import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DelegateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.358 19.889a1.317 1.317 0 0 1-1.123-1.274V16.8a1.322 1.322 0 0 1 .3-.812A11.342 11.342 0 0 0 28.542 9.6c0-4.536-2.216-6.676-5.563-6.676a6.261 6.261 0 0 0-1.717.253 11.179 11.179 0 0 1 2.138 7.16 15.547 15.547 0 0 1-2.563 8.491v.272c7.026 1.278 10.157 5.978 10.561 9.389.021.173.034 1.342.041 1.507h4.5V27.2c0-1.878-1.339-6.5-8.581-7.311Z" />
                <path d="M19.267 21.781a1.476 1.476 0 0 1-1.31-1.422v-2.02a1.471 1.471 0 0 1 .328-.9 12.606 12.606 0 0 0 2.235-7.1c0-5.04-2.462-7.417-6.181-7.417s-6.252 2.486-6.252 7.415a12.7 12.7 0 0 0 2.344 7.1 1.457 1.457 0 0 1 .326.9v2.013c0 .186-.646.83-.718 1l7.039 6.97a1 1 0 0 1 .006 1.415L14.839 32h13.6v-1.8c0-2.081-1.186-7.487-9.172-8.419ZM6.874 22.169A.5.5 0 0 0 6 22.5V26H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v3.5a.5.5 0 0 0 .874.332L13.4 29Z" />
            </svg>
        );
    },
);
