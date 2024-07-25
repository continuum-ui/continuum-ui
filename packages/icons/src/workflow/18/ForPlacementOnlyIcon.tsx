import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ForPlacementOnlyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.484 14.181c-.3 0-.578.006-.793.014v3.311h.6c2.2 0 2.2-1.285 2.2-1.707-.001-1.337-1.091-1.618-2.007-1.618ZM27.357 14.078c-1.586 0-2.531 1.365-2.531 3.654 0 1.793.687 3.707 2.617 3.707 1.562 0 2.5-1.385 2.5-3.707-.019-2.322-.961-3.654-2.586-3.654Z" />
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-5.982 12.093-.119.145-.3.033H7.332v2.307h4.2l.123.523v1.979l-.523.123h-3.8v4.547l-.541.141H4.6l-.105-.541v-11.6l.523-.121h6.389a.526.526 0 0 1 .555.475l.176 1.756Zm4.273 6.023c-.271 0-.443-.006-.6-.012v3.662l-.523.123h-2.174l-.121-.524v-11.58l.506-.141c.871-.023 1.961-.053 3.035-.053 3.609 0 4.895 2.156 4.895 4.174 0 2.684-1.924 4.352-5.018 4.352Zm11.082 3.932c-3.314 0-5.455-2.481-5.455-6.316 0-3.688 2.25-6.264 5.473-6.264 3.244 0 5.438 2.5 5.457 6.209 0 3.871-2.148 6.371-5.475 6.371Z" />
            </svg>
        );
    },
);
