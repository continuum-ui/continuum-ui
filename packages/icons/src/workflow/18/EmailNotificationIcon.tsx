import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EmailNotificationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.576 28.545c.375-.381 1.254-1.27 1.254-5.854a4.825 4.825 0 0 1 2.47-4.215L22.866 17.4l-3.576 2.694a2.171 2.171 0 0 1-2.58 0l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 0 0 1.125 30h18.48a4.107 4.107 0 0 1 .971-1.455ZM25.931 16.825a3.17 3.17 0 0 1 2.641-1.425h.855a3.156 3.156 0 0 1 3.121 2.547A4.957 4.957 0 0 1 36 21.463V7.541l-11.221 8.422Z" />
                <path d="M36 4.665v-1.5A1.147 1.147 0 0 0 34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v1.468l18 13.553ZM0 7.511v16.683l11.165-8.256L0 7.511zM36 31.077c0-1.077-2.429-.677-2.429-8.385 0-1.718-1.6-2.446-3.571-2.634V18.5a.539.539 0 0 0-.572-.5h-.857a.539.539 0 0 0-.572.5v1.558c-1.968.188-3.571.916-3.571 2.634C24.429 30.4 22 30.055 22 31.077v.844h4.667v.3a2.333 2.333 0 0 0 4.667 0v-.3H36Z" />
            </svg>
        );
    },
);
