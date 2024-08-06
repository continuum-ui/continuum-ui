import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CloudErrorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.969 15.813a7.25 7.25 0 1 0 7.25 7.25 7.255 7.255 0 0 0-7.25-7.25Zm-1.076 2.462c0-.053.15-.137.26-.178a2.27 2.27 0 0 1 .824-.088 2.877 2.877 0 0 1 .87.087c.113.042.276.138.276.18v1.386a43.029 43.029 0 0 1-.366 4.778c0 .041-.028.247-.163.247H26.42c-.09 0-.146-.194-.167-.247-.045-.38-.36-3.27-.36-4.778Zm1.17 10.1a1.238 1.238 0 1 1 1.238-1.239 1.239 1.239 0 0 1-1.238 1.239Z" />
            </svg>
        );
    },
);
