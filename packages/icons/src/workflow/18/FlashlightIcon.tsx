import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m27.306 18.66 5.973-5.974a1 1 0 0 0 0-1.414l-8.524-8.525a1 1 0 0 0-1.414 0L17.367 8.72a1 1 0 0 0-.286.593l-.468 4.078L2.746 27.257a1 1 0 0 0 0 1.414l4.61 4.61a1 1 0 0 0 1.414 0l13.866-13.867 4.077-.468a1 1 0 0 0 .593-.286Zm-10.352.412a2.75 2.75 0 1 1 3.889 0 2.75 2.75 0 0 1-3.889 0Z" />
            </svg>
        );
    },
);
