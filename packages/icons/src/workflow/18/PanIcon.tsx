import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.647 9.806c-.938-.335-1.971.5-2.406 1.524l-2.7 4.846c-.2.461-.7.889-1.062.708s-.46-.668-.278-1.45l1.3-8.858a2.278 2.278 0 0 0-1.714-2.871 2.1 2.1 0 0 0-2.116 1.8l-1.236 8.258s-.09 1.073-.826 1.036-.657-1.134-.657-1.134v-9.66a2.145 2.145 0 0 0-1.968-2.286 2.145 2.145 0 0 0-1.969 2.286v9.62c0 .6-.791.589-.938.093-.677-2.294-2.166-7.483-2.166-7.483A2.053 2.053 0 0 0 10.7 4.6a2.324 2.324 0 0 0-1.554 2.991l2.682 9.057a8.658 8.658 0 0 1 .247 1.229 2.08 2.08 0 0 1-.739 2.1c-.383.254-5.315-2.882-5.315-2.882-1.968-1.555-3.182-1.017-3.691-.317-.542.745-.164 1.968.617 2.91l6.969 6.993a4.155 4.155 0 0 1 .43.7 26.63 26.63 0 0 0 2.054 3.672c1.378 1.752 3.331 2.666 6.234 2.666 3.664 0 6.382-1.626 7.35-4.266.656-2.21 1.277-5.192 1.575-6.23.194-.678 4.965-10.393 4.965-10.393.533-1.242.317-2.597-.877-3.024Z" />
            </svg>
        );
    },
);
