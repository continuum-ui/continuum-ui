import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Hand1Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.241 19.577c-.532-.3-1.1-2.747-3.258-2.747a1.262 1.262 0 0 1-.582-.07c-.134-.086-.482-2.5-2.843-2.5a7.284 7.284 0 0 1-1.6-.116 3.18 3.18 0 0 0-2.716-1.793c-.224 0-1.338.251-1.372.251-1.215 0-1.6-1.206-3.5-.76-2.143.5-2.224 3.088-2.224 4.457a12.594 12.594 0 0 1-.223 2.458 1.779 1.779 0 0 1-.9 1.27c-.463.264-4.1-2.645-4.1-2.645-2.381-1.621-3.849-1.06-4.464-.331-.655.776-.2 2.05.747 3.032L7.3 27.01c1.582 1.909 6.521 7.656 11.174 7.656 4.565 0 8.312-2.167 9.517-5 .818-2.371 1.5-4.968 1.756-6.113a3.58 3.58 0 0 0-1.506-3.976Z" />
            </svg>
        );
    },
);
