import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UsersShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.363 29.484a1.858 1.858 0 0 1-.338-1.005v-2.694a1.956 1.956 0 0 1 .438-1.2 16.808 16.808 0 0 0 2.979-9.465c0-6.72-3.283-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.929 16.929 0 0 0 3.126 9.469 1.946 1.946 0 0 1 .435 1.2v2.683a1.946 1.946 0 0 1-1.67 1.887C2.071 31.494 0 38.7 0 41.6V44h15.286a22.553 22.553 0 0 1 9.077-14.516ZM32.07 26.406v-.569a4.841 4.841 0 0 1 4.385-4.8 16.026 16.026 0 0 0 1.683-6.907c0-6.048-2.954-8.9-7.418-8.9a8.336 8.336 0 0 0-2.289.338c1.728 2.17 2.851 5.273 2.851 9.552a20.733 20.733 0 0 1-3.417 11.32v.369c.481.088.938.2 1.392.307a20.391 20.391 0 0 1 2.813-.71ZM36.07 30.078v-4.241a.848.848 0 0 1 1.448-.6l9.582 9.932-9.582 9.931a.848.848 0 0 1-1.448-.6v-4.3c-9.178-1.545-14.058 3.693-15.888 6.176a.6.6 0 0 1-1.081-.347c-.001-2.565 2.922-15.951 16.969-15.951Z" />
            </svg>
        );
    },
);
