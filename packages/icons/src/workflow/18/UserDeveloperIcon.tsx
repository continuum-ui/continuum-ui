import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UserDeveloperIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.518 29.409a2 2 0 0 1 0-2.828l6.1-6.1a2.606 2.606 0 0 1 1.525-.706 14.84 14.84 0 0 0 3.343-8.731C23.488 5.617 20.4 2 15.956 2s-7.532 3.617-7.532 9.042c0 5.015 3.532 8.958 3.532 8.958 0 1.652-.026 2.977-1.673 3.12-2.257.2-9.6 2.653-10.239 9.869A.948.948 0 0 0 1.008 34h16.1ZM29.289 23.712 33.58 28l-4.286 4.286a.432.432 0 0 0 0 .608l.729.728a.429.429 0 0 0 .607 0l4.915-4.914a1 1 0 0 0 0-1.415l-4.92-4.919a.429.429 0 0 0-.607 0l-.729.728a.432.432 0 0 0 0 .61Z" />
                <path d="M21.748 32.288 17.458 28l4.286-4.286a.432.432 0 0 0 0-.608l-.729-.728a.429.429 0 0 0-.607 0l-4.915 4.912a1 1 0 0 0 0 1.415l4.919 4.919a.43.43 0 0 0 .608 0l.728-.728a.43.43 0 0 0 0-.608ZM24.8 34.417l3.412-13.335a.474.474 0 0 0-.439-.6h-.942a.46.46 0 0 0-.44.354L22.98 34.169a.473.473 0 0 0 .439.6h.942a.459.459 0 0 0 .439-.352Z" />
            </svg>
        );
    },
);
