import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImageNextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="15.8" cy="13.393" r="2.5" />
                <path d="M29.668 23.722 35.8 18l-6.132-5.708a1 1 0 0 0-1.668.743V16h-7.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H28v2.978a1 1 0 0 0 1.668.744Z" />
                <path d="M24.875 6H1.125A1.068 1.068 0 0 0 0 7v22a1.068 1.068 0 0 0 1.125 1h23.75A1.068 1.068 0 0 0 26 29v-7h-2v2c-1.791-1.058-3.067-1.84-4.628-1.84-2.938 0-2.893 2.029-5.833 2.029s-3.274-4.438-6.213-4.438C4.654 19.751 2 24 2 24V8h22v6h2V7a1.068 1.068 0 0 0-1.125-1Z" />
            </svg>
        );
    },
);
