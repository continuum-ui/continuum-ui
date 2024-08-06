import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ActionsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m25.535 21.338-3.208 3.211 8.785 8.784a1.363 1.363 0 0 0 1.929 0l1.28-1.28a1.363 1.363 0 0 0 0-1.929ZM6.658 19.531l1.452-1.452c.533-.533-.022-1.288-.022-1.288l1.492-1.438a1.363 1.363 0 0 0 1.92-.013l.811-.811 1.562 1.561 3.209-3.209-1.565-1.561.528-.529a1.363 1.363 0 0 0 0-1.929l-.64-.64s1.885-2.116 2.28-2.512c1.665-1.664 5.351-.591 5.521-1.443s-8.183-4.012-12.757.561L5.69 9.588a1.363 1.363 0 0 0 0 1.932l.322.31L4.6 13.3a.907.907 0 0 0-1.3-.035l-1.456 1.452a.682.682 0 0 0 0 .964l3.849 3.85a.681.681 0 0 0 .965 0ZM11.041 30.523c-1.574.566-3.541 1.277-4.9 1.763l1.754-4.9Zm18.2-26.366-22.38 22.38a1.127 1.127 0 0 0-.264.413l-2.124 5.864a.84.84 0 0 0 1.1 1.109l5.894-2.1a1.127 1.127 0 0 0 .42-.267l22.375-22.4a.957.957 0 0 0 .087-1.346l-3.764-3.744a.957.957 0 0 0-1.344.091Z" />
            </svg>
        );
    },
);
