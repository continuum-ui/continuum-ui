import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ColorFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.727 23.672a64.346 64.346 0 0 0-1.306-6.632c-.624-2.436-2.919-2.98-5.34-3.308l-8.107-8.107a1 1 0 0 0-1.415 0l-2.424 2.43 4.872 4.872a1.5 1.5 0 1 1-2.121 2.121l-4.872-4.872L1.856 21.334a1 1 0 0 0 0 1.415l10.753 10.739a1 1 0 0 0 1.414 0l15.571-15.594a1 1 0 0 0 .015-1.4.38.38 0 0 1 .566.149c.5.938.69 2.8-.528 5.574-.377.86-1.388 2.148-1.388 3.256a2.516 2.516 0 0 0 2.779 2.8c1.642.001 2.995-1.54 2.689-4.601ZM15.131 8.05 9.4 2.317a1.5 1.5 0 0 0-2.124 2.121l5.733 5.733Z" />
            </svg>
        );
    },
);
