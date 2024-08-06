import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Arrow500Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m16.336 8.271-5.269-5.267A1.03 1.03 0 1 0 9.61 4.46l3.51 3.509H2.021a1.03 1.03 0 0 0 0 2.06H13.12l-3.51 3.51a1.03 1.03 0 1 0 1.457 1.456l5.269-5.268a1.03 1.03 0 0 0 0-1.456" />
            </svg>
        );
    },
);
