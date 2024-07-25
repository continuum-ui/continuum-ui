import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ForecastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.265 42h-22.53a2 2 0 0 1-1.906-2.606L12.545 34h22.91l1.716 5.394A2 2 0 0 1 35.265 42ZM48 12.17l-1.783 2.119a2.257 2.257 0 0 0-.412 2.172l.883 2.625-2.12-1.786a2.257 2.257 0 0 0-2.172-.412l-2.625.883 1.783-2.119a2.257 2.257 0 0 0 .412-2.172l-.883-2.625 2.117 1.786a2.256 2.256 0 0 0 2.172.412ZM38.6 3.092l-2.3 2.729a2.906 2.906 0 0 0-.531 2.8L36.908 12l-2.729-2.3a2.906 2.906 0 0 0-2.8-.531L28 10.31l2.3-2.729a2.906 2.906 0 0 0 .531-2.8L29.69 1.4l2.729 2.3a2.906 2.906 0 0 0 2.8.531Z" />
                <path d="M38 22a13.984 13.984 0 0 0-1.344-5.993s-.11-.132-.44-.067a3.993 3.993 0 0 1-1.882-.879l-2.262-1.9-2.8.939a4 4 0 0 1-4.555-6.082Q24.363 8 24 8a14 14 0 0 0-9.8 24h19.6A13.957 13.957 0 0 0 38 22Z" />
            </svg>
        );
    },
);
