import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TeapotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.729 12a14.8 14.8 0 0 0-8.849-4.179 2.993 2.993 0 1 0-3.609.124 14.886 14.886 0 0 0-8 4.056ZM37.092 16H11.3a21.909 21.909 0 0 0-1.893 5.545h-.044c-1.73-.716-1.5-1.3-2.972-5.138-.85-2.208-3.534-2.489-4.511-2.711a.984.984 0 0 0-1.095.545l-.594 1.186c-.262.539-.024 1.338.573 1.378a2.01 2.01 0 0 1 1.712.993 12.922 12.922 0 0 1 .73 2.767c.288 1.57.551 4.489 2.106 6.446A9.74 9.74 0 0 0 9.7 29.977a16.856 16.856 0 0 0 7 9.713 2.039 2.039 0 0 0 1.1.31h13.4a2.039 2.039 0 0 0 1.1-.31 16.706 16.706 0 0 0 6.589-8.4c.129-.047.262-.092.384-.144a18.982 18.982 0 0 0 4.5-2.645 10.356 10.356 0 0 0 3.9-8.257A6.13 6.13 0 0 0 37.092 16Zm5.608 9.454a10.928 10.928 0 0 1-2.888 2.1A18.6 18.6 0 0 0 40 25a20.319 20.319 0 0 0-1.18-6.469c1.155-1.3 3.385-2.191 4.866-.84 2.137 1.949.642 6.024-.986 7.763Z" />
            </svg>
        );
    },
);
