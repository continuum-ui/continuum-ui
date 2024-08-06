import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const WrenchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.235 27.526 20.857 16.148c-3.622-3.654-1.234-8.6-4.67-12.037-2.953-2.953-8.75-2.2-10.072-1.364A.146.146 0 0 0 6.141 3l6.238 3.1a.367.367 0 0 1 .2.3l.29 3.655a.742.742 0 0 1-.339.683l-3.085 1.975a.37.37 0 0 1-.364.019L2.8 9.608a.145.145 0 0 0-.212.09c-.152 1 1.24 4.055 3.124 5.94 3.144 3.144 7.818 1.561 9.911 3.654L26.75 32.448a3.758 3.758 0 0 0 .395.467 3.706 3.706 0 0 0 5.5-.284 3.849 3.849 0 0 0-.41-5.105Z" />
            </svg>
        );
    },
);
