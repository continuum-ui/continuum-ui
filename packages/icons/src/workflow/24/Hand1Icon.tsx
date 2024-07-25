import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Hand1Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M35.715 25.893c-.639-.361-1.318-3.3-3.909-3.3a1.515 1.515 0 0 1-.7-.084c-.161-.1-.578-3-3.412-3a8.742 8.742 0 0 1-1.925-.139 3.817 3.817 0 0 0-3.259-2.152c-.269 0-1.606.3-1.647.3-1.458 0-1.926-1.447-4.2-.912C14.1 17.217 14 20.317 14 21.959a15.112 15.112 0 0 1-.268 2.949 2.134 2.134 0 0 1-1.085 1.524c-.556.317-4.921-3.175-4.921-3.175-2.857-1.945-4.619-1.272-5.357-.4-.786.931-.238 2.46.9 3.638l7.319 8.313C12.483 37.1 18.41 44 23.994 44c5.477 0 9.975-2.6 11.42-6 .982-2.845 1.8-5.961 2.107-7.336a4.3 4.3 0 0 0-1.806-4.771Z" />
            </svg>
        );
    },
);
