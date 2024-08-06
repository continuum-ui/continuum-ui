import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const UsersLockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 32v-1.609c0-5.186-4.205-10.061-9.382-10.372A10 10 0 0 0 24 30v2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V34a2 2 0 0 0-2-2Zm-16-2a6 6 0 0 1 12 0v2H28Zm8 10.222V43a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.779a3 3 0 1 1 4 0ZM30.72 5.227a8.325 8.325 0 0 0-2.288.338c1.729 2.17 2.851 5.273 2.851 9.552 0 .383-.023.772-.048 1.161a13.93 13.93 0 0 1 6.664.279 14.357 14.357 0 0 0 .239-2.429c0-6.048-2.954-8.901-7.418-8.901Zm-11.52 0c-4.96 0-8.336 3.317-8.336 9.89a16.924 16.924 0 0 0 3.126 9.469 1.943 1.943 0 0 1 .435 1.2v2.683a1.947 1.947 0 0 1-1.67 1.887C2.071 31.494 0 38.7 0 41.6V44h18V33a5 5 0 0 1 2.037-4.025A14.01 14.01 0 0 1 27.2 17.781a16.047 16.047 0 0 0 .242-2.665C27.441 8.4 24.159 5.227 19.2 5.227Z" />
            </svg>
        );
    },
);
