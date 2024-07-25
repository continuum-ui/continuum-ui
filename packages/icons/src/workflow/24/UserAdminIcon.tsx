import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserAdminIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19 34.9a15.84 15.84 0 0 1 5.024-11.577v-1.538a1.954 1.954 0 0 1 .438-1.2 13.147 13.147 0 0 0 1.82-3.4 17.1 17.1 0 0 0 1.252-6.066c0-3.3-.854-5.778-2.33-7.429a7.625 7.625 0 0 0-6-2.46 7.629 7.629 0 0 0-6.006 2.46c-1.477 1.651-2.33 4.128-2.33 7.43a17.075 17.075 0 0 0 1.253 6.066 13.111 13.111 0 0 0 1.82 3.4 1.959 1.959 0 0 1 .437 1.2v2.694a1.751 1.751 0 0 1-.224.837l.018.021a1.891 1.891 0 0 1-1.414 1.016C2.07 27.494 0 34.7 0 37.6V40h19.851A15.848 15.848 0 0 1 19 34.9ZM47.1 33.207h-3.14a9.078 9.078 0 0 0-1.326-3.219l2.235-2.235a.9.9 0 0 0 0-1.268l-1.359-1.359a.9.9 0 0 0-1.268 0l-2.235 2.235a9.08 9.08 0 0 0-3.218-1.326V22.9a.9.9 0 0 0-.9-.9H34.1a.9.9 0 0 0-.9.9v3.139a9.08 9.08 0 0 0-3.218 1.326l-2.235-2.235a.9.9 0 0 0-1.268 0l-1.359 1.359a.9.9 0 0 0 0 1.268l2.235 2.235a9.078 9.078 0 0 0-1.326 3.219H22.9a.9.9 0 0 0-.9.9V35.9a.9.9 0 0 0 .9.9h3.14a9.078 9.078 0 0 0 1.326 3.219l-2.235 2.235a.9.9 0 0 0 0 1.268l1.359 1.359a.9.9 0 0 0 1.268 0l2.235-2.235a9.083 9.083 0 0 0 3.218 1.326V47.1a.9.9 0 0 0 .9.9H35.9a.9.9 0 0 0 .9-.9v-3.14a9.083 9.083 0 0 0 3.218-1.326l2.235 2.235a.9.9 0 0 0 1.268 0l1.359-1.359a.9.9 0 0 0 0-1.268l-2.235-2.235a9.078 9.078 0 0 0 1.326-3.219H47.1a.9.9 0 0 0 .9-.9V34.1a.9.9 0 0 0-.9-.893ZM35 38.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
