import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ScribbleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.965 4.572a.965.965 0 0 0-.043-1.362.963.963 0 0 0-1.362-.044 1.329 1.329 0 0 0-.117.145l-.011-.011-8.739 8.736.012.016a.685.685 0 0 0-.145.119.995.995 0 0 0 1.4 1.4.909.909 0 0 0 .119-.145l.013.013L27.835 4.7l-.015-.013a.855.855 0 0 0 .145-.115ZM29.742 6.1c-.721.721-9.538 9.645-9.589 9.7a2.213 2.213 0 0 1-2.361.029l-.768-.725L6.229 25.686a1.5 1.5 0 0 0-.327.48l-1.871 6.406a.375.375 0 0 0 .495.491l6.433-1.956a1.5 1.5 0 0 0 .46-.313L33 9.291ZM30.757 4.384l3.105 2.956a2.779 2.779 0 0 0-.807-3.233 3.3 3.3 0 0 0-3.22-1.061c-.179.065.064.3.138.375s.736.867.784.963ZM34.074 28.947a10.743 10.743 0 0 0-7.834-.927 19.245 19.245 0 0 0-6.881 3.4c-.8.577-1.684 1.182-2.277.919a2.586 2.586 0 0 1-.877-1.013 8.469 8.469 0 0 0-.6-.857 4.528 4.528 0 0 0-.388-.386L13.78 31.52a2.517 2.517 0 0 1 .279.22 6.748 6.748 0 0 1 .457.662 4.107 4.107 0 0 0 1.766 1.771 2.721 2.721 0 0 0 1.1.228 5.741 5.741 0 0 0 3.156-1.364 17.327 17.327 0 0 1 6.16-3.066 8.879 8.879 0 0 1 6.381.714 1 1 0 0 0 1-1.734Z" />
            </svg>
        );
    },
);
