import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const StadiumIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M35.19 15.46c-1.733-1.48-5.911-2.653-11.19-3.17V7.25l4.752-1.782a.5.5 0 0 0 0-.936L24 2.75V2.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 22 2.5v9.64c-1.294-.083-2.62-.14-4-.14s-2.706.057-4 .14V5.25l4.752-1.782a.5.5 0 0 0 0-.936L14 .75V.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 12 .5v11.79a36.611 36.611 0 0 0-8 1.574V7.25l4.752-1.782a.5.5 0 0 0 0-.936L4 2.75V2.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 2 2.5v12.185a6.635 6.635 0 0 0-1.167.755A2.468 2.468 0 0 0 0 17.344V32c0 1.818 5.463 3.35 12.937 3.836A1.002 1.002 0 0 0 14 34.84v-3.33c0-1 .517-1.51 1.155-1.51h5.69A1.155 1.155 0 0 1 22 31.155v3.678a1.009 1.009 0 0 0 1.07 1.003C30.54 35.349 36 33.818 36 32V17.314a2.418 2.418 0 0 0-.81-1.854Zm-1.944 2.473c-1.89 1.22-6.977 2.931-15.246 2.931-8.263 0-13.35-1.71-15.242-2.928a.61.61 0 0 1 .028-.993C4.338 15.975 8.737 14 18 14c9.316 0 13.681 1.972 15.22 2.942a.61.61 0 0 1 .026.991Z" />
            </svg>
        );
    },
);
