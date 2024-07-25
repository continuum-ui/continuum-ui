import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ForPlacementOnlyIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M21.688 19.652c-.4 0-.77.008-1.039.019v4.156h.807c2.734 0 2.734-1.613 2.734-2.143-.001-1.768-1.569-2.032-2.502-2.032ZM34.807 19.525c-1.965 0-3.137 1.68-3.137 4.494 0 2.2.851 4.557 3.242 4.557 1.937 0 3.094-1.7 3.094-4.557-.02-2.812-1.217-4.494-3.199-4.494Z" />
                <path d="M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4Zm-7.768 15.578a.54.54 0 0 1-.437.182h-5.234v2.949h4.66a.51.51 0 0 1 .549.549v1.906a.53.53 0 0 1-.549.549h-4.66V30.8a.534.534 0 0 1-.572.568H7.832A.531.531 0 0 1 7.3 30.8V17.283a.52.52 0 0 1 .549-.549h7.709a.554.554 0 0 1 .586.51l.213 2.076Zm5.223 7.236c-.328 0-.807-.014-.807-.014v4.02a.52.52 0 0 1-.549.549h-2.138a.52.52 0 0 1-.549-.549V17.326a.516.516 0 0 1 .527-.57l.225-.006c.834-.023 2.145-.059 3.44-.059 4.293 0 5.822 2.561 5.822 4.955 0 3.188-2.289 5.168-5.971 5.168Zm13.373 4.744c-3.947 0-6.5-2.959-6.5-7.539 0-4.4 2.682-7.477 6.521-7.477 3.865 0 6.479 2.978 6.5 7.41.001 4.622-2.56 7.607-6.521 7.607Z" />
            </svg>
        );
    },
);
