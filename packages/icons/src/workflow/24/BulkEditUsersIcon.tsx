import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BulkEditUsersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.682 25.138a1.95 1.95 0 0 1-1.658-1.886v-2.694a1.958 1.958 0 0 1 .438-1.2 16.8 16.8 0 0 0 2.98-9.464C27.442 3.17 24.159.1 19.2.1s-8.336 3.217-8.336 9.79a16.924 16.924 0 0 0 3.126 9.469 1.941 1.941 0 0 1 .435 1.2v2.681a1.947 1.947 0 0 1-1.67 1.887C2.071 26.267.1 33.471.1 36.373V40H22l.551-2.311a5.226 5.226 0 0 1 1.3-2.085l8.473-8.474a17.366 17.366 0 0 0-6.642-1.992Z" />
                <path d="M36.793 22.66c-.081-.01-.152-.026-.234-.035a1.756 1.756 0 0 1-1.5-1.7V18.5a1.76 1.76 0 0 1 .394-1.083A15.133 15.133 0 0 0 38.138 8.9c0-6.047-2.954-8.8-7.418-8.8a8.356 8.356 0 0 0-2.289.337c1.728 2.171 2.851 5.174 2.851 9.453a20.731 20.731 0 0 1-3.418 11.32v.369a20.483 20.483 0 0 1 7.276 2.734ZM47.613 29.045l-4.58-4.679a.983.983 0 0 0-.7-.287H42.3a1.107 1.107 0 0 0-.752.329L27.1 38.855a.838.838 0 0 0-.2.342l-2.716 8.013c-.092.3.373.69.636.69a.207.207 0 0 0 .05 0c.224-.052 6.844-2.361 8.017-2.714a.784.784 0 0 0 .336-.2L47.57 30.532a1.049 1.049 0 0 0 .043-1.487ZM26.205 45.88l2.189-6.022 3.832 3.822c-1.754.528-4.505 1.748-6.021 2.2Z" />
            </svg>
        );
    },
);
