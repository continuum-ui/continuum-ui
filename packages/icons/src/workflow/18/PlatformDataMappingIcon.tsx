import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlatformDataMappingIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M30.328 20.005a4.988 4.988 0 0 0-6.074 3.328H10v-4.398a.5.5 0 0 0-.83-.376l-6.74 5.898a.5.5 0 0 0 0 .753l6.74 5.898a.5.5 0 0 0 .83-.377v-4.398h14.254a4.993 4.993 0 1 0 6.074-6.328ZM5.672 13.662a4.988 4.988 0 0 0 6.074-3.329H26v4.398a.5.5 0 0 0 .83.377l6.74-5.898a.5.5 0 0 0 0-.753l-6.74-5.898a.5.5 0 0 0-.83.376v4.398H11.746a4.993 4.993 0 1 0-6.074 6.329Z" />
            </svg>
        );
    },
);
