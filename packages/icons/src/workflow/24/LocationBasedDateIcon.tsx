import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationBasedDateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 19v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z" />
                <path d="M45 4h-7V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H18V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H7a1 1 0 0 0-1 1v6.277a15.569 15.569 0 0 1 4-1.057V8h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h16v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h4v24H26.107a44.988 44.988 0 0 1-1.943 4H45a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
                <path d="M12 14.078A11.678 11.678 0 0 0 .322 25.756C.322 32.205 12 46.922 12 46.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0 0 12 14.078Zm0 16.2a4.525 4.525 0 1 1 4.525-4.525A4.525 4.525 0 0 1 12 30.281Z" />
            </svg>
        );
    },
);
