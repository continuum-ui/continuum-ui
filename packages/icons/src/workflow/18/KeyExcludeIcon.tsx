import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const KeyExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
                <path d="M16.967 19.9c.52-.52 6.71-6.761 6.71-6.761l1.681 1.682a11.712 11.712 0 0 1 4.861.317l1.6-1.6-4.267-4.272 1.231-1.23 4.27 4.271 2.47-2.47a.75.75 0 0 0 0-1.061L29.06 2.313a1.5 1.5 0 0 0-2.122 0l-13.761 13.76A8.888 8.888 0 0 0 9 15a9 9 0 1 0 6.21 15.491c-1.241-4.201-.022-8.81 1.757-10.591ZM7.5 28.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
