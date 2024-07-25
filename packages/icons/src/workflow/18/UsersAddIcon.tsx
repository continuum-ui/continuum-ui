import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UsersAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.7 27c0-5.649 2.959-7.639 4.646-9.639a11 11 0 0 0 2.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 0 0 2.622 6.865 1.439 1.439 0 0 1 .367.93v2.074a1.431 1.431 0 0 1-1.248 1.444C1.307 22.537 0 28.259 0 30.516c0 .25.029 3.237.048 3.484h16.845a12.236 12.236 0 0 1-2.193-7ZM23.287 15.273A12.282 12.282 0 0 1 27 14.7c.129 0 .255.015.383.019a12.724 12.724 0 0 0 1.011-4.771c0-4.354-2.569-7.552-6.451-7.552-.232 0-.444.042-.668.062a10.93 10.93 0 0 1 2.974 8.042 13.2 13.2 0 0 1-.962 4.773Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
