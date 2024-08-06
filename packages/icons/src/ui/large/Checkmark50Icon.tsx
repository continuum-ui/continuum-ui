import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Checkmark50Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.519 10.608a1.15 1.15 0 0 1-.885-.414L1.27 7.358a1.152 1.152 0 0 1 1.77-1.476l1.453 1.743 4.45-5.665a1.152 1.152 0 0 1 1.813 1.424l-5.331 6.784a1.15 1.15 0 0 1-.89.44z" />
            </svg>
        );
    },
);
