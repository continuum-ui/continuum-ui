import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AlgorithmIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M41.524 31.857a5.475 5.475 0 0 0-1.308.164l-3.54-6.195a5.466 5.466 0 0 0-5.222-9.138l-3.54-6.195a5.476 5.476 0 1 0-7.828 0l-3.54 6.195a5.47 5.47 0 0 0-5.222 9.138l-3.54 6.2a5.474 5.474 0 1 0 3.955 6.812h7a5.471 5.471 0 0 0 10.526 0h7a5.474 5.474 0 1 0 5.263-6.976Zm-31.134 1.65 3.54-6.195a5.3 5.3 0 0 0 2.632 0l3.52 6.2a5.466 5.466 0 0 0-1.345 2.322h-7a5.455 5.455 0 0 0-1.347-2.327ZM24 12.143a5.475 5.475 0 0 0 1.308-.164l3.54 6.2a5.465 5.465 0 0 0-1.348 2.32l-7-.007a5.467 5.467 0 0 0-1.346-2.313l3.54-6.195a5.475 5.475 0 0 0 1.306.159Zm1.288 19.873a5.3 5.3 0 0 0-2.6.006l-3.523-6.209a5.472 5.472 0 0 0 1.341-2.326l6.992.007a5.467 5.467 0 0 0 1.3 2.273Zm2.612 1.475 3.478-6.2a5.312 5.312 0 0 0 2.692.019l3.54 6.195a5.455 5.455 0 0 0-1.349 2.326h-7a5.474 5.474 0 0 0-1.361-2.34Z" />
            </svg>
        );
    },
);
