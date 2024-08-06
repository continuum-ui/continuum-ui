import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CompassIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M1.5 19.5H3a1.455 1.455 0 0 0 .149-.03A14.824 14.824 0 0 0 4.835 25L6.7 22.237A12.049 12.049 0 0 1 22.182 6.684l2.775-1.873a14.818 14.818 0 0 0-5.487-1.662A1.455 1.455 0 0 0 19.5 3V1.5a1.5 1.5 0 0 0-3 0V3a1.455 1.455 0 0 0 .03.149A14.927 14.927 0 0 0 3.149 16.53 1.455 1.455 0 0 0 3 16.5H1.5a1.5 1.5 0 0 0 0 3ZM34.5 16.5H33a1.455 1.455 0 0 0-.149.03 14.828 14.828 0 0 0-1.662-5.488l-1.873 2.775A12.049 12.049 0 0 1 13.764 29.3L11 31.165a14.824 14.824 0 0 0 5.534 1.686A1.455 1.455 0 0 0 16.5 33v1.5a1.5 1.5 0 0 0 3 0V33a1.455 1.455 0 0 0-.03-.149A14.927 14.927 0 0 0 32.851 19.47a1.455 1.455 0 0 0 .149.03h1.5a1.5 1.5 0 0 0 0-3ZM14.707 15.745 3.173 32.827l17.082-11.534a4.516 4.516 0 0 0 1.211-1.211L33 3 15.918 14.534a4.516 4.516 0 0 0-1.211 1.211Zm3.3 4.973a2.726 2.726 0 1 1 2.726-2.726 2.727 2.727 0 0 1-2.725 2.726Z" />
            </svg>
        );
    },
);
