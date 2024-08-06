import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SettingsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 20.7h-2.993a.487.487 0 0 1-.472-.374 14.85 14.85 0 0 0-1.664-4 .485.485 0 0 1 .071-.6l2.119-2.119a2 2 0 0 0 0-2.829l-1.838-1.84a2 2 0 0 0-2.828 0l-2.12 2.12a.485.485 0 0 1-.6.07 14.86 14.86 0 0 0-4-1.663.487.487 0 0 1-.374-.471V6a2 2 0 0 0-2-2H22.7a2 2 0 0 0-2 2v2.994a.487.487 0 0 1-.374.471 14.86 14.86 0 0 0-4 1.663.485.485 0 0 1-.6-.07l-2.12-2.12a2 2 0 0 0-2.828 0l-1.839 1.839a2 2 0 0 0 0 2.829l2.119 2.119a.485.485 0 0 1 .071.6 14.85 14.85 0 0 0-1.664 4 .487.487 0 0 1-.472.374H6a2 2 0 0 0-2 2v2.6a2 2 0 0 0 2 2h2.993a.487.487 0 0 1 .472.373 14.843 14.843 0 0 0 1.664 4.005.485.485 0 0 1-.071.6l-2.119 2.117a2 2 0 0 0 0 2.829l1.838 1.838a2 2 0 0 0 2.829 0l2.119-2.119a.485.485 0 0 1 .6-.071 14.85 14.85 0 0 0 4 1.664.487.487 0 0 1 .374.471V42a2 2 0 0 0 2 2h2.6a2 2 0 0 0 2-2v-2.994a.487.487 0 0 1 .374-.471 14.85 14.85 0 0 0 4-1.664.485.485 0 0 1 .6.071l2.119 2.119a2 2 0 0 0 2.829 0l1.838-1.838a2 2 0 0 0 0-2.829l-2.119-2.119a.485.485 0 0 1-.071-.6 14.843 14.843 0 0 0 1.664-4.005.487.487 0 0 1 .472-.373H42a2 2 0 0 0 2-2V22.7a2 2 0 0 0-2-2ZM24 31.5a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5Z" />
            </svg>
        );
    },
);
