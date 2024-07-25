import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 18.188 36 4.665v-1.5A1.147 1.147 0 0 0 34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v1.469ZM11.165 15.938 0 7.512v16.683l11.165-8.257zM14.7 27a12.244 12.244 0 0 1 2.092-6.863c-.025-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 0 0 1.125 30h13.959a12.273 12.273 0 0 1-.384-3ZM27 33.435a6.212 6.212 0 0 1-4.771-2.123L24.537 29H18v6.55l2.5-2.509A8.744 8.744 0 0 0 27 36a9.3 9.3 0 0 0 9-9h-2.28A6.889 6.889 0 0 1 27 33.435ZM33.558 20.958A9.215 9.215 0 0 0 27 18a9.3 9.3 0 0 0-9 9h2.28A6.889 6.889 0 0 1 27 20.565a6.283 6.283 0 0 1 4.871 2.116L29.6 25H36v-6.535ZM36 14.216V7.541l-9.577 7.188c.192-.009.382-.029.577-.029a12.152 12.152 0 0 1 6.548 1.928Z" />
            </svg>
        );
    },
);
