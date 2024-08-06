import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const OnAirIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.862 25.853a1.509 1.509 0 0 0 2.289.224 10.188 10.188 0 0 0 2.082-11.441 9.989 9.989 0 0 0-6.741-5.606 10.154 10.154 0 0 0-9.618 17.07 1.507 1.507 0 0 0 2.284-.234 1.475 1.475 0 0 0-.172-1.893 7.181 7.181 0 0 1-1.474-8.125 7.04 7.04 0 0 1 4.7-3.9 7.153 7.153 0 0 1 6.822 12 1.482 1.482 0 0 0-.172 1.905Z" />
                <path d="M22.146 2.614A16.319 16.319 0 0 0 13.4 31.249a1.478 1.478 0 0 0 2.205-.3 1.534 1.534 0 0 0-.271-1.995 13.361 13.361 0 0 1-3.785-14.909 13.331 13.331 0 1 1 21.136 14.894 1.5 1.5 0 0 0 1.95 2.279 16.325 16.325 0 0 0-12.488-28.6Z" />
                <path d="M26.325 22.777a4.6 4.6 0 0 0 2.112-5.143 4.553 4.553 0 0 0-3.21-3.234 4.591 4.591 0 0 0-3.552 8.381l-5.982 19.932A1 1 0 0 0 16.651 44h1.672a1 1 0 0 0 .958-.712l.9-3.288h7.643l.9 3.288a1 1 0 0 0 .958.712h1.672a1 1 0 0 0 .958-1.287ZM24 16.323a2.5 2.5 0 1 1-2.5 2.5 2.5 2.5 0 0 1 2.5-2.5ZM25.638 32h-3.276L24 26Zm-4.913 6 1.092-4h4.367l1.092 4Z" />
            </svg>
        );
    },
);
