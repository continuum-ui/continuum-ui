import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DraftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m47.713 28.966-4.68-4.68a.986.986 0 0 0-.7-.287H42.3a1.114 1.114 0 0 0-.753.33L27.1 38.776a.811.811 0 0 0-.2.342l-2.816 8.112c-.092.306.373.69.636.69a.233.233 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 0 0 .336-.2l14.446-14.448a1.117 1.117 0 0 0 .331-.717.992.992 0 0 0-.287-.77ZM32.225 43.6c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022ZM28 4v12h12L28 4z" />
                <path d="M23.117 37.807a4.663 4.663 0 0 1 1.156-1.859L40 20.588V20H26a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10.972Z" />
            </svg>
        );
    },
);
