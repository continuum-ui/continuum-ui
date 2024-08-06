import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const StarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.477.593 22.8 12.029l12.212.578a.51.51 0 0 1 .3.908l-9.54 7.646 3.224 11.793a.51.51 0 0 1-.772.561L18 26.805l-10.22 6.71a.51.51 0 0 1-.772-.561l3.224-11.793-9.54-7.646a.51.51 0 0 1 .3-.908l12.208-.578L17.523.593a.51.51 0 0 1 .954 0Z" />
            </svg>
        );
    },
);
