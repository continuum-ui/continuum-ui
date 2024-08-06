import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const InviteIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <g>
                    <path d="M19.227 30.628A13.844 13.844 0 0 1 5.326 25.94a11.696 11.696 0 0 1 5.793-2.623c1.426-.124 1.449-1.27 1.449-2.7a13.01 13.01 0 0 1-3.057-7.754c0-4.695 2.672-7.825 6.518-7.825s6.519 3.13 6.519 7.825a13.01 13.01 0 0 1-3.057 7.754c0 1.43.023 2.576 1.449 2.7a11.147 11.147 0 0 1 4.077 1.43v-2.233a3.499 3.499 0 0 1 3.495-3.495h.998a3.461 3.461 0 0 1 2.232.828 15.997 15.997 0 1 0-11.235 12.505 3.495 3.495 0 0 1-1.28-1.724Z" />
                    <path d="M28.5 22a.5.5 0 0 0-.5.5V28h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H28v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H30v-5.5a.5.5 0 0 0-.5-.5h-1Z" />
                </g>
            </svg>
        );
    },
);
