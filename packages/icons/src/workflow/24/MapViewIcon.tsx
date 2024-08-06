import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const MapViewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.151 4.486-9.386 4.693-9.33-4.665a1.241 1.241 0 0 0-1.105 0L4.683 8.838A1.234 1.234 0 0 0 4 9.943v31.826a1.236 1.236 0 0 0 1.788 1.105l8.094-4.047 9.33 4.664a1.235 1.235 0 0 0 1.105 0l9.33-4.664 10.659 4.263A1.235 1.235 0 0 0 46 41.943V10.016a1.235 1.235 0 0 0-.777-1.147L34.162 4.444a1.238 1.238 0 0 0-1.011.042ZM24 41.328l-10.118-5.174V6.827L24 12Zm20-.928-10.353-4.044V6.709L44 10.75Z" />
            </svg>
        );
    },
);
