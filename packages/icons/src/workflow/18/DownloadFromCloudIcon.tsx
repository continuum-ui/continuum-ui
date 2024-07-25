import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DownloadFromCloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 11.3a6.461 6.461 0 0 0-2.151-.118 8.345 8.345 0 0 0 0-4.407 8.024 8.024 0 0 0-5.71-5.648 8.162 8.162 0 0 0-10.215 6.821 6.97 6.97 0 0 0-3.361-.055 6.849 6.849 0 0 0-5.124 5.212 6.972 6.972 0 0 0 .078 3.237 3.862 3.862 0 0 0-4.464 4.449A4 4 0 0 0 4.064 24H16v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9h9.572A6.429 6.429 0 0 0 31 11.3Z" />
                <path d="M16 28h-4.3a.7.7 0 0 0-.7.7.685.685 0 0 0 .207.49l6.468 6.145a.5.5 0 0 0 .65 0l6.469-6.135a.688.688 0 0 0 .206-.49.7.7 0 0 0-.7-.7H20V24h-4Z" />
            </svg>
        );
    },
);
