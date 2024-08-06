import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TestABGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m6.425 24.148-1.744 5.234a.314.314 0 0 1-.349.254H1.16c-.19 0-.254-.1-.222-.317l6.534-18.588a4.851 4.851 0 0 0 .285-1.713c0-.127.063-.222.19-.222h4.409c.159 0 .19.032.222.19l7.327 20.365c.032.19 0 .285-.19.285h-3.551a.318.318 0 0 1-.317-.19l-1.84-5.3Zm6.566-3.458c-.666-2.093-2.157-6.5-2.791-8.723h-.032c-.507 2.126-1.776 5.833-2.728 8.724ZM26.119 19.864c.07 0 .137.023.207.025l3.289-12.3c.031-.127 0-.159-.127-.159h-2.664c-.127 0-.159 0-.19.127L23.021 21a4.846 4.846 0 0 1 3.098-1.136ZM33.1 17h1.8a4.9 4.9 0 0 1 .879.084v-5.053c.666 0 1.49-.032 2.506-.032 2.6 0 4 .92 4 2.791a3 3 0 0 1-1.213 2.51 19.525 19.525 0 0 0-2.887-.19h-2.323a4.906 4.906 0 0 1 3.71 3.334 4.9 4.9 0 0 1 5.768.855l1.36 1.359c.115.116.21.244.311.368a5.323 5.323 0 0 0-3.024-4.651 4.952 4.952 0 0 0 2-4.124c0-2.03-1.016-5.519-7.644-5.519-2.126 0-5.013.063-6.154.1-.158.032-.19.127-.19.285v8.028A4.867 4.867 0 0 1 33.1 17ZM46.1 32.207h-3.14a9.078 9.078 0 0 0-1.326-3.219l2.235-2.235a.9.9 0 0 0 0-1.268l-1.359-1.359a.9.9 0 0 0-1.268 0l-2.235 2.235a9.08 9.08 0 0 0-3.218-1.326V21.9a.9.9 0 0 0-.9-.9H33.1a.9.9 0 0 0-.9.9v3.139a9.08 9.08 0 0 0-3.218 1.326l-2.235-2.235a.9.9 0 0 0-1.268 0l-1.359 1.359a.9.9 0 0 0 0 1.268l2.235 2.235a9.078 9.078 0 0 0-1.326 3.219H21.9a.9.9 0 0 0-.9.9V34.9a.9.9 0 0 0 .9.9h3.14a9.078 9.078 0 0 0 1.326 3.219l-2.235 2.235a.9.9 0 0 0 0 1.268l1.359 1.359a.9.9 0 0 0 1.268 0l2.235-2.235a9.083 9.083 0 0 0 3.218 1.326V46.1a.9.9 0 0 0 .9.9H34.9a.9.9 0 0 0 .9-.9v-3.14a9.083 9.083 0 0 0 3.218-1.326l2.235 2.235a.9.9 0 0 0 1.268 0l1.359-1.359a.9.9 0 0 0 0-1.268l-2.235-2.235a9.078 9.078 0 0 0 1.326-3.219H46.1a.9.9 0 0 0 .9-.9V33.1a.9.9 0 0 0-.9-.893ZM34 37.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
