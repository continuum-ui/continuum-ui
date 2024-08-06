import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Back30SecondsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.031 2.675 25.853.854A.49.49 0 0 0 26 .5a.5.5 0 0 0-.5-.5h-5.053A.5.5 0 0 0 20 .447V5.5a.5.5 0 0 0 .5.5.494.494 0 0 0 .35-.147l1.58-1.58a14.44 14.44 0 0 1-1.93 27.994.6.6 0 0 0-.5.585V33.9a.408.408 0 0 0 .463.4 16.471 16.471 0 0 0 3.568-31.625Z" />
                <path d="M27.773 17.968c0-3.259-.986-6.968-4.931-6.968-3.216 0-4.995 2.98-4.995 6.968 0 3.923 1.479 7.032 5.016 7.032 3.602 0 4.91-3.43 4.91-7.032ZM20.44 17.9c0-3.281.987-4.717 2.359-4.717 1.587 0 2.4 1.5 2.4 4.759 0 3.131-.707 4.824-2.337 4.824S20.44 20.948 20.44 17.9ZM15.5 32.267a14.481 14.481 0 0 1 0-28.534.6.6 0 0 0 .5-.585V2.1a.408.408 0 0 0-.463-.4 16.487 16.487 0 0 0 0 32.608A.408.408 0 0 0 16 33.9v-1.048a.6.6 0 0 0-.5-.585Z" />
                <path d="M14.052 17.475a3.114 3.114 0 0 0 1.761-2.852c0-2.165-1.529-3.623-4.025-3.623a6.385 6.385 0 0 0-3.271.836c-.117.064-.1.107-.1.215v1.972c0 .086.019.128.136.086a5.1 5.1 0 0 1 2.786-.815c1.471 0 2.187.665 2.187 1.672 0 1.072-.812 1.587-2.225 1.587h-.968c-.1 0-.116.064-.116.193V18.7c0 .107.039.15.135.15h1.123c1.664 0 2.516.643 2.516 1.908 0 1.093-.716 1.951-2.516 1.951a5.806 5.806 0 0 1-3.078-.9.111.111 0 0 0-.173.085v2.123c0 .107.019.236.116.278a6.239 6.239 0 0 0 3.215.705c2.652 0 4.839-1.479 4.839-4.181a3.315 3.315 0 0 0-2.342-3.344Z" />
            </svg>
        );
    },
);
