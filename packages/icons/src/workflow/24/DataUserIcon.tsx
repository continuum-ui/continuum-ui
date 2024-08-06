import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataUserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M27.958 34.954a13.276 13.276 0 0 1-1.1-2.872 58.9 58.9 0 0 1-2.855.075c-6.17 0-17.765-1.461-20-5.006v10.6c0 3.056 7.023 5.6 16.3 6.139a10.765 10.765 0 0 1 7.655-8.936ZM43.8 22.812a2.145 2.145 0 0 0 .2-.844V15.5c-1.215 1.536-3.653 2.636-6.529 3.411a8.723 8.723 0 0 1 6.329 3.901ZM26.568 28.161a9.913 9.913 0 0 1 4.7-8.1A63.325 63.325 0 0 1 24 20.5c-6.17 0-17.765-1.461-20-5.006v6.471c0 3.452 8.954 6.25 20 6.25.872.003 1.726-.021 2.568-.054Z" />
                <path d="M39.233 37.1v-1.66a1.149 1.149 0 0 1 .292-.741 8.766 8.766 0 0 0 1.994-5.471c0-4.14-2.2-6.454-5.514-6.454s-5.576 2.4-5.576 6.454a8.863 8.863 0 0 0 2.089 5.472 1.149 1.149 0 0 1 .292.741v1.653a1.14 1.14 0 0 1-.995 1.151c-6.666.58-7.663 5.14-7.663 6.938 0 .2-.015 2.58 0 2.777h23.774s.021-2.577.021-2.777c0-1.723-1.177-6.267-7.723-6.931a1.146 1.146 0 0 1-.991-1.152Z" />
            </svg>
        );
    },
);
