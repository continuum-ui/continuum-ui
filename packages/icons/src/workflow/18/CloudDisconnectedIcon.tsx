import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CloudDisconnectedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.688 14.026Q27.348 14 27 14a9.001 9.001 0 0 0-7.484 14H3.718A3.92 3.92 0 0 1 0 23.854c0-1.73 1.792-4.261 4.092-4.261a4.815 4.815 0 0 1-.134-1.577 6.254 6.254 0 0 1 6.399-6.075 7.743 7.743 0 0 1 2.098.291c.936-3.166 3.622-6.17 7.607-6.17a7.296 7.296 0 0 1 7.641 7.57c0 .133-.005.264-.015.394Z" />
                <path d="M26.969 15.813a7.25 7.25 0 1 0 7.25 7.25 7.255 7.255 0 0 0-7.25-7.25Zm3.87 9.915a.92.92 0 0 1-.65 1.57.925.925 0 0 1-.65-.27L27.111 24.6l-2.426 2.427a.919.919 0 0 1-1.57-.65.914.914 0 0 1 .27-.65l2.426-2.427-2.393-2.418a.818.818 0 0 1-.307-.589 1.007 1.007 0 0 1 .957-.982.925.925 0 0 1 .65.27l2.393 2.419 2.393-2.419a.925.925 0 0 1 .65-.27 1.007 1.007 0 0 1 .957.982.818.818 0 0 1-.306.589L28.412 23.3Z" />
            </svg>
        );
    },
);
