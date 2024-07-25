import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AutomatedSegmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m32.514 14.337.078 2.248a1.834 1.834 0 0 0 .939 1.533l1.963 1.1-2.248.078a1.834 1.834 0 0 0-1.533.939l-1.1 1.963-.079-2.248a1.83 1.83 0 0 0-.939-1.533l-1.961-1.095 2.248-.079a1.83 1.83 0 0 0 1.538-.943ZM6.8 1.044l.113 3.134a2.556 2.556 0 0 0 1.3 2.137l2.736 1.532-3.126.113a2.553 2.553 0 0 0-2.137 1.305L4.154 12l-.113-3.133A2.553 2.553 0 0 0 2.736 6.73L0 5.2l3.133-.114A2.552 2.552 0 0 0 5.27 3.78ZM26 9.565A1.565 1.565 0 0 0 24.435 8H14v1.129a1.48 1.48 0 0 1-1.366 1.562l-4.6.181a1.207 1.207 0 0 0-1.024.655L6 13.5v18.94A1.565 1.565 0 0 0 7.565 34h16.87A1.565 1.565 0 0 0 26 32.435ZM8 14h5.5v2H8Zm0 4h9v2H8Zm0 4h10.75v2H8Zm16 6H8v-2h16ZM28.274 0l.3 2.229a1.83 1.83 0 0 0 1.085 1.434l2.06.9-2.229.3a1.834 1.834 0 0 0-1.434 1.085L27.155 8l-.3-2.229a1.834 1.834 0 0 0-1.085-1.434l-2.059-.9 2.23-.3a1.83 1.83 0 0 0 1.436-1.077Z" />
            </svg>
        );
    },
);
