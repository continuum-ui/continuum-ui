import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.818 4H2.182A2.1 2.1 0 0 0 0 6v1.387l23.685 17.368a.54.54 0 0 0 .633 0L48 7.387V6a2.1 2.1 0 0 0-2.182-2ZM0 12.161v16.928l13.172-7.27L0 12.161zM21.145 27.667 16.56 24.3 0 33.437V36a2.1 2.1 0 0 0 2.182 2h17.956A16.091 16.091 0 0 1 20 36a15.909 15.909 0 0 1 2.079-7.869 4.4 4.4 0 0 1-.934-.464ZM36 44.58a8.184 8.184 0 0 1-6.229-2.68L33.66 38H24v9.68l3.469-3.48A11.648 11.648 0 0 0 36 48c6.38 0 11.58-5.3 12-12h-3.04A9.186 9.186 0 0 1 36 44.58ZM44.446 22.432 48 18.8v-6.639l-10.773 7.9a15.883 15.883 0 0 1 7.219 2.371ZM36 24c-6.38 0-11.58 5.3-12 12h3.04A9.186 9.186 0 0 1 36 27.42a8.765 8.765 0 0 1 6.32 2.72L38.54 34H48v-9.66l-3.433 3.5A11.565 11.565 0 0 0 36 24Z" />
            </svg>
        );
    },
);
