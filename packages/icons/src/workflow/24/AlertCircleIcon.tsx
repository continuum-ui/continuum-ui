import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.9 7.8A16.1 16.1 0 1 1 7.8 23.9 16.118 16.118 0 0 1 23.9 7.8Zm0-3.8a19.9 19.9 0 1 0 19.9 19.9A19.9 19.9 0 0 0 23.9 4Z" />
                <path d="M21 32.408a2.742 2.742 0 0 1 2.7-2.784c.068 0 .135 0 .2.005a2.7 2.7 0 0 1 2.894 2.484 2.9 2.9 0 0 1 .006.3 2.636 2.636 0 0 1-2.559 2.711 2.769 2.769 0 0 1-.341-.012 2.638 2.638 0 0 1-2.888-2.358 2.769 2.769 0 0 1-.012-.346Zm5.358-20.514a.5.5 0 0 1 .24.443v2.516c0 3.384-.684 9.619-.8 10.829 0 .12-.041.24-.283.24h-3.226a.267.267 0 0 1-.283-.24c-.08-1.128-.725-7.324-.725-10.708v-2.517a.427.427 0 0 1 .2-.442 6.949 6.949 0 0 1 2.417-.484 7.91 7.91 0 0 1 2.46.363Z" />
            </svg>
        );
    },
);
