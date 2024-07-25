import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SubscribeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.779 21.963 36 30.367V13.541l-11.221 8.422zM22.866 23.4l-3.576 2.694a2.172 2.172 0 0 1-2.58 0l-3.628-2.719L0 33.068A.981.981 0 0 0 1 34h34a.884.884 0 0 0 1-.756ZM11.165 21.938 0 13.511v16.684l11.165-8.257z" />
                <path d="M19.067.672a2 2 0 0 0-2.133 0L0 11.365V14h6V9a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v5h6v-2.665Z" />
                <rect height="2" rx=".5" ry=".5" width="16" x="10" y="12" />
                <path d="M21.83 20h-7.66a.5.5 0 0 1-.3-.1l-1.882-1.448a.25.25 0 0 1 .147-.452h11.73a.25.25 0 0 1 .152.448L22.135 19.9a.5.5 0 0 1-.305.1Z" />
            </svg>
        );
    },
);
