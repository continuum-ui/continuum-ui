import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PersonalizationFieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 2H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM12 29.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5Zm18 0a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5Zm0-7.5h-2.47c-.946-1.392-2.686-2.161-5.829-2.48a1.018 1.018 0 0 1-.882-1.023V17.02a1.023 1.023 0 0 1 .26-.659 7.8 7.8 0 0 0 1.773-4.868c0-3.684-1.953-5.742-4.905-5.742s-4.962 2.139-4.962 5.742a7.885 7.885 0 0 0 1.859 4.868 1.019 1.019 0 0 1 .26.659v1.47a1.015 1.015 0 0 1-.885 1.024c-3.242.282-4.98 1.067-5.9 2.486H6V4h24Z" />
            </svg>
        );
    },
);
