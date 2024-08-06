import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 20.188 36 6.665v-1.5A1.147 1.147 0 0 0 34.875 4H1.125A1.147 1.147 0 0 0 0 5.167v1.469ZM24.779 17.963 36 26.367V9.541l-11.221 8.422z" />
                <path d="m22.866 19.4-3.576 2.694a2.172 2.172 0 0 1-2.58 0l-3.628-2.719L0 29.068v1.766A1.146 1.146 0 0 0 1.125 32h33.75A1.146 1.146 0 0 0 36 30.834v-1.59ZM11.165 17.938 0 9.512v16.683l11.165-8.257z" />
            </svg>
        );
    },
);
