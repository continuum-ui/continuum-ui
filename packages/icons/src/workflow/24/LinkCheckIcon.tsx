import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.133 36.75c-.851.87-1.932 2-2.187 2.252A6.327 6.327 0 0 1 9 30.055l8.214-8.214c2.471-2.471 6.854-2.75 9.325-.279a9.217 9.217 0 0 1 .966 1.115 15.8 15.8 0 0 1 3.991-1.819 10.911 10.911 0 0 0-1.808-2.445 11.28 11.28 0 0 0-15.829.073L5.643 26.7A11.071 11.071 0 0 0 21.3 42.357l.056-.056a15.829 15.829 0 0 1-1.223-5.551ZM26.991 12c.8-.8 2.732-2.668 3.063-3A6.327 6.327 0 1 1 39 17.945l-2.291 2.291a15.826 15.826 0 0 1 5.49 1.22l.156-.156A11.071 11.071 0 0 0 26.7 5.643c-.595.594-3.806 3.741-5.482 5.418a12.819 12.819 0 0 1 5.773.939Z" />
                <path d="M22.72 27.367a5.543 5.543 0 0 1-1.294-.933 6.42 6.42 0 0 1-1.914-2.508 3.1 3.1 0 0 0-.659.491l-2.524 2.641a11.039 11.039 0 0 0 1.893 2.581 9.521 9.521 0 0 0 2.572 1.816 15.85 15.85 0 0 1 1.926-4.088ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.479 43.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
