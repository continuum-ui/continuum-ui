import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EfficientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.174 13.563a1.5 1.5 0 0 1-.55-2.9A79.163 79.163 0 0 1 18.11 7.6a60.648 60.648 0 0 1 8.59-1.33 1.5 1.5 0 0 1 .192 2.994 59.079 59.079 0 0 0-8.121 1.262 77.483 77.483 0 0 0-9.041 2.932 1.5 1.5 0 0 1-.556.105ZM9.492 7.405a1.5 1.5 0 0 1-.551-2.9A77.637 77.637 0 0 1 18.11 1.6c.8-.18 1.567-.336 2.292-.473a1.5 1.5 0 0 1 .554 2.949c-.693.131-1.427.28-2.19.451A75.855 75.855 0 0 0 10.043 7.3a1.5 1.5 0 0 1-.551.105ZM13.5 33v.879a1.5 1.5 0 0 0 .439 1.06l.622.622a1.5 1.5 0 0 0 1.06.439h4.758a1.5 1.5 0 0 0 1.06-.439l.622-.622a1.5 1.5 0 0 0 .439-1.06V33a1.5 1.5 0 0 0 1.5-1.5v-1.944a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V31.5a1.524 1.524 0 0 0 1.5 1.5ZM9.7 19.353a1.5 1.5 0 0 1-.551-2.9A72.608 72.608 0 0 1 18.11 13.6a60.648 60.648 0 0 1 8.59-1.33 1.5 1.5 0 0 1 .192 2.994 59.079 59.079 0 0 0-8.121 1.262 71.041 71.041 0 0 0-8.514 2.721 1.486 1.486 0 0 1-.557.106ZM13.5 21.75V26h3v-4.25a3.7 3.7 0 0 0-.415-1.679c-1.072.34-2.119.7-3 1.016a.746.746 0 0 1 .415.663ZM26.454 18h-3.2a3.754 3.754 0 0 0-3.75 3.75V26h3v-4.25a.751.751 0 0 1 .75-.75h3.2a1.5 1.5 0 0 0 0-3Z" />
            </svg>
        );
    },
);
