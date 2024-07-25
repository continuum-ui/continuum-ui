import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PasteHTMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 6V4a4 4 0 0 0-8 0v2h-4v4h16V6Zm-2 0h-4V4a2 2 0 0 1 4 0Z" />
                <path d="M31 6h-3v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM14.049 25.183a.4.4 0 0 1 0 .563l-1.688 1.688a.4.4 0 0 1-.563 0l-4.871-4.871a.8.8 0 0 1 0-1.125l4.873-4.872a.4.4 0 0 1 .563 0l1.688 1.688a.4.4 0 0 1 0 .563L10.866 22Zm3.833 4.7a.4.4 0 0 1-.468.312l-2.34-.468a.4.4 0 0 1-.313-.468l3.027-15.139a.4.4 0 0 1 .468-.312l2.341.468a.4.4 0 0 1 .312.468Zm11.191-7.318L24.2 27.434a.4.4 0 0 1-.563 0l-1.688-1.688a.4.4 0 0 1 0-.563L25.134 22l-3.183-3.183a.4.4 0 0 1 0-.563l1.688-1.688a.4.4 0 0 1 .563 0l4.871 4.871a.8.8 0 0 1 0 1.126Z" />
            </svg>
        );
    },
);
