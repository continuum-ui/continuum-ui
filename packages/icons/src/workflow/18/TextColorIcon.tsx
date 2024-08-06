import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.059 27.869A6.854 6.854 0 0 1 16 24.548V8h8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8v20H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.162a6.948 6.948 0 0 1-.103-4.131Z" />
                <path d="M35.8 24.128c-1.156-4.61-5.8-6.14-8.685-5.777-2.516.316-4.366 1.172-4.4 2.557-.019.772.411 1.1 1.159 1.554.656.395 1.4.595.875 1.982-.321.856-1.849.467-2.517.485-2.212.057-5.058-.024-6.052 3.533A5.216 5.216 0 0 0 19 34.439a12.214 12.214 0 0 0 8.808.759c5.286-1.624 9.132-6.517 7.992-11.07Zm-14.593 8.688a2.39 2.39 0 1 1 1.648-2.95 2.389 2.389 0 0 1-1.648 2.95Zm5.576.738a2.239 2.239 0 1 1 1.544-2.764 2.239 2.239 0 0 1-1.544 2.764Zm2.96-13.45a1.573 1.573 0 1 1-1.085 1.942 1.572 1.572 0 0 1 1.085-1.946Zm1.544 10.784a1.89 1.89 0 1 1 1.3-2.334 1.891 1.891 0 0 1-1.3 2.334Zm2.041-4.176a1.682 1.682 0 1 1 1.161-2.077 1.681 1.681 0 0 1-1.161 2.077Z" />
            </svg>
        );
    },
);
