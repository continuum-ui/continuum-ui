import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GlobeRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.108 23.9a50.138 50.138 0 0 0-2.772-4.5c-2.073-3.086-3.958-1.178-5.19-5.636C6.1 9.982 8.8 8.352 8.534 5.116A16.073 16.073 0 0 0 2 18c0 9.112 7.943 14.542 13.554 15.732a6.889 6.889 0 0 0 1.046.168c.03-.077.047-.155.075-.232a12.158 12.158 0 0 1-1.567-9.768Zm16.955-13.382c-.192-.349-.4-.684-.62-1.018-.037.019-.07.044-.109.062-1.25.583-1.423.755-2 0a1.576 1.576 0 0 1 .347-2.326 15.984 15.984 0 0 0-11.655-5.221c2.027.028 4.446 1.53 3.213 3.929.186-.381-4.027-1.29-4.6-1.29-.772 0 1.575-2.889 1.36-2.639a16.085 16.085 0 0 0-6.615 1.423c1.094.706 2.311.46 3.544.764a3.014 3.014 0 0 1 1.1.452 3.711 3.711 0 0 0-1.1-.452c-1.818-.211.88 4.777.777 4.114.5-2.292 3.612-3.176 4.565-.147a3.742 3.742 0 0 1-.837 2.265c-1.411 1.854-1.7 5.154-2.4 4.31-6.591-2.7-5.865.871-3.7 3.258 2.558 2.821 2.273 1.693 3.773 1.713A12.232 12.232 0 0 1 29.672 15v-.133a5.766 5.766 0 0 1 1.666-4 3.1 3.1 0 0 1 .725-.349ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
