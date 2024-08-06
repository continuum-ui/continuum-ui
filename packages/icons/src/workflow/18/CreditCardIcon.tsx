import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CreditCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 32.512A1.488 1.488 0 0 0 3.488 34h26.778a1.488 1.488 0 0 0 1.488-1.488V30H2ZM30.065 19.026c-2.341 1.174-10.486 4.954-10.789 5.095a6.419 6.419 0 0 1-2.646.6 4.686 4.686 0 0 1-4.378-2.82 5.272 5.272 0 0 1 1.163-5.757H3.488A1.488 1.488 0 0 0 2 17.635v8.926h29.754v-8.73a8.22 8.22 0 0 1-1.689 1.195Z" />
                <path d="M11.5 13.172s.265-1.214.791-3.135c.358-1.31 4.972-7.053 6.739-7.642 1.743-.582 11.51-1.125 11.51-1.125L35 9.05s-3.936 6.15-6.266 7.315-10.754 5.077-10.754 5.077-2.194 1.061-3.016-.761c-.625-1.385.788-2.662.788-2.662s3.218-2.232 4.461-3.211c.9-.713 1.861-2.133.586-3.408s-2.575-.012-3.251.574-1.338 1.2-1.338 1.2Z" />
            </svg>
        );
    },
);
