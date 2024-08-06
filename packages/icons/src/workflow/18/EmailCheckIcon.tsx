import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EmailCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 18.188 36 4.665v-1.5A1.146 1.146 0 0 0 34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v1.468ZM11.165 15.938 0 7.511v16.684l11.165-8.257zM14.7 27a12.24 12.24 0 0 1 2.092-6.863c-.026-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 0 0 1.125 30h13.959a12.272 12.272 0 0 1-.384-3ZM27 14.7a12.253 12.253 0 0 1 9 3.936V7.541l-9.577 7.188c.193-.009.382-.029.577-.029ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.005Z" />
            </svg>
        );
    },
);
