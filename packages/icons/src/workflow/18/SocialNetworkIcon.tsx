import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SocialNetworkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.087 22.347v-8.694A3.117 3.117 0 0 0 29.066 8.2L21.12 3.235c0-.036.01-.069.01-.1a3.13 3.13 0 1 0-6.26 0c0 .036.009.069.01.1L6.934 8.2a3.086 3.086 0 0 0-1.456-.375 3.121 3.121 0 0 0-1.565 5.827v8.694A3.117 3.117 0 0 0 6.934 27.8l7.946 4.966c0 .036-.01.069-.01.1a3.13 3.13 0 0 0 6.26 0c0-.036-.009-.069-.01-.1l7.946-4.966a3.086 3.086 0 0 0 1.456.375 3.121 3.121 0 0 0 1.565-5.827Zm-10.944-3.724a2.985 2.985 0 0 0-.016-1.237l7.184-4.046a3.16 3.16 0 0 0 1.776.788v7.72a3.171 3.171 0 0 0-1.794.8Zm-13.424 4.02a3.175 3.175 0 0 0-1.806-.827v-7.723a3.162 3.162 0 0 0 1.74-.773l7.22 4.066a2.985 2.985 0 0 0-.016 1.237ZM27.546 9.61a3.181 3.181 0 0 0-.311 1.354 3.233 3.233 0 0 0 .067.649l-7.194 4.052A3.165 3.165 0 0 0 19 15.031v-8.8A3.205 3.205 0 0 0 20.493 5.2ZM15.521 5.193A3.2 3.2 0 0 0 17 6.238v8.793a3.165 3.165 0 0 0-1.108.634L8.672 11.6a3.15 3.15 0 0 0-.215-1.99ZM8.376 26.342a2.578 2.578 0 0 0 .369-1.363 3.223 3.223 0 0 0-.059-.585l7.126-4.014a3.189 3.189 0 0 0 1.188.7v8.7a3.155 3.155 0 0 0-1.456 1.038Zm12.09 4.473A3.18 3.18 0 0 0 19 29.775V21.08a3.189 3.189 0 0 0 1.188-.7l7.112 4.005a3.16 3.16 0 0 0 .249 2Z" />
            </svg>
        );
    },
);
