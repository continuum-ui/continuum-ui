import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Gauge5Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.13 34.29a1.685 1.685 0 0 1-1.708 1.525l-19.769.167a3.7 3.7 0 0 1-3.62-4.054 3.7 3.7 0 0 1 4.32-3.3l19.387 3.843a1.685 1.685 0 0 1 1.39 1.819Z" />
                <path d="M4.264 24.745a19.982 19.982 0 0 1 39.684 2.416 1.008 1.008 0 0 1-1.206 1.006l-2.026-.4a1 1 0 0 1-.8-.916 16.015 16.015 0 0 0-4.336-9.824A15.456 15.456 0 0 0 27.6 12.4 16.031 16.031 0 0 0 8 28a15.865 15.865 0 0 0 1.176 5.966.988.988 0 0 1-.207 1.078l-1.529 1.53a.994.994 0 0 1-1.6-.256 19.8 19.8 0 0 1-1.576-11.573Z" />
            </svg>
        );
    },
);
