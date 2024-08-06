import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataBookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M10.6 29.766a10.425 10.425 0 0 1 1.819-5.55l.209-.281C8.117 23.408 3.245 22.244 2 20.27V29c0 2.029 3.874 3.771 9.429 4.555a9.315 9.315 0 0 1-.829-3.789ZM34 12.8v-2.53a9.226 9.226 0 0 1-4.529 2.53ZM19.729 14.39c.044-.058.1-.1.149-.156-.665.027-1.3.041-1.877.041-4.936 0-14.212-1.168-16-4V17c0 2.349 5.191 4.314 12.179 4.851ZM27.656 32.883h-7.935a2.922 2.922 0 0 1-3.113-3.117 2.927 2.927 0 0 1 3.113-3.116h8.509a.779.779 0 0 0 .623-.312l6.831-9.714a.39.39 0 0 0-.311-.624H22.911a.779.779 0 0 0-.623.312l-7.3 9.814A6.219 6.219 0 0 0 20.01 36h8.22a.779.779 0 0 0 .623-.312l6.831-9.714a.39.39 0 0 0-.312-.623h-2.521Z" />
            </svg>
        );
    },
);
