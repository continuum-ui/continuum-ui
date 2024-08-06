import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ThumbDownOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m46.921 25.076-4.405-12.882A7.676 7.676 0 0 0 35.251 7H16a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v25a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.812c2.859.929 7.113 3.654 8.96 11.625A5.956 5.956 0 0 0 30.5 46.2a5.033 5.033 0 0 0 5.085-4.839 49.267 49.267 0 0 0-1.1-9.361l8.163-.008a5.147 5.147 0 0 0 3.987-2.527 4.837 4.837 0 0 0 .286-4.389Zm-3.741 2.373a1.139 1.139 0 0 1-.819.551H29.105l.86 2.623a41.865 41.865 0 0 1 1.62 10.738 1.1 1.1 0 0 1-1.085.839 1.988 1.988 0 0 1-1.644-1.29c-2.625-11.327-9.827-14.164-12.8-14.858L16 26.039V11h19.251a3.677 3.677 0 0 1 3.48 2.488l4.5 13.143a.863.863 0 0 1-.051.818Z" />
            </svg>
        );
    },
);
