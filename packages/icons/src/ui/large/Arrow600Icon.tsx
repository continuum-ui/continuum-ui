import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Arrow600Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m22.24 11.052-7.485-7.485a1.341 1.341 0 0 0-1.897 1.897l5.194 5.194H2.079a1.342 1.342 0 0 0 0 2.684h15.973l-5.194 5.194a1.341 1.341 0 1 0 1.897 1.897l7.484-7.485a1.34 1.34 0 0 0 0-1.896z" />
            </svg>
        );
    },
);
