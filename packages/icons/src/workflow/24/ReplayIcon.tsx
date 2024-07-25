import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReplayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.789 16.243A1.6 1.6 0 0 0 19.94 16H18.8a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h1.14a1.6 1.6 0 0 0 .849-.243l12.036-7.067a.8.8 0 0 0 0-1.38Z" />
                <path d="m42.882 28.682-2.727-.676a.493.493 0 0 0-.593.353 16.2 16.2 0 0 1-30.723 1.454 15.945 15.945 0 0 1 4.761-18.27 16.206 16.206 0 0 1 21.243.484l-2.607 2.607a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806h8.7a.5.5 0 0 0 .5-.5V6.8a.8.8 0 0 0-.806-.8.785.785 0 0 0-.56.236l-3.1 3.1A19.965 19.965 0 1 0 43.251 29.3a.506.506 0 0 0-.369-.618Z" />
            </svg>
        );
    },
);
