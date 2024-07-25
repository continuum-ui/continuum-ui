import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PushNotificationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 .1A8.9 8.9 0 1 0 35.9 9 8.9 8.9 0 0 0 27 .1ZM29.684 14h-5.631c-.127 0-.163-.054-.145-.163l-.008-1.856a.174.174 0 0 1 .2-.163h1.68V6.371a15.522 15.522 0 0 1-1.953.507c-.126.018-.163-.018-.163-.127V5.177c0-.091.019-.145.127-.163a11.585 11.585 0 0 0 2.339-.924.667.667 0 0 1 .311-.09h1.479c.091 0 .109.054.109.127v7.691h1.619c.127 0 .163.055.181.163v1.82c.017.145-.037.199-.145.199Z" />
                <path d="M27 21.3A12.3 12.3 0 0 1 14.7 9c0-.338.024-.669.05-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V21.25c-.331.026-.662.05-1 .05Z" />
            </svg>
        );
    },
);
