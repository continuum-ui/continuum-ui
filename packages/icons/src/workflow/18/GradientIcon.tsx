import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GradientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path opacity=".9" d="M4 6h2v24H4z" />
                <path opacity=".8" d="M6 6h2v24H6z" />
                <path opacity=".7" d="M8 6h2v24H8z" />
                <path opacity=".6" d="M10 6h2v24h-2z" />
                <path opacity=".5" d="M12 6h2v24h-2z" />
                <path opacity=".4" d="M14 6h2v24h-2z" />
                <path opacity=".25" d="M20 6h2v24h-2z" />
                <path opacity=".3" d="M18 6h2v24h-2z" />
                <path opacity=".35" d="M16 6h2v24h-2z" />
                <path opacity=".2" d="M22 6h2v24h-2z" />
                <path opacity=".15" d="M24 6h2v24h-2z" />
                <path opacity=".1" d="M26 6h2v24h-2z" />
                <path opacity=".05" d="M28 6h2v24h-2z" />
                <path d="M2 5v26a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm30 25H4V6h28Z" />
            </svg>
        );
    },
);
