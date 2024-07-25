import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphPathingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="12" rx=".5" ry=".5" width="6" x="2" y="2" />
                <rect height="8" rx=".5" ry=".5" width="8" x="26" y="2" />
                <rect height="8" rx=".5" ry=".5" width="8" x="26" y="14" />
                <rect height="8" rx=".5" ry=".5" width="8" x="26" y="26" />
                <path d="M24 6.479a.508.508 0 0 1-.513.5 28.045 28.045 0 0 1-7.35-1.088 22.668 22.668 0 0 0-5.639-.9.5.5 0 0 1-.5-.5v-1a.51.51 0 0 1 .518-.5 24.63 24.63 0 0 1 6.115.965A26.4 26.4 0 0 0 23.5 4.982a.5.5 0 0 1 .5.5ZM24 18.058a.5.5 0 0 1-.525.5c-2.937-.236-4.214-2.459-5.452-4.612-1.532-2.666-2.982-5.189-7.531-5.358A.5.5 0 0 1 10 8.1v-1a.505.505 0 0 1 .517-.5c5.7.194 7.657 3.606 9.241 6.362 1.225 2.132 2.045 3.412 3.769 3.6a.511.511 0 0 1 .473.5Z" />
                <path d="M24 30.452a.51.51 0 0 1-.591.5c-3.2-.431-4.6-4.385-6.079-8.557-1.573-4.437-3.2-9.019-6.858-9.381a.505.505 0 0 1-.472-.499v-1.007a.5.5 0 0 1 .525-.5c5.02.357 6.966 5.851 8.69 10.718 1.249 3.522 2.432 6.862 4.417 7.23a.479.479 0 0 1 .368.481Z" />
            </svg>
        );
    },
);
