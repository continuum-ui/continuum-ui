import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataMappingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M32 18.5a3.496 3.496 0 0 0-2.95 1.617l-5.087-1.454A6.072 6.072 0 0 0 24 18a5.994 5.994 0 0 0-2.75-5.043l2.349-5.48A3.54 3.54 0 0 0 24 7.5a3.5 3.5 0 1 0-2.24-.812l-2.35 5.48a5.993 5.993 0 0 0-4.885.943L7.079 5.665A3.498 3.498 0 1 0 5.665 7.08l7.446 7.446a5.995 5.995 0 0 0-.273 6.533L6.914 26.07a3.498 3.498 0 1 0 1.293 1.527l5.924-5.013a5.998 5.998 0 0 0 5.868 1.074l2.998 5.397a3.5 3.5 0 1 0 1.749-.973l-2.999-5.398a6.02 6.02 0 0 0 1.668-2.097l5.086 1.454A3.5 3.5 0 1 0 32 18.5ZM24 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM4 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm1 25a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm20.5-1.5a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM32 24a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
            </svg>
        );
    },
);
