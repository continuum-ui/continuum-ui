import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const MoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 18a.5.5 0 0 0-.113-.316L32 16.029V16h-.033l-2.113-1.853A.49.49 0 0 0 29.5 14a.5.5 0 0 0-.5.5V16h-9V7h1.5a.5.5 0 0 0 .5-.5.489.489 0 0 0-.147-.35L20 4.033V4h-.029l-1.655-1.887a.5.5 0 0 0-.632 0L16.029 4H16v.033l-1.853 2.113A.489.489 0 0 0 14 6.5a.5.5 0 0 0 .5.5H16v9H7v-1.5a.5.5 0 0 0-.5-.5.49.49 0 0 0-.35.147L4.033 16H4v.029l-1.887 1.655a.5.5 0 0 0 0 .632L4 19.971V20h.033l2.113 1.852A.491.491 0 0 0 6.5 22a.5.5 0 0 0 .5-.5V20h9v9h-1.5a.5.5 0 0 0-.5.5.487.487 0 0 0 .147.35L16 31.967V32h.029l1.655 1.887a.5.5 0 0 0 .632 0L19.971 32H20v-.033l1.853-2.114A.487.487 0 0 0 22 29.5a.5.5 0 0 0-.5-.5H20v-9h9v1.5a.5.5 0 0 0 .5.5.491.491 0 0 0 .35-.148L31.967 20H32v-.029l1.887-1.655A.5.5 0 0 0 34 18Z" />
            </svg>
        );
    },
);
