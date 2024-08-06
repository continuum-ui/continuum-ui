import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FileKeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M22.821 24.77a1.856 1.856 0 1 0 1.857 1.856 1.855 1.855 0 0 0-1.857-1.856ZM19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm2.154 15.952a4.395 4.395 0 0 1-3.683-3.686 4.49 4.49 0 0 1 .048-1.569L15.4 22.509v-1.957h-2.363a.339.339 0 0 1-.338-.337v-2.362h-2.361a.338.338 0 0 1-.338-.337v-3.374a.338.338 0 0 1 .338-.337h1.546a.349.349 0 0 1 .239.1l7.766 7.766a4.342 4.342 0 0 1 2-.442 4.451 4.451 0 0 1 4.3 4.682 4.387 4.387 0 0 1-5.035 4.041Z" />
            </svg>
        );
    },
);
