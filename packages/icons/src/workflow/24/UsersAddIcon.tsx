import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UsersAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.346 21.19A15.834 15.834 0 0 1 36.1 20.1c.26 0 .514.026.771.039a16.135 16.135 0 0 0 1.267-6.011c0-6.048-2.954-8.9-7.418-8.9a8.325 8.325 0 0 0-2.288.338c1.729 2.17 2.851 5.273 2.851 9.552a21.166 21.166 0 0 1-.937 6.072ZM20.2 36a18.727 18.727 0 0 1 4.262-11.419 16.805 16.805 0 0 0 2.979-9.465c0-6.72-3.282-9.89-8.241-9.89s-8.336 3.317-8.336 9.89a16.924 16.924 0 0 0 3.126 9.469 1.943 1.943 0 0 1 .435 1.2v2.683a1.947 1.947 0 0 1-1.67 1.887C2.071 31.494 0 38.7 0 41.6V44h22.375a15.8 15.8 0 0 1-2.175-8Z" />
                <path d="M36.1 24.1A11.9 11.9 0 1 0 48 36a11.9 11.9 0 0 0-11.9-11.9Zm8 13.4a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
