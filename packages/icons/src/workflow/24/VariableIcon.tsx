import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const VariableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.2 13.9c-.128-.17-.083-.384.215-.384h5.1c.3 0 .384.045.512.3l4.037 7.357h.086l4.252-7.44c.128-.214.169-.214.384-.214h4.5c.256 0 .343.128.215.342-1.489 2.379-4.764 7.61-6.422 9.947a561.442 561.442 0 0 0 6.847 10.334c.17.17.084.339-.214.339H28.49a.616.616 0 0 1-.554-.339l-4.251-7.4h-.042l-4.379 7.481c-.087.17-.173.256-.468.256h-4.552a.24.24 0 0 1-.211-.384c1.786-2.676 4.718-7.353 6.546-10.033Zm-2.443 29.051a1.367 1.367 0 0 0 .327-1.877A31.015 31.015 0 0 1 6.836 24a31.009 31.009 0 0 1 5.248-17.075 1.369 1.369 0 0 0-.328-1.878l-1.689-1.2a1.4 1.4 0 0 0-1.972.35A35.832 35.832 0 0 0 2 24a35.841 35.841 0 0 0 6.1 19.808 1.4 1.4 0 0 0 1.973.35Zm26.175 1.207a1.4 1.4 0 0 0 1.973-.35A35.841 35.841 0 0 0 46 24a35.832 35.832 0 0 0-6.095-19.808 1.4 1.4 0 0 0-1.972-.35l-1.689 1.2a1.369 1.369 0 0 0-.328 1.878A31.009 31.009 0 0 1 41.164 24a31.015 31.015 0 0 1-5.248 17.075 1.367 1.367 0 0 0 .327 1.877Z" />
            </svg>
        );
    },
);
