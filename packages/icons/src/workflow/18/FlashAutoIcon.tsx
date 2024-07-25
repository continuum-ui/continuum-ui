import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashAutoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.001 2h14l-8 12h10l-19.1 22h-.9l6-16H.251l5.75-18zM28.418 16.417c-.026-.134-.054-.161-.189-.161h-3.754c-.107 0-.161.081-.161.189a4.132 4.132 0 0 1-.244 1.455l-5.563 15.83c-.028.189.026.27.189.27h2.7a.267.267 0 0 0 .3-.216L22.954 30h6.913l1.333 3.838a.272.272 0 0 0 .271.162H34.5c.161 0 .189-.081.161-.243Zm-2.052 2.54h.026c.541 1.89 2.1 6.481 2.664 8.264h-5.3c.813-2.457 2.178-6.455 2.61-8.264Z" />
            </svg>
        );
    },
);
