import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FileSpaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23 2C14.552 2 6 4.748 6 10v28c0 5.252 8.552 8 17 8s17-2.748 17-8V10c0-5.252-8.552-8-17-8Zm13 36a1 1 0 0 1-.39.8C32.654 41.026 28.743 42 23 42s-9.654-.974-12.61-3.195A1 1 0 0 1 10 38V15.328C13.281 17.091 18.153 18 23 18s9.719-.909 13-2.672ZM23 14.2c-8.577 0-13-2.944-13-4.2s4.423-4.2 13-4.2S36 8.744 36 10s-4.423 4.2-13 4.2Z" />
                <path d="M32 28c0-1.1-4.029-2-9-2s-9 .9-9 2v8c0 1.1 4.029 2.2 9 2.2s9-1.1 9-2.2Z" />
            </svg>
        );
    },
);
