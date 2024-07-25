import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RadialGradientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 12.356A5.644 5.644 0 1 0 23.644 18 5.644 5.644 0 0 0 18 12.356Z" opacity=".07" />
                <path
                    d="M18 10.669A7.331 7.331 0 1 0 25.331 18 7.331 7.331 0 0 0 18 10.669Zm0 12.975A5.644 5.644 0 1 1 23.644 18 5.644 5.644 0 0 1 18 23.644Z"
                    opacity=".18"
                />
                <path
                    d="M18 8.909A9.091 9.091 0 1 0 27.091 18 9.091 9.091 0 0 0 18 8.909Zm0 16.422A7.331 7.331 0 1 1 25.331 18 7.331 7.331 0 0 1 18 25.331Z"
                    opacity=".28"
                />
                <path
                    d="M18 7.091A10.909 10.909 0 1 0 28.909 18 10.909 10.909 0 0 0 18 7.091Zm0 20A9.091 9.091 0 1 1 27.091 18 9.091 9.091 0 0 1 18 27.091Z"
                    opacity=".38"
                />
                <path
                    d="M18 5.273A12.727 12.727 0 1 0 30.727 18 12.727 12.727 0 0 0 18 5.273Zm0 23.636A10.909 10.909 0 1 1 28.909 18 10.909 10.909 0 0 1 18 28.909Z"
                    opacity=".5"
                />
                <path
                    d="M14.1 32h7.8A14.551 14.551 0 0 0 32 21.9v-7.8A14.551 14.551 0 0 0 21.9 4h-7.8A14.551 14.551 0 0 0 4 14.1v7.8A14.551 14.551 0 0 0 14.1 32ZM18 5.273A12.727 12.727 0 1 1 5.273 18 12.727 12.727 0 0 1 18 5.273Z"
                    opacity=".6"
                />
                <path d="M14.1 4H9.56A16.413 16.413 0 0 0 4 9.56v4.54A14.551 14.551 0 0 1 14.1 4ZM21.9 32h4.536A16.4 16.4 0 0 0 32 26.439V21.9A14.551 14.551 0 0 1 21.9 32ZM4 21.9v4.535A16.4 16.4 0 0 0 9.561 32H14.1A14.551 14.551 0 0 1 4 21.9ZM32 14.1V9.56A16.413 16.413 0 0 0 26.44 4H21.9A14.551 14.551 0 0 1 32 14.1Z" />
                <path d="M26.439 32H29.6a18.172 18.172 0 0 0 2.4-2.4v-3.161A16.4 16.4 0 0 1 26.439 32ZM9.56 4H6.4A18.172 18.172 0 0 0 4 6.4v3.16A16.413 16.413 0 0 1 9.56 4ZM4 26.439V29.6A18.172 18.172 0 0 0 6.4 32h3.161A16.4 16.4 0 0 1 4 26.439ZM32 9.56V6.4A18.172 18.172 0 0 0 29.6 4h-3.16A16.413 16.413 0 0 1 32 9.56Z" />
                <path d="M33 2H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 27.6a18.172 18.172 0 0 1-2.4 2.4H6.4A18.172 18.172 0 0 1 4 29.6V6.4A18.172 18.172 0 0 1 6.4 4h23.2A18.172 18.172 0 0 1 32 6.4Z" />
            </svg>
        );
    },
);
