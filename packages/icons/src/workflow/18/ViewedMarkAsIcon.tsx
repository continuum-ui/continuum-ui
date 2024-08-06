import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ViewedMarkAsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.794 15.554A5 5 0 0 0 23.063 14a4.691 4.691 0 0 0-.175-1.2 2.623 2.623 0 0 1-2.221 1.279A2.667 2.667 0 0 1 18 11.417a2.631 2.631 0 0 1 1.35-2.269 4.916 4.916 0 0 0-1.35-.21 5.052 5.052 0 0 0-.272 10.1 12.3 12.3 0 0 1 5.066-3.484Z" />
                <path d="M15.477 22.831A9.207 9.207 0 1 1 27.225 14c0 .276-.057.537-.081.807a12.227 12.227 0 0 1 5.894 1.583 4.365 4.365 0 0 0 .712-2.03c0-2.364-4.214-7.341-9.137-9.78A14.978 14.978 0 0 0 18 2.937c-8.664 0-15.75 8.625-15.75 11.424 0 2.626 5.729 8.868 12.683 10.372a12.177 12.177 0 0 1 .544-1.902Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.128a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.004Z" />
            </svg>
        );
    },
);
