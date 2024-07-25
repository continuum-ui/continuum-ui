import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectionMoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 20h2v6H2zM2 10h2v6H2zM4 32v-2H2v3.111a.889.889 0 0 0 .889.889H6v-2ZM10 32h6v2h-6zM32 10h2v6h-2zM33.111 2H30v2h2v2h2V2.889A.889.889 0 0 0 33.111 2ZM20 2h6v2h-6zM10 2h6v2h-6zM6 2H3a1 1 0 0 0-1 1v3h2V4h2ZM34.887 24.684l-4.034-3.537A.489.489 0 0 0 30.5 21a.5.5 0 0 0-.5.5V24h-4v-4h2.5a.5.5 0 0 0 .5-.5.49.49 0 0 0-.148-.35l-3.536-4.033a.5.5 0 0 0-.633 0l-3.536 4.033a.489.489 0 0 0-.147.35.5.5 0 0 0 .5.5H24v4h-4v-2.5a.5.5 0 0 0-.5-.5.489.489 0 0 0-.35.147l-4.034 3.537a.5.5 0 0 0 0 .632l4.034 3.536a.49.49 0 0 0 .35.148.5.5 0 0 0 .5-.5V26h4v4h-2.5a.5.5 0 0 0-.5.5.487.487 0 0 0 .147.35l3.536 4.034a.5.5 0 0 0 .633 0l3.536-4.034A.488.488 0 0 0 29 30.5a.5.5 0 0 0-.5-.5H26v-4h4v2.5a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.148l4.034-3.536a.5.5 0 0 0 0-.632Z" />
            </svg>
        );
    },
);
