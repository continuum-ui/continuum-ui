import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TestABIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m6.425 28.148-1.744 5.234a.314.314 0 0 1-.349.254H1.16c-.19 0-.254-.1-.222-.317l6.534-18.588a4.851 4.851 0 0 0 .285-1.713c0-.127.063-.222.19-.222h4.409c.159 0 .19.032.222.19l7.327 20.365c.032.19 0 .285-.19.285h-3.551a.318.318 0 0 1-.317-.19l-1.84-5.3Zm6.566-3.458c-.666-2.093-2.157-6.5-2.791-8.723h-.032c-.507 2.126-1.776 5.833-2.728 8.724ZM23.4 34.841c-.032.127-.1.159-.222.159h-2.635c-.159 0-.19-.063-.159-.19l6.249-23.251c.032-.127.063-.127.19-.127h2.664c.127 0 .159.032.127.159ZM32 13.113c0-.159.032-.254.19-.286 1.142-.032 4.028-.1 6.154-.1 6.63 0 7.645 3.489 7.645 5.519a4.952 4.952 0 0 1-2 4.124 5.315 5.315 0 0 1 3.045 4.917c0 4-3.458 6.407-8.691 6.407-2.76 0-4.917-.032-6.122-.063a.241.241 0 0 1-.221-.249Zm3.775 7.993h2.411a19.531 19.531 0 0 1 2.886.19 3 3 0 0 0 1.205-2.506c0-1.871-1.4-2.791-4-2.791-1.015 0-1.84.032-2.506.032Zm0 9.326c.7.032 1.491.064 2.442.064 2.982.032 4.885-.983 4.885-3.109a2.663 2.663 0 0 0-2.284-2.76 8.346 8.346 0 0 0-2.157-.222h-2.886Z" />
            </svg>
        );
    },
);
