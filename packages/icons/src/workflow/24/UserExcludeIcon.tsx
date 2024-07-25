import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.1 36a15.821 15.821 0 0 1 4.149-10.684 1.746 1.746 0 0 1-.224-.837v-2.694a1.957 1.957 0 0 1 .438-1.2 16.806 16.806 0 0 0 2.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 0 0 3.126 9.469 1.949 1.949 0 0 1 .434 1.2v2.683a1.947 1.947 0 0 1-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h20.627a15.884 15.884 0 0 1-.527-4ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.1 36a8.038 8.038 0 0 1-1.257 4.3L31.7 29.157A8.071 8.071 0 0 1 44.1 36Zm-16.2 0a8.038 8.038 0 0 1 1.257-4.3L40.3 42.843A8.071 8.071 0 0 1 27.9 36Z" />
            </svg>
        );
    },
);
