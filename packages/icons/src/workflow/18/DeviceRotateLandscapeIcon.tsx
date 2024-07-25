import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceRotateLandscapeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.158 30H8V6h16v9.21a12.3 12.3 0 0 1 2-.354V2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h10.625a12.27 12.27 0 0 1-3.467-6ZM15 2h2a1.04 1.04 0 0 1 1 1 1.04 1.04 0 0 1-1 1h-2a1.023 1.023 0 0 1-1-1 1.024 1.024 0 0 1 1-1Z" />
                <path d="m32.412 20.332 1.479-1.478a.489.489 0 0 0 .147-.35.5.5 0 0 0-.5-.5h-5.053a.5.5 0 0 0-.447.448V23.5a.5.5 0 0 0 .5.5.489.489 0 0 0 .35-.147l1.5-1.506a6.015 6.015 0 0 1 2.144 5.6 6.074 6.074 0 1 1-8.123-6.615.976.976 0 0 0 .62-.921v-1.255a.76.76 0 0 0-.974-.723 8.919 8.919 0 0 0-6.451 8.552 9.02 9.02 0 0 0 8.645 8.936 8.891 8.891 0 0 0 6.154-15.589Z" />
            </svg>
        );
    },
);
