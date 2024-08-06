import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FolderUserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM44 35.056v-.143c-.02.039-.033.081-.053.12.02.006.033.017.053.023ZM42 14H4v26a2 2 0 0 0 2 2h14.566a10.691 10.691 0 0 1 7.191-7 12.553 12.553 0 0 1-1.477-5.727c0-6.154 3.938-10.453 9.576-10.453A8.9 8.9 0 0 1 44 23.516V16a2 2 0 0 0-2-2Z" />
                <path d="M39.086 37.142v-1.66a1.149 1.149 0 0 1 .292-.741 8.766 8.766 0 0 0 1.994-5.471c0-4.14-2.2-6.454-5.514-6.454s-5.576 2.4-5.576 6.454a8.863 8.863 0 0 0 2.089 5.471 1.149 1.149 0 0 1 .292.741v1.653a1.14 1.14 0 0 1-.995 1.151c-6.666.58-7.663 5.14-7.663 6.938 0 .2-.015 2.58 0 2.777h23.774s.021-2.577.021-2.777c0-1.723-1.177-6.267-7.723-6.931a1.146 1.146 0 0 1-.991-1.151Z" />
            </svg>
        );
    },
);
