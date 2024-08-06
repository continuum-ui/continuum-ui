import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TeapotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.047 11a11.1 11.1 0 0 0-6.675-3.136 2.211 2.211 0 0 0 .878-1.739 2.25 2.25 0 0 0-4.5 0 2.212 2.212 0 0 0 1.006 1.825A11.161 11.161 0 0 0 10.7 11ZM27.819 14H8.475a16.416 16.416 0 0 0-1.419 4.159h-.033c-1.3-.537-1.123-.977-2.229-3.853-.637-1.656-2.65-1.866-3.383-2.033a.738.738 0 0 0-.82.409l-.446.892c-.2.4-.019 1 .43 1.034a1.508 1.508 0 0 1 1.284.745 9.735 9.735 0 0 1 .548 2.075c.216 1.177.413 3.367 1.58 4.835a7.3 7.3 0 0 0 3.289 2.225 12.642 12.642 0 0 0 5.254 7.285 1.531 1.531 0 0 0 .824.232H23.4a1.53 1.53 0 0 0 .824-.232 12.53 12.53 0 0 0 4.941-6.3c.1-.035.2-.069.288-.108a14.225 14.225 0 0 0 3.378-1.984 7.766 7.766 0 0 0 2.922-6.192A4.6 4.6 0 0 0 27.819 14Zm4.206 7.091a8.2 8.2 0 0 1-2.166 1.573A14.006 14.006 0 0 0 30 20.75a15.235 15.235 0 0 0-.885-4.852c.866-.975 2.539-1.643 3.649-.63 1.603 1.461.482 4.518-.739 5.823Z" />
            </svg>
        );
    },
);
