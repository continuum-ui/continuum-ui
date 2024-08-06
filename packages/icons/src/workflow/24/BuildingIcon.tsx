import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BuildingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 6v36a2 2 0 0 0 2 2h14V33a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm12 30H8v-4h8Zm0-8H8v-4h8Zm0-8H8v-4h8Zm0-8H8V8h8Zm12 16h-8v-4h8Zm0-8h-8v-4h8Zm0-8h-8V8h8Zm12 24h-8v-4h8Zm0-8h-8v-4h8Zm0-8h-8v-4h8Zm0-8h-8V8h8Z" />
            </svg>
        );
    },
);
