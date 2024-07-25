import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileXMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm7.069 16.752h-1.931a.612.612 0 0 1-.59-.344s-1.41-2.4-1.908-3.271c-.6 1.1-1.215 2.213-1.83 3.289a.566.566 0 0 1-.533.325h-1.839a.476.476 0 0 1-.406-.725l2.94-4.8-2.872-4.757a.476.476 0 0 1 .407-.723H19.4a.67.67 0 0 1 .584.342l1.8 3.2L23.49 20.1a.67.67 0 0 1 .59-.353h1.786a.476.476 0 0 1 .406.724l-2.83 4.63 3.032 4.926a.476.476 0 0 1-.405.725ZM14.62 29.028a.257.257 0 0 1-.209.408h-2.744a.257.257 0 0 1-.206-.1L8 24.718l3.461-4.618a.256.256 0 0 1 .206-.1h2.744a.257.257 0 0 1 .209.407l-3.505 4.31Z" />
            </svg>
        );
    },
);
