import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DelegateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.559 23.851a1.754 1.754 0 0 1-1.5-1.7v-2.422a1.76 1.76 0 0 1 .394-1.083 15.125 15.125 0 0 0 2.682-8.519c0-6.047-2.955-8.9-7.418-8.9a8.362 8.362 0 0 0-2.289.337c1.729 2.171 2.851 5.274 2.851 9.553a20.73 20.73 0 0 1-3.417 11.32v.369C37.706 24.6 41.816 31.42 42 36h6v-2.4c0-2.5-1.787-8.664-11.441-9.749Z" />
                <path d="M25.681 26.365a1.949 1.949 0 0 1-1.656-1.886v-2.694a1.964 1.964 0 0 1 .438-1.2 16.8 16.8 0 0 0 2.98-9.465c0-6.72-3.283-9.889-8.242-9.889s-8.336 3.317-8.336 9.889a16.927 16.927 0 0 0 3.126 9.469 1.952 1.952 0 0 1 .435 1.2v2.682a1.817 1.817 0 0 1-.159.715L25.9 36.033 21.55 40H38v-2.4c0-2.782-1.59-10.024-12.319-11.235Z" />
                <path d="M8.874 25.622a.5.5 0 0 0-.874.333V32H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7v5.818a.5.5 0 0 0 .874.332L20 36Z" />
            </svg>
        );
    },
);
