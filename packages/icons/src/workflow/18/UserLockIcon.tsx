import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserLockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 25.013a2.737 2.737 0 0 1 1.833-2.86c0-3.219 2.049-4.882 3.108-5.964a10.942 10.942 0 0 0 2.939-7.736c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 0 0 2.622 6.866 1.443 1.443 0 0 1 .367.93v2.074a1.431 1.431 0 0 1-1.25 1.444C1.338 20.5.031 26.217.031 28.474.031 28.725 0 30 0 30h14Z" />
                <path d="m32.987 24.013-1 .038v-.718a7.205 7.205 0 0 0-6.567-7.323 6.94 6.94 0 0 0-7.313 6.93v1.111l-1.094-.039a1 1 0 0 0-1.012 1V35a1 1 0 0 0 1 1H33a1 1 0 0 0 1-1v-9.987a1 1 0 0 0-1.013-1ZM20.882 22.94a4.164 4.164 0 1 1 8.328 0v1.111h-8.328Zm5.552 8.482v1.928a.694.694 0 0 1-.694.694h-1.388a.694.694 0 0 1-.694-.694v-1.928a2.082 2.082 0 1 1 2.776 0Z" />
            </svg>
        );
    },
);
