import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m22.287 40 .76-2.194a4.668 4.668 0 0 1 1.17-1.874l7.8-7.8a18.237 18.237 0 0 0-6.377-1.773 1.894 1.894 0 0 1-1.414-1.016l.018-.021a1.752 1.752 0 0 1-.224-.837v-2.7a1.954 1.954 0 0 1 .438-1.2 13.142 13.142 0 0 0 1.82-3.4 17.1 17.1 0 0 0 1.252-6.067c0-3.3-.854-5.778-2.33-7.429a7.625 7.625 0 0 0-6-2.46 7.627 7.627 0 0 0-6.006 2.46c-1.477 1.651-2.33 4.128-2.33 7.429a17.076 17.076 0 0 0 1.253 6.067 13.112 13.112 0 0 0 1.82 3.4 1.959 1.959 0 0 1 .437 1.2v2.694a1.752 1.752 0 0 1-.224.837l.018.021a1.892 1.892 0 0 1-1.414 1.016C2.07 27.494 0 34.7 0 37.6V40h22.287ZM47.713 29.046l-4.68-4.68a.985.985 0 0 0-.7-.287H42.3a1.112 1.112 0 0 0-.753.33L27.1 38.855a.81.81 0 0 0-.2.342l-2.813 8.112c-.092.306.373.691.636.691a.221.221 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.794.794 0 0 0 .336-.2L47.67 30.532a1.116 1.116 0 0 0 .33-.717.991.991 0 0 0-.287-.769ZM32.226 43.68c-1.754.527-4.5 1.748-6.02 2.2l2.189-6.022Z" />
            </svg>
        );
    },
);
