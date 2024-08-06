import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FileImportantIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm-8.763-2.172a.362.362 0 0 1 .171-.373 5.889 5.889 0 0 1 2.035-.408 6.662 6.662 0 0 1 2.071.306.424.424 0 0 1 .2.374v2.443a78.132 78.132 0 0 1-.679 7.884c0 .1-.033.2-.237.2h-2.711a.224.224 0 0 1-.237-.2c-.069-.951-.612-4.931-.612-7.782Zm2.206 18.6a2.635 2.635 0 0 1-2.9-2.7 2.739 2.739 0 0 1 2.9-2.777 2.7 2.7 0 0 1 2.9 2.777 2.635 2.635 0 0 1-2.9 2.701Z" />
                <path d="M20 2v10h10L20 2z" />
            </svg>
        );
    },
);
