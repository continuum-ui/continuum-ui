import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.627 38H18V26h4.275a15.959 15.959 0 0 1 3.315-4H18V10h10v10.275a15.8 15.8 0 0 1 4-1.648V10h10v9.28a15.864 15.864 0 0 1 4 2.365V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h20.275a15.8 15.8 0 0 1-1.648-4ZM14 38H4V26h10Zm0-16H4V10h10Z" />
                <path d="M36 22.1A11.9 11.9 0 1 0 47.9 34 11.9 11.9 0 0 0 36 22.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 33.3a.5.5 0 0 1 .707 0L34 37.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.479 41.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
