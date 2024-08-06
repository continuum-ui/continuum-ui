import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EmailKeyOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.8 38H4v-2.809l14.182-8.566 3.945 3.156a2.981 2.981 0 0 0 3.747 0l2.344-1.875a10.323 10.323 0 0 1-.371-2.262l-3.222 2.575a1 1 0 0 1-1.249 0L4 12.7V10h40v2.731l-1.61 1.287A12.609 12.609 0 0 1 48 16.564V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h31.8ZM4 15.265l12.516 10.028L4 32.854Z" />
                <path d="M48 25c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.258 2.556 5.972 6 6.752V47a1 1 0 0 0 1 1h6.5a.5.5 0 0 0 .5-.5v-3.638a.5.5 0 0 0-.5-.5H42V42h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H42v-6.248c3.444-.78 6-3.494 6-6.752Zm-8 .774a2.4 2.4 0 1 1 2.4-2.4 2.4 2.4 0 0 1-2.4 2.4Z" />
            </svg>
        );
    },
);
