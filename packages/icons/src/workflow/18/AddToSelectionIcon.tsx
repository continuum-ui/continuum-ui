import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AddToSelectionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.16 5.443 1.028-1.777a15.947 15.947 0 0 0-5.4-1.606v2.066a13.883 13.883 0 0 1 4.372 1.317ZM29.53 10.066l1.8-1.035a16.133 16.133 0 0 0-3.852-3.97L26.44 6.849a14.066 14.066 0 0 1 3.09 3.217ZM31.933 16.663H34a15.91 15.91 0 0 0-1.379-5.291L30.83 12.4a13.9 13.9 0 0 1 1.103 4.263ZM31.933 19.337a13.9 13.9 0 0 1-1.1 4.258l1.791 1.032A15.91 15.91 0 0 0 34 19.337ZM26.44 29.151l1.033 1.788a16.131 16.131 0 0 0 3.852-3.97l-1.8-1.035a14.066 14.066 0 0 1-3.085 3.217ZM19.785 31.874v2.066a15.947 15.947 0 0 0 5.4-1.606l-1.025-1.777a13.883 13.883 0 0 1-4.375 1.317ZM12.538 30.894l-1.028 1.777A15.993 15.993 0 0 0 17.107 34v-2.045a13.937 13.937 0 0 1-4.569-1.061ZM6.739 26.293l-1.8 1.035a16.132 16.132 0 0 0 4.214 4.062l1.026-1.775a14.071 14.071 0 0 1-3.44-3.322ZM4.067 19.337H2a15.9 15.9 0 0 0 1.574 5.694L5.365 24a13.889 13.889 0 0 1-1.298-4.663ZM5.365 12l-1.791-1.031A15.9 15.9 0 0 0 2 16.663h2.067A13.889 13.889 0 0 1 5.365 12ZM10.184 6.384 9.158 4.609a16.132 16.132 0 0 0-4.214 4.062l1.8 1.035a14.073 14.073 0 0 1 3.44-3.322ZM17.107 4.045V2a15.99 15.99 0 0 0-5.6 1.329l1.027 1.777a13.937 13.937 0 0 1 4.573-1.061ZM28 19a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
