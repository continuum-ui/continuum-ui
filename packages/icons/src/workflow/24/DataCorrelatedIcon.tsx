import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataCorrelatedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.965 18.685a11.975 11.975 0 0 0-15.28 15.28 15.975 15.975 0 0 0 15.28-15.28Z" />
                <path d="M14 30a15.959 15.959 0 0 1 19.583-15.583 15.994 15.994 0 1 0-19.166 19.166A16.017 16.017 0 0 1 14 30Z" />
                <path d="M33.583 14.417A16.017 16.017 0 0 1 34 18c0 .231-.025.456-.035.685a11.994 11.994 0 1 1-15.28 15.28c-.229.01-.453.035-.685.035a16.017 16.017 0 0 1-3.583-.417 15.994 15.994 0 1 0 19.166-19.166Z" />
            </svg>
        );
    },
);
