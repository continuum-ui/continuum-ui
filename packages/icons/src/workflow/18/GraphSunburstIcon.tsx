import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphSunburstIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.006 15.84h3.329a.494.494 0 0 0 .408-.226 4 4 0 0 1 1.075-1.076.494.494 0 0 0 .226-.408V10.8a.5.5 0 0 0-.648-.479 7.988 7.988 0 0 0-4.87 4.87.5.5 0 0 0 .48.649ZM18.761 25.809a8.073 8.073 0 0 0 7.252-7.25 7.976 7.976 0 0 0-5.283-8.223.505.505 0 0 0-.685.467v3.327a.5.5 0 0 0 .227.411 3.986 3.986 0 1 1-5.528 5.528.5.5 0 0 0-.411-.227h-3.326a.5.5 0 0 0-.467.685 7.976 7.976 0 0 0 8.221 5.282Z" />
                <path d="M20.392 4.248V7.3a.494.494 0 0 0 .384.479 10.017 10.017 0 0 1 7.616 9.712 8.916 8.916 0 0 1-.11 1.323.5.5 0 0 0 .309.542l2.863 1.127a.5.5 0 0 0 .677-.362 13.709 13.709 0 0 0 .261-2.631A14.011 14.011 0 0 0 20.98 3.75a.5.5 0 0 0-.588.498ZM10.018 7.144l.794.794a.492.492 0 0 0 .623.062 11.917 11.917 0 0 1 4.208-1.742.493.493 0 0 0 .4-.481V4.6a.5.5 0 0 0-.59-.5 13.89 13.89 0 0 0-5.376 2.28.5.5 0 0 0-.059.764ZM4.8 15.84h1.047a.493.493 0 0 0 .48-.4 11.9 11.9 0 0 1 1.713-4.049.493.493 0 0 0-.058-.625l-.774-.774a.5.5 0 0 0-.769.066A13.909 13.909 0 0 0 4.3 15.251a.5.5 0 0 0 .5.589ZM7.123 19.84H4.8a.5.5 0 0 0-.5.59 14.02 14.02 0 0 0 11.155 11.154.505.505 0 0 0 .59-.5V28.9a.494.494 0 0 0-.391-.48A10.685 10.685 0 0 1 7.6 20.238a.494.494 0 0 0-.477-.398Zm19.8 4.072a10.667 10.667 0 0 1-6.488 4.506.5.5 0 0 0-.392.481v2.183a.505.505 0 0 0 .59.5 14.018 14.018 0 0 0 9.249-6.3.5.5 0 0 0-.248-.731l-2.116-.833a.5.5 0 0 0-.593.195Z" />
            </svg>
        );
    },
);
