import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ForecastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.971 34H7a1.117 1.117 0 0 1-.953-1.477L7.879 26h20.214l1.831 6.523A1.117 1.117 0 0 1 28.971 34ZM32.85 2.676l-2.073 2.463a2.623 2.623 0 0 0-.477 2.526l1.027 3.051-2.466-2.073a2.623 2.623 0 0 0-2.525-.479L23.284 9.19l2.073-2.463a2.623 2.623 0 0 0 .48-2.527L24.81 1.15l2.463 2.073A2.623 2.623 0 0 0 29.8 3.7Z" />
                <path d="m29.135 13.316-2.129-1.791-2.637.887A3.4 3.4 0 0 1 20.684 7l1.791-2.129-.415-1.233A12.352 12.352 0 0 0 9 24h17.291A12.316 12.316 0 0 0 30 15.176a12.576 12.576 0 0 0-.075-1.363 3.416 3.416 0 0 1-.79-.497Z" />
            </svg>
        );
    },
);
