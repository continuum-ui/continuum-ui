import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AmusementparkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.371 22a10.71 10.71 0 0 0-6.969 3.093C17.804 20.944 14.02 16 7.896 16a12.449 12.449 0 0 0-5.285 1.266 1.001 1.001 0 0 0-.611.922V33.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V18.854a9.847 9.847 0 0 1 2-.648V33.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V18.287a9.497 9.497 0 0 1 2 .761V33.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V22.082c.683.682 1.35 1.398 2 2.14V33.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-4.805a19.68 19.68 0 0 0 2 1.778V33.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.537a5.035 5.035 0 0 0 2-.17V33.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.646C34 23.995 31.212 22 28.371 22Zm3.634 4.915A3.313 3.313 0 0 1 28.452 30c-1.414 0-2.645-.103-5.722-3.418A9.369 9.369 0 0 1 28.361 24c1.805 0 3.644 1.179 3.644 2.915ZM35.993 13a2 2 0 0 1-2 2 1.86 1.86 0 0 1-.19-.039 10.912 10.912 0 0 1-1.095 3.183 1.959 1.959 0 0 1 1.092 2.689A9.1 9.1 0 0 0 29.58 19.1a8.95 8.95 0 0 0 2.37-5.601h-6.66a.5.5 0 0 1 0-1h6.659a8.92 8.92 0 0 0-2.267-5.477l-4.71 4.71a.5.5 0 0 1-.707-.707l4.71-4.71A8.92 8.92 0 0 0 23.5 4.05v6.659a.5.5 0 0 1-1 0V4.05a8.92 8.92 0 0 0-5.476 2.266l4.71 4.71a.5.5 0 1 1-.707.707l-4.71-4.71A8.92 8.92 0 0 0 14.05 12.5h6.659a.5.5 0 0 1 0 1H14.05c.027.332.046.665.1.989a14.108 14.108 0 0 0-5.138-1.395c-.001-.033-.019-.06-.019-.094a2 2 0 0 1 2-2 1.949 1.949 0 0 1 1.13.395c.03-.203.053-.409.094-.608a10.89 10.89 0 0 1 1.8-4.078A1.973 1.973 0 0 1 12.993 5a2 2 0 0 1 2-2 1.974 1.974 0 0 1 1.711 1.026 10.885 10.885 0 0 1 4.326-1.844c-.006-.063-.037-.117-.037-.182a2 2 0 0 1 4 0 1.88 1.88 0 0 1-.039.192 10.925 10.925 0 0 1 4.343 1.812A1.972 1.972 0 0 1 30.993 3a2 2 0 0 1 2 2 1.972 1.972 0 0 1-1.004 1.696 10.924 10.924 0 0 1 1.812 4.343 1.878 1.878 0 0 1 .192-.039 2 2 0 0 1 2 2Zm-7.58 6.12-4.147-4.146a.5.5 0 0 1 .707-.707l4.146 4.145a.5.5 0 1 1-.707.707ZM23 21.464a.501.501 0 0 1-.5-.5V15.29a.5.5 0 0 1 1 0v5.674a.501.501 0 0 1-.5.5Zm-4.92-3.045a.5.5 0 0 1-.353-.854l3.3-3.3a.5.5 0 0 1 .707.708l-3.3 3.3a.5.5 0 0 1-.354.146Z" />
            </svg>
        );
    },
);
