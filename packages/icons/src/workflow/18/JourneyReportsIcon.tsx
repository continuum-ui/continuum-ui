import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyReportsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="18" rx=".5" width="2" x="34" y="18" />
                <rect height="12" rx=".5" width="2" x="30" y="24" />
                <rect height="8" rx=".5" width="2" x="26" y="28" />
                <rect height="6" rx=".5" width="2" x="22" y="30" />
                <path d="M20 28a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16v8a4 4 0 0 0 4 4Zm9-24a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
