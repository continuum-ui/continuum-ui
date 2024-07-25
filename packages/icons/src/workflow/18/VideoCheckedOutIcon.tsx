import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VideoCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm5 10.814a.5.5 0 0 1-.854.354L29.05 27.07l-4.636 4.636a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 0-.707l4.636-4.636-2.097-2.096a.5.5 0 0 1 .354-.854h6.527a.287.287 0 0 1 .287.287Z" />
                <path d="M15.5 27a11.47 11.47 0 0 1 4.353-9H12.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h11c.023 0 .037.022.06.025A11.45 11.45 0 0 1 26 15.55v-2.344a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2.703a11.389 11.389 0 0 1 2 .747V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h11.656a11.432 11.432 0 0 1-1.156-5ZM26 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Zm-16 23a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6.706a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6.588a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5ZM10 9.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
