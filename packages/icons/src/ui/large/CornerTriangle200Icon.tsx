import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CornerTriangle200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M7.65.97a.35.35 0 0 0-.249.1L1.07 7.401a.352.352 0 0 0 .249.6H7.65a.35.35 0 0 0 .352-.352V1.322A.35.35 0 0 0 7.65.97" />
            </svg>
        );
    },
);
