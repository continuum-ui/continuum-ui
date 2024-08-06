import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BoxImportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m27.285 4.2-5.563-3.017a1.515 1.515 0 0 0-1.443 0L6.409 8.7a.781.781 0 0 0 0 1.373l5.236 2.827ZM35.591 8.7l-5.149-2.794L14.8 14.615l6.2 3.357 14.591-7.9a.781.781 0 0 0 0-1.372ZM22 20.971v14.4l13.177-7.32a1.6 1.6 0 0 0 .823-1.4V13.193ZM6 13.193v2.664L17.646 27.5a.5.5 0 0 1 0 .707l-3.762 3.762L20 35.371v-14.4Z" />
                <path d="M6 24v-3.328a.5.5 0 0 1 .866-.341L14 28l-7.134 7.669A.5.5 0 0 1 6 35.328V32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
