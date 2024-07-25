import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.291 17.288-.792-.79-3.46-8.074A4 4 0 0 0 25.362 6H10.638A4 4 0 0 0 6.96 8.424L3.5 16.5l-.793.793A2.412 2.412 0 0 0 2 19V33a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h24v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V18.996a2.412 2.412 0 0 0-.709-1.708ZM9.26 9.41a1.498 1.498 0 0 1 1.379-.909h14.724a1.498 1.498 0 0 1 1.38.91L29.565 16H6.434ZM8 25a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm20 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
