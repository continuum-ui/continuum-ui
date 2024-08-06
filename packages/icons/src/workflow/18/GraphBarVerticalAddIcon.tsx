import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphBarVerticalAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23 12h-4a1 1 0 0 0-1 1v5.635a12.269 12.269 0 0 1 6-3.551V13a1 1 0 0 0-1-1ZM18.1 27a8.9 8.9 0 1 0 8.9-8.9 8.9 8.9 0 0 0-8.9 8.9Zm3.9-.5a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5ZM32 15.769V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11.75c.331-.027.662-.05 1-.05a12.241 12.241 0 0 1 5 1.069ZM.5 34h16.393a12.321 12.321 0 0 1-1.124-2H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5ZM16 21a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v9h5.084A12.1 12.1 0 0 1 16 21.52ZM3 24a1 1 0 0 0-1 1v5h6v-5a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
