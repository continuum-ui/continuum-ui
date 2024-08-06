import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GlobeCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.2 36a15.932 15.932 0 0 1 .355-3.331 61.159 61.159 0 0 0-4.107-6.8c-2.765-4.115-5.278-1.571-6.921-7.514-1.4-5.049 2.207-7.223 1.852-11.537A21.429 21.429 0 0 0 2.667 24c0 12.149 10.591 19.39 18.071 20.976a9.239 9.239 0 0 0 1.394.221 10.544 10.544 0 0 0 .336-1.046A15.8 15.8 0 0 1 20.2 36Z" />
                <path d="M21.369 6.206A4.931 4.931 0 0 0 19.9 5.6c-2.424-.281 1.173 6.37 1.037 5.485.664-3.056 4.816-4.235 6.088-.2a4.99 4.99 0 0 1-1.117 3.02c-1.88 2.472-2.262 6.872-3.2 5.746-8.787-3.6-7.819 1.162-4.936 4.343 3.755 4.142 2.908 1.894 5.712 2.343a15.805 15.805 0 0 1 16.094-5.851c-.009-.223-.021-.428-.026-.672a7.688 7.688 0 0 1 2.222-5.333 4.109 4.109 0 0 1 .973-.465 21.822 21.822 0 0 0-.827-1.357c-.05.026-.094.059-.145.083-1.666.778-1.9 1.007-2.666 0a2.1 2.1 0 0 1 .461-3.1 21.311 21.311 0 0 0-15.535-6.955c2.7.037 5.929 2.039 4.284 5.239.247-.508-5.37-1.72-6.133-1.72-1.03 0 2.1-3.852 1.813-3.518a21.438 21.438 0 0 0-8.819 1.9c1.457.942 3.081.613 4.724 1.019a4 4 0 0 1 1.465.599ZM36.1 24.1A11.9 11.9 0 1 0 48 36a11.9 11.9 0 0 0-11.9-11.9Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.5 35.3a.5.5 0 0 1 .707 0l3.893 3.888 8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.579 43.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
