import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FileWorkflowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2zM36 27.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V26h-2v6h2v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V34h-3.5a.5.5 0 0 1-.5-.5V30h-2v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V28h2v-3.5a.5.5 0 0 1 .5-.5H30v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5Z" />
                <path d="M15.5 33.5v-9a3 3 0 0 1 3-3h9.172A2.991 2.991 0 0 1 30 19.579V14H19a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h8.551a2.912 2.912 0 0 1-.051-.5Z" />
            </svg>
        );
    },
);
