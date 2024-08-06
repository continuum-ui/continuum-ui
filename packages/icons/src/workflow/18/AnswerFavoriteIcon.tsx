import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AnswerFavoriteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.215 23.5 2.312-4.737a.5.5 0 0 1 .9 0l2.353 4.716 5.22.736a.5.5 0 0 1 .281.851l-3.759 3.7.914 5.191a.5.5 0 0 1-.723.531l-4.677-2.433-4.654 2.473a.5.5 0 0 1-.731-.528l.868-5.2-3.79-3.662a.5.5 0 0 1 .271-.856Z" />
                <path d="M33 2H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h11l3.536 6.839a.5.5 0 0 0 .928 0l.007-.013.054-.323.775-4.642-4.842-4.679a1.989 1.989 0 0 1 .886-3.354A2.59 2.59 0 0 1 18 19.329a2.535 2.535 0 0 1 2.518 1.693l1.694-.254 2.954-6.051a2 2 0 0 1 3.586-.015l3.007 6.025 2.241.315V3a1 1 0 0 0-1-1ZM20.534 7.683c0 2.567-.643 9.216-.757 10.133 0 .092-.039.184-.264.184h-3.032a.24.24 0 0 1-.265-.184c-.075-.855-.682-7.475-.682-10.041v-2.2a.306.306 0 0 1 .189-.336A7.962 7.962 0 0 1 18 4.873a9.114 9.114 0 0 1 2.312.274.367.367 0 0 1 .226.336Z" />
            </svg>
        );
    },
);
