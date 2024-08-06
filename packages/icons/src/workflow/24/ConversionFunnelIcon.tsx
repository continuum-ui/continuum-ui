import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ConversionFunnelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 32v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V32Zm17.3 5.6-6.737 8.983a.5.5 0 0 1-.754.054l-4.87-4.87a.5.5 0 0 1 0-.707l2.121-2.121a.5.5 0 0 1 .707 0l2.016 2.016L26.1 35.2a.5.5 0 0 1 .7-.1l2.4 1.8a.5.5 0 0 1 .1.7ZM6 16l4.5 12h25L40 16H6zM44.557 0H1.443a1 1 0 0 0-.936 1.351L4.5 12h37l3.993-10.649A1 1 0 0 0 44.557 0Z" />
            </svg>
        );
    },
);
