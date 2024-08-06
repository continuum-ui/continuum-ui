import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const StarOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.967 17.635 30.7 16.868l-5.654-15.12a1 1 0 0 0-1.869-.013l-5.883 15.133-16.262.781a1 1 0 0 0-.577 1.779l12.7 10.189-4.309 15.727a1 1 0 0 0 1.513 1.1L24 37.5l13.582 8.86a1 1 0 0 0 1.512-1.1l-4.253-15.643 12.7-10.2a1 1 0 0 0-.574-1.782ZM14.492 39.176l3-10.968L8.618 21.1l11.358-.537L24 9.922l4.021 10.637 11.358.537-8.879 7.112 3 10.968-9.5-6.241Z" />
            </svg>
        );
    },
);
