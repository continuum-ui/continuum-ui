import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImageAutoModeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="20.757" cy="19.283" r="2.5" />
                <path d="m20.865.409.1 2.842a2.318 2.318 0 0 0 1.186 1.939l2.482 1.39-2.843.1a2.317 2.317 0 0 0-1.938 1.184l-1.39 2.482-.1-2.843a2.317 2.317 0 0 0-1.184-1.939l-2.482-1.39 2.843-.1a2.318 2.318 0 0 0 1.936-1.184ZM29.686 5.541l.133 3.659a2.984 2.984 0 0 0 1.524 2.5l3.2 1.79-3.661.133a2.982 2.982 0 0 0-2.5 1.524l-1.791 3.2-.132-3.661a2.986 2.986 0 0 0-1.525-2.5l-3.2-1.791 3.661-.132a2.987 2.987 0 0 0 2.5-1.525Z" />
                <path d="M26 22v6.463l-3.687-3.686a2 2 0 0 0-2.828 0l-3.071 3.071-7.556-7.556a2 2 0 0 0-2.829 0L2 24.321V14h21l-3-2H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V19Z" />
            </svg>
        );
    },
);
