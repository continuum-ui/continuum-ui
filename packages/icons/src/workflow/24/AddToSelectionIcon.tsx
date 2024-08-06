import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AddToSelectionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.321 33.7-3.592 2.075a20.194 20.194 0 0 0 4.5 4.5l2.071-3.596a16.043 16.043 0 0 1-2.979-2.979ZM36.679 33.7a16.043 16.043 0 0 1-2.979 2.979l2.074 3.593a20.194 20.194 0 0 0 4.5-4.5ZM30.138 38.755a15.882 15.882 0 0 1-4.076 1.078V44a19.947 19.947 0 0 0 6.146-1.659ZM39.833 26.062a15.882 15.882 0 0 1-1.078 4.076l3.586 2.07A19.947 19.947 0 0 0 44 26.062ZM9.245 30.138a15.882 15.882 0 0 1-1.078-4.076H4a19.947 19.947 0 0 0 1.659 6.146ZM21.938 39.833a15.882 15.882 0 0 1-4.076-1.078l-2.07 3.586A19.947 19.947 0 0 0 21.938 44ZM11.321 14.3l-3.592-2.075a20.194 20.194 0 0 1 4.5-4.5l2.071 3.596a16.043 16.043 0 0 0-2.979 2.979ZM36.679 14.3a16.043 16.043 0 0 0-2.979-2.979l2.074-3.593a20.194 20.194 0 0 1 4.5 4.5ZM30.138 9.245a15.882 15.882 0 0 0-4.076-1.078V4a19.947 19.947 0 0 1 6.146 1.659ZM39.833 21.938a15.882 15.882 0 0 0-1.078-4.076l3.586-2.07A19.947 19.947 0 0 1 44 21.938ZM9.245 17.862a15.882 15.882 0 0 0-1.078 4.076H4a19.947 19.947 0 0 1 1.659-6.146ZM21.938 8.167a15.882 15.882 0 0 0-4.076 1.078l-2.07-3.586A19.947 19.947 0 0 1 21.938 4ZM34 25a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7h-7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
