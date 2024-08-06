import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GlobeClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.75 14.024a21.822 21.822 0 0 0-.827-1.357c-.05.026-.094.059-.145.083-1.666.778-1.9 1.007-2.666 0a2.1 2.1 0 0 1 .461-3.1 21.312 21.312 0 0 0-15.538-6.963c2.7.037 5.929 2.04 4.284 5.239.247-.508-5.37-1.72-6.133-1.72-1.03 0 2.1-3.852 1.813-3.519a21.438 21.438 0 0 0-8.819 1.9c1.457.942 3.081.613 4.724 1.019a4.01 4.01 0 0 1 1.465.6A4.926 4.926 0 0 0 19.9 5.6c-2.424-.281 1.173 6.37 1.037 5.485.664-3.056 4.816-4.235 6.088-.2a4.991 4.991 0 0 1-1.117 3.02c-1.88 2.472-2.262 6.872-3.2 5.746-8.787-3.6-7.819 1.162-4.936 4.344 3.755 4.142 2.908 1.894 5.712 2.343a15.805 15.805 0 0 1 16.094-5.851c-.009-.223-.021-.428-.026-.672a7.687 7.687 0 0 1 2.222-5.333 4.109 4.109 0 0 1 .976-.458ZM20.556 32.669a61.159 61.159 0 0 0-4.107-6.8c-2.765-4.115-5.278-1.571-6.921-7.514-1.4-5.049 2.207-7.223 1.852-11.538A21.429 21.429 0 0 0 2.667 24c0 12.149 10.591 19.39 18.071 20.976a9.239 9.239 0 0 0 1.394.221 10.5 10.5 0 0 0 .336-1.046 15.789 15.789 0 0 1-1.912-11.484ZM36.1 24.1A11.9 11.9 0 1 0 48 36a11.9 11.9 0 0 0-11.9-11.9ZM36 44.752A8.752 8.752 0 1 1 44.752 36 8.752 8.752 0 0 1 36 44.752Z" />
                <path d="M37.526 35.995v-5.22a1.652 1.652 0 0 0-1.652-1.652 1.652 1.652 0 0 0-1.652 1.652v7.04l4.134 2.613a1.652 1.652 0 0 0 2.28-.513 1.652 1.652 0 0 0-.513-2.28Z" />
            </svg>
        );
    },
);
