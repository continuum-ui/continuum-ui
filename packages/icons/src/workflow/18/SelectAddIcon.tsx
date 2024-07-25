import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 10h2v6H2zM4 22v-2H2v3.111a.889.889 0 0 0 .889.889H6v-2ZM24 12v-2h-2v3.111a.889.889 0 0 0 .889.889H26v-2ZM14 32v-2h-2v3.111a.889.889 0 0 0 .889.889H16v-2ZM20 32h6v2h-6zM32 20h2v6h-2zM32 30v2h-2v2h3a1 1 0 0 0 1-1v-3ZM23.111 2H20v2h2v2h2V2.889A.889.889 0 0 0 23.111 2ZM33.111 12H30v2h2v2h2v-3.111a.889.889 0 0 0-.889-.889ZM13.111 22H10v2h2v2h2v-3.111a.889.889 0 0 0-.889-.889ZM10 2h6v2h-6zM6 2H3a1 1 0 0 0-1 1v3h2V4h2Z" />
            </svg>
        );
    },
);
