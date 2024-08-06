import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TrapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.589 9.078a5.818 5.818 0 0 0-1.53-.969C41.367 6.977 30.383 2.4 24.568 1.67c-5.5-.687-10.478 0-13.055 2.577s-.859 9.619 1.546 14.6a100.336 100.336 0 0 0 5.388 9.319l-14.9 14.9a2.754 2.754 0 0 0 .141 3.912 2.755 2.755 0 0 0 3.913.141l13.507-13.507a4.938 4.938 0 0 0 3.592 1.31 11.96 11.96 0 0 0 4.474-1.022 35.788 35.788 0 0 0 9.854-6.949 35.6 35.6 0 0 0 6.87-9.775c1.467-3.559 1.355-6.434-.309-8.098Zm-2.154 7.081A29.026 29.026 0 0 1 37.1 25.1a29.026 29.026 0 0 1-8.945 6.331c-2.417 1-4.362 1.1-5.2.268s-.729-2.771.268-5.2a29.026 29.026 0 0 1 6.331-8.945 29.026 29.026 0 0 1 8.945-6.331 9.5 9.5 0 0 1 3.461-.826 2.4 2.4 0 0 1 1.734.557c.84.838.738 2.78-.259 5.205Z" />
            </svg>
        );
    },
);
