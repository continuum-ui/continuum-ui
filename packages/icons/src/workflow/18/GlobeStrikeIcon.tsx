import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GlobeStrikeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.146 13.769a6.06 6.06 0 0 1-.21-1.883L4.509 9.458A16.017 16.017 0 0 0 2 18c0 9.112 7.943 14.542 13.554 15.732a6.889 6.889 0 0 0 1.046.168c2-5.1-1.772-10.789-4.263-14.494-2.074-3.088-3.959-1.179-5.191-5.637ZM18.249 34c.478-.013 2-.165 2.311-.216a15.607 15.607 0 0 0 5.959-2.316l-3.086-3.086A17.565 17.565 0 0 1 18.249 34Zm14.532-14.969c-1.611-.613-2.992 1.475-3.114-4.164a5.766 5.766 0 0 1 1.666-4 3.1 3.1 0 0 1 .73-.349c-.192-.349-.4-.684-.62-1.018-.037.019-.07.044-.109.062-1.25.583-1.423.755-2 0a1.576 1.576 0 0 1 .347-2.326 15.984 15.984 0 0 0-11.655-5.221c2.027.028 4.446 1.53 3.213 3.929.186-.381-4.027-1.29-4.6-1.29-.772 0 1.575-2.889 1.36-2.639a16.085 16.085 0 0 0-6.615 1.423c1.094.706 2.311.46 3.544.764a3.014 3.014 0 0 1 1.1.452 3.711 3.711 0 0 0-1.1-.452c-1.818-.211.88 4.777.777 4.114.5-2.292 3.612-3.176 4.565-.147a3.742 3.742 0 0 1-.837 2.265 10.193 10.193 0 0 0-1.314 2.737l13.336 13.335a15.869 15.869 0 0 0 2.48-7.123 2.393 2.393 0 0 1-1.154-.352Z" />
                <rect
                    height="42.243"
                    rx=".509"
                    ry=".509"
                    transform="rotate(-45 18.065 18.065)"
                    width="3"
                    x="16.565"
                    y="-3.056"
                />
            </svg>
        );
    },
);
