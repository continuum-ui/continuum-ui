import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FollowOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m7.9 28.9-.758.1a2.9 2.9 0 0 1-3.252-2.506l-.3-2.725 6.516-.845.3 2.725A2.9 2.9 0 0 1 7.9 28.9ZM5.759 1.338C4.083-.615 2.21-.8.886 3.308c-1.96 8.7-.44 12.21 2.323 17.92l6.516-.845c-.7-5.394.643-7.815.362-9.986a17.569 17.569 0 0 0-4.328-9.059ZM13.689 27.25l1.019.171c0-.14-.008-.28-.008-.421a12.305 12.305 0 0 1 9.067-11.87 37.439 37.439 0 0 0-.593-4.6c-1.164-4.16-3.043-4.048-4.792-2.16a17.564 17.564 0 0 0-4.672 8.888c-.364 2.158.885 4.629-.021 9.992ZM15.107 30.147l-1.9-.32-.4 2.659a2.9 2.9 0 0 0 2.38 3.346l.754.127a2.894 2.894 0 0 0 2.146-.483 12.278 12.278 0 0 1-2.98-5.329Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
