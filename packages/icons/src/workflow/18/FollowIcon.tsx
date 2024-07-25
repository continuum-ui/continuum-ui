import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FollowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m14.088 28.9-.758.1a2.9 2.9 0 0 1-3.252-2.506l-.3-2.725 6.516-.845.3 2.725a2.9 2.9 0 0 1-2.506 3.251ZM11.945 1.338C10.27-.615 8.4-.8 7.073 3.308c-1.96 8.7-.44 12.21 2.322 17.92l6.516-.845c-.7-5.394.644-7.815.362-9.986a17.567 17.567 0 0 0-4.328-9.059ZM21.373 35.832l.754.127a2.9 2.9 0 0 0 3.346-2.38l.4-2.659-6.473-1.093-.4 2.659a2.9 2.9 0 0 0 2.373 3.346Zm3.2-27.462c1.749-1.888 3.628-2 4.794 2.155 1.626 8.767-.027 12.218-3.006 17.818l-6.485-1.093c.9-5.363-.344-7.834.02-9.992a17.569 17.569 0 0 1 4.672-8.888Z" />
            </svg>
        );
    },
);
