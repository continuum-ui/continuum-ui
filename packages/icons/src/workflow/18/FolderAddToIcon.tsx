import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FolderAddToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m12.064 27.418 8.356-9.076a3.086 3.086 0 0 1 2.213-.961 3.044 3.044 0 0 1 3.041 3.037v.943A13.842 13.842 0 0 1 34 25.605V11a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h13.285Z" />
                <path d="M23.273 23.6v-3.182a.636.636 0 0 0-1.086-.45l-6.86 7.449 6.86 7.449a.636.636 0 0 0 1.086-.45v-3.229a11.687 11.687 0 0 1 11.916 4.632.45.45 0 0 0 .811-.26C36 33.638 33.808 23.6 23.273 23.6ZM16 8H2V5.5A1.5 1.5 0 0 1 3.5 4h7.672a2 2 0 0 1 1.414.586Z" />
            </svg>
        );
    },
);
