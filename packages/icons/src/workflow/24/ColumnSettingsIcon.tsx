import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ColumnSettingsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 6v38H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2ZM21.065 28.684a4.5 4.5 0 0 1 .516-5.744l1.358-1.359A4.324 4.324 0 0 1 28 20.729V6H18v24.865a4.506 4.506 0 0 1 3.065-2.181ZM20.264 41.881a4.463 4.463 0 0 1 .8-2.565A4.507 4.507 0 0 1 18 37.135V44h2.816a4.453 4.453 0 0 1-.552-2.119ZM33.1 17.4h1.8a4.5 4.5 0 0 1 4.42 3.665 4.464 4.464 0 0 1 2.565-.8c.041 0 .079.01.119.011V8a2 2 0 0 0-2-2H32v11.554a4.44 4.44 0 0 1 1.1-.154ZM46.1 32.207h-3.14a9.078 9.078 0 0 0-1.326-3.219l2.235-2.235a.9.9 0 0 0 0-1.268l-1.359-1.359a.9.9 0 0 0-1.268 0l-2.235 2.235a9.08 9.08 0 0 0-3.218-1.326V21.9a.9.9 0 0 0-.9-.9H33.1a.9.9 0 0 0-.9.9v3.139a9.08 9.08 0 0 0-3.218 1.326l-2.235-2.235a.9.9 0 0 0-1.268 0l-1.359 1.359a.9.9 0 0 0 0 1.268l2.235 2.235a9.078 9.078 0 0 0-1.326 3.219H21.9a.9.9 0 0 0-.9.9V34.9a.9.9 0 0 0 .9.9h3.14a9.078 9.078 0 0 0 1.326 3.219l-2.235 2.235a.9.9 0 0 0 0 1.268l1.359 1.359a.9.9 0 0 0 1.268 0l2.235-2.235a9.083 9.083 0 0 0 3.218 1.326V46.1a.9.9 0 0 0 .9.9H34.9a.9.9 0 0 0 .9-.9v-3.14a9.083 9.083 0 0 0 3.218-1.326l2.235 2.235a.9.9 0 0 0 1.268 0l1.359-1.359a.9.9 0 0 0 0-1.268l-2.235-2.235a9.078 9.078 0 0 0 1.326-3.219H46.1a.9.9 0 0 0 .9-.9V33.1a.9.9 0 0 0-.9-.893ZM34 37.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
