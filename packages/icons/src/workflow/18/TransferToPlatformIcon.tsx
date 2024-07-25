import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TransferToPlatformIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M6.117 15.924A5.006 5.006 0 0 0 11.9 12h.708l2.277 3.984 1.267-2.218-1.692-2.962A1.596 1.596 0 0 0 13.074 10H11.9a5.003 5.003 0 1 0-5.783 5.924Zm23.766 4.152A5.006 5.006 0 0 0 24.1 24H22l-2.276-3.984-1.268 2.218L20 24.936l.16.28a1.556 1.556 0 0 0 1.35.784h2.59a5.003 5.003 0 1 0 5.783-5.924ZM29 28a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm-7-16h2.1a5 5 0 1 0 0-2h-2.59a1.556 1.556 0 0 0-1.35.784L12.608 24H11.9a5 5 0 1 0 0 2h1.174a1.596 1.596 0 0 0 1.386-.804Zm7-4a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z" />
            </svg>
        );
    },
);
