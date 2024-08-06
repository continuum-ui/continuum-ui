import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const MarketingActivitiesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.865 6.9a4.853 4.853 0 0 1-1.508 1.315l3.91 4.729a4.859 4.859 0 0 1 1.559-1.253Zm-16.85 8.869 4.268 3.386a4.843 4.843 0 0 1 1.312-1.512l-4.31-3.419a4.852 4.852 0 0 1-1.27 1.545Zm12.71 3.4a4.79 4.79 0 0 1 .584 1.928l5.623-2.473a4.809 4.809 0 0 1-.706-1.875ZM7.042 28.255A4.851 4.851 0 0 1 8.3 29.809l5.88-4.791a4.864 4.864 0 0 1-1.152-1.641ZM10.136 9.5a4.8 4.8 0 0 1 .657 1.938L18.2 6.98a4.8 4.8 0 0 1-.89-1.8Z" />
                <circle cx="4" cy="32" r="3.85" />
                <circle cx="17.5" cy="21.5" r="3.85" />
                <circle cx="22" cy="4" r="3.85" />
                <circle cx="6" cy="12" r="3.85" />
                <circle cx="32" cy="16" r="3.85" />
            </svg>
        );
    },
);
