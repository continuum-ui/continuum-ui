import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TagBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 6.8c0-.271.06-.433.372-.486 2.226-.054 8.567-.162 12.715-.162C34.021 6.152 36 12.106 36 15.572a8.194 8.194 0 0 1-3.9 7.038c2.29 1.03 5.939 3.411 5.939 8.392 0 6.822-6.743 10.937-16.955 10.937-5.384 0-10.3-.054-12.655-.108C8.124 41.777 8 41.614 8 41.4Zm7.971 13.423h4.479a41.277 41.277 0 0 1 5.361.31 4.713 4.713 0 0 0 2.241-4.081c0-3.05-2.595-4.548-7.424-4.548-1.887 0-3.417.051-4.657.051Zm0 15.857c1.3.053 2.786.107 4.565.107 5.568.054 9.123-1.661 9.123-5.251 0-2.2-1.183-3.966-4.264-4.662a17.167 17.167 0 0 0-4.029-.375h-5.395Z" />
            </svg>
        );
    },
);
