import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ChannelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.375 15.125a2.864 2.864 0 0 0-2.475 1.437h-4.545a7.466 7.466 0 0 0-2.67-4.376l2.62-4.979a2.879 2.879 0 1 0-2.545-1.336l-2.619 4.977A7.4 7.4 0 0 0 18 10.5a7.4 7.4 0 0 0-2.141.348L13.24 5.871a2.864 2.864 0 0 0-2.427-4.4 2.87 2.87 0 0 0-.113 5.736l2.62 4.979a7.466 7.466 0 0 0-2.67 4.376H6.1a2.875 2.875 0 1 0 0 2.876h4.544a7.466 7.466 0 0 0 2.67 4.376L10.7 28.793a2.881 2.881 0 1 0 2.545 1.336l2.619-4.977A7.4 7.4 0 0 0 18 25.5a7.4 7.4 0 0 0 2.141-.348l2.619 4.977a2.865 2.865 0 0 0 2.427 4.4 2.87 2.87 0 0 0 .118-5.738l-2.62-4.979a7.466 7.466 0 0 0 2.67-4.376H29.9a2.87 2.87 0 1 0 2.476-4.313ZM18 22.575A4.575 4.575 0 1 1 22.575 18 4.575 4.575 0 0 1 18 22.575Z" />
            </svg>
        );
    },
);
