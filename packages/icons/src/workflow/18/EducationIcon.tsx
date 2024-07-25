import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EducationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.329 24.019a1.5 1.5 0 0 0 1.342 0L30 18.354V22.5c0 3.314-5.372 7.5-12 7.5-3.589 0-7.8-2.348-10-4v-6.485Z" />
                <path d="M34.658 11.88 18.671 3.887a1.5 1.5 0 0 0-1.342 0L1.347 11.878a.753.753 0 0 0 0 1.344l2.752 1.4-.081 13.25a16.038 16.038 0 0 1-.58 4.173L3 33.61c-.195.932.215 1.807 1.167 1.807h1.645c.946 0 1.375-.865 1.188-1.792l-.424-1.537A16.011 16.011 0 0 1 6 27.834V16l10.327-3.995A1.887 1.887 0 0 1 18 11.222c.991 0 1.794.527 1.794 1.178s-.8 1.178-1.794 1.178c-.051 0-.094-.016-.144-.019l-9.3 3.62 8.771 4.041a1.5 1.5 0 0 0 1.337 0l15.99-7.995a.75.75 0 0 0 .004-1.345Z" />
            </svg>
        );
    },
);
