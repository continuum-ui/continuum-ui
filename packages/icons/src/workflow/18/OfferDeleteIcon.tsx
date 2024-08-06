import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const OfferDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 4h-4v2h4Zm6 0h-4v2h4ZM2 6h2V4H2a2 2 0 0 0-2 2v2h2Zm32 8h2v-4h-2Zm0 2.893a12.279 12.279 0 0 1 2 1.743V16h-2ZM24 6h4V4h-4Zm10-2h-4v2h4v2h2V6a2 2 0 0 0-2-2ZM2 10H0v4h2Zm0 6H0v4h2Zm16.213-1.861L16.22 8.911a.235.235 0 0 0-.439 0l-1.993 5.228-5.63.261a.233.233 0 0 0-.137.415l4.4 3.5-1.487 5.385a.234.234 0 0 0 .355.257L16 20.894l.238.155a12.322 12.322 0 0 1 7.235-5.83l.5-.4a.233.233 0 0 0-.137-.415ZM14 30v2h1.769a12.223 12.223 0 0 1-.685-2Zm-6 2h4v-2H8Zm2-28H6v2h4ZM2 22H0v4h2Zm0 6H0v2a2 2 0 0 0 2 2h4v-2H2ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
