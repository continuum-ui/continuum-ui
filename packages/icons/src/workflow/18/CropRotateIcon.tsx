import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CropRotateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23 21h3V10.5a.5.5 0 0 0-.5-.5H16v3h7Z" />
                <path d="M28.5 23H13V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V10H6.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H10v12.5a.5.5 0 0 0 .5.5H23v3.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V26h2.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5ZM28.264 3h-.23V.5a.5.5 0 0 0-.5-.5.493.493 0 0 0-.35.147l-4.037 3.537a.5.5 0 0 0 0 .632l4.034 3.537a.493.493 0 0 0 .35.147.5.5 0 0 0 .5-.5V4.958h.23a3.786 3.786 0 0 1 3.781 3.892v.827a.325.325 0 0 0 .326.326h1.3A.326.326 0 0 0 34 9.674v-.827A5.74 5.74 0 0 0 28.264 3ZM8.819 28.147a.493.493 0 0 0-.35-.147.5.5 0 0 0-.5.5v2.541h-.23a3.786 3.786 0 0 1-3.781-3.892v-.827A.325.325 0 0 0 3.629 26h-1.3a.326.326 0 0 0-.329.326v.827A5.74 5.74 0 0 0 7.736 33h.23v2.5a.5.5 0 0 0 .5.5.493.493 0 0 0 .35-.147l4.034-3.537a.5.5 0 0 0 0-.632Z" />
            </svg>
        );
    },
);
