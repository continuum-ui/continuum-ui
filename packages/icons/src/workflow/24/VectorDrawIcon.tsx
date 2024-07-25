import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VectorDrawIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m43.953 14.125-10.1-10.1a2 2 0 0 0-2.829 0l-5.39 5.397L14.1 14.963l-.179.09a4.487 4.487 0 0 0-2 2.3l-8.262 20.71a2 2 0 0 0 .435 2.147l3.64 3.69a2 2 0 0 0 2.162.452l20.681-8.231a4.726 4.726 0 0 0 2.471-2.221l5.579-11.619 5.326-5.326a2 2 0 0 0 0-2.83ZM29.84 32.266a1.077 1.077 0 0 1-.579.5L9.333 41.055l-.507-.5 9.931-9.932a3.21 3.21 0 1 0-1.414-1.414L7.4 39.147l-.471-.465 8.345-20.03a.919.919 0 0 1 .377-.443L27.96 12.3l7.751 7.75Z" />
            </svg>
        );
    },
);
