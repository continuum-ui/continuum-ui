import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImageAlbumIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="26.5" cy="13.5" r="2.5" />
                <path d="M33 6H3a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v8H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM6 25a1 1 0 0 1-1 1H4v-4h1a1 1 0 0 1 1 1Zm0-12a1 1 0 0 1-1 1H4v-4h1a1 1 0 0 1 1 1Zm26 12.748-4.519-4.519a1.713 1.713 0 0 0-2.424 0l-2.633 2.632-6.476-6.477a1.716 1.716 0 0 0-2.425 0L8 22.908V8h24Z" />
            </svg>
        );
    },
);
