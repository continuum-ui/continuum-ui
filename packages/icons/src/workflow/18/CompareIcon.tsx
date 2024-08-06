import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CompareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.191 32.143 30.646 27.6a9.066 9.066 0 1 0-3.046 3.046l4.545 4.545a2.044 2.044 0 0 0 3.048 0 2.195 2.195 0 0 0-.002-3.048ZM17.412 22.98a5.568 5.568 0 1 1 5.568 5.567 5.568 5.568 0 0 1-5.568-5.567Z" />
                <path d="M11.6 23A11.4 11.4 0 0 1 20 12.012V11a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a.948.948 0 0 0 .5-.155A11.4 11.4 0 0 1 11.6 23Z" />
                <path d="M22 9v2.65c.33-.029.662-.05 1-.05a11.334 11.334 0 0 1 5 1.167V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5h13a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
