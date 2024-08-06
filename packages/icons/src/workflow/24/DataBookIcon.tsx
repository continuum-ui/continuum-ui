import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataBookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M14 40a12.142 12.142 0 0 1 2.322-7.073l.9-1.2C11.6 31.065 5.55 29.611 4 27.152v10.6c0 2.377 4.248 4.444 10.5 5.5A11.821 11.821 0 0 1 14 40ZM44 18v-2.5a9.2 9.2 0 0 1-3.781 2.5ZM25.67 20.473c-.582.018-1.147.029-1.67.029-6.17 0-17.765-1.461-20-5.006v6.471c0 3.018 6.848 5.537 15.953 6.122ZM35.782 44H26a4 4 0 0 1 0-8h10.518a1 1 0 0 0 .8-.4l9.1-12.8a.5.5 0 0 0-.4-.8H30.025a1 1 0 0 0-.8.4l-9.7 12.928A7.981 7.981 0 0 0 25.969 48h10.549a1 1 0 0 0 .8-.4l9.1-12.8a.5.5 0 0 0-.4-.8h-3.236Z" />
            </svg>
        );
    },
);
