import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ConversionFunnelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 24v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V24Zm11.975 4.2-5.053 6.738a.375.375 0 0 1-.565.04L12.7 31.326a.375.375 0 0 1 0-.53l1.6-1.596a.375.375 0 0 1 .53 0l1.512 1.512 3.233-4.312a.375.375 0 0 1 .525-.075l1.8 1.35a.375.375 0 0 1 .075.525ZM29 12H5l4.167 10h15.666L29 12zM33.25 0H.75a.5.5 0 0 0-.462.692L4.167 10h25.666L33.712.692A.5.5 0 0 0 33.25 0Z" />
            </svg>
        );
    },
);
