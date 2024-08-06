import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const VisitShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 8h26v2.71l2 2.213V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h2.154A8.266 8.266 0 0 1 5.4 24H2Z" />
                <path d="M31.722 18.331 26 12l-5.708 6.331A1 1 0 0 0 21.035 20H24v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669ZM4 32l10-.008V22a2 2 0 0 1 2-2h2.233a2.988 2.988 0 0 1 .574-3.008l1.217-1.35c-.174-3.5-2.132-5.463-5.054-5.463-3.062 0-5.147 2.219-5.147 5.956a8.179 8.179 0 0 0 1.928 5.049 1.061 1.061 0 0 1 .27.684v1.525a1.053 1.053 0 0 1-.918 1.062c-6.152.535-7.085 4.879-7.085 6.538Z" />
                <path d="M32 22v10H20V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
