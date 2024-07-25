import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailExcludeOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 36H4v-2.809l14.182-8.566 3.945 3.156c.038.03.084.04.123.068a16.015 16.015 0 0 1 1.115-1.64L4 10.7V8h40v2.731L31.629 20.62a15.97 15.97 0 0 1 3.95-.6L44 13.293v8.865a16.05 16.05 0 0 1 4 3.283V6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18.524A15.988 15.988 0 0 1 20 36ZM4 13.265l12.516 10.028L4 30.854Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.859 8.859 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.859 8.859 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
