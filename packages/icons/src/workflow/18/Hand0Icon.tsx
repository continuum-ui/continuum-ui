import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Hand0Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.239 19.456c-.552-.312-1.139-2.848-3.378-2.848a1.307 1.307 0 0 1-.6-.072c-.139-.089-.5-2.593-2.949-2.593a7.55 7.55 0 0 1-1.664-.12 3.3 3.3 0 0 0-2.816-1.859c-.232 0-1.388.261-1.423.261-1.26 0-1.664-1.25-3.627-.788-2.222.523-2.307 3.2-2.307 4.622 0 .671-2.114 2.966-2.114 2.966a5.613 5.613 0 0 0-.553 5.18c1.042 2.639 3.466 10.462 11.68 10.462 4.733 0 8.245-1.81 9.494-4.747.848-2.458 1.557-5.152 1.821-6.34a3.712 3.712 0 0 0-1.564-4.124Z" />
            </svg>
        );
    },
);
