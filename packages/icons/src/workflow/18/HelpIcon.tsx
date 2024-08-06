import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const HelpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm.047 26.876a2.69 2.69 0 1 1 0-5.375 2.62 2.62 0 0 1 2.8 2.67 2.581 2.581 0 0 1-2.8 2.705Zm3.566-12.818-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.771 2.771 0 0 0 .359 1.348l.145.277-.113.429a.617.617 0 0 1-.567.378h-2.682a.867.867 0 0 1-.65-.235 4.111 4.111 0 0 1-.845-2.525c0-1.677.934-2.714 2.225-4.15.2-.219.39-.42.575-.609.629-.651 1.013-1.071 1.013-1.515 0-.308 0-1.245-1.786-1.245a5.918 5.918 0 0 0-3.159.919.592.592 0 0 1-.653-.02l-.237-.169-.055-.443v-2.9a.879.879 0 0 1 .393-.819 8.275 8.275 0 0 1 4.3-1.1c3.291 0 5.5 2.117 5.5 5.272a6.131 6.131 0 0 1-1.879 4.546Z" />
            </svg>
        );
    },
);
