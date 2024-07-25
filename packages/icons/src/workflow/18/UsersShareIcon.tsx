import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UsersShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.585 21.839c-.184-.025-.138-.044-.33-.064a1.437 1.437 0 0 1-1.244-1.443v-2.083a1.443 1.443 0 0 1 .367-.93 11 11 0 0 0 2.5-6.866c0-5.2-2.755-8.1-6.919-8.1s-7 3.018-7 8.1a11.12 11.12 0 0 0 2.622 6.865 1.443 1.443 0 0 1 .367.93v2.074A1.431 1.431 0 0 1 9.7 21.767c-8.366.728-9.673 6.45-9.673 8.707 0 .251.029 3.237.048 3.484h12.953a13.334 13.334 0 0 1 7.557-12.119Z" />
                <path d="M21.411 18.625v.875a16.132 16.132 0 0 1 3.407.887c.4-.081.805-.166 1.235-.216v-1.293a2.552 2.552 0 0 1 .161-.794v-.909a1.533 1.533 0 0 1 .342-.867 12.147 12.147 0 0 0 1.869-6.4c0-4.354-2.57-7.552-6.452-7.552-.232 0-.445.042-.668.062a10.93 10.93 0 0 1 2.975 8.037 13.46 13.46 0 0 1-2.869 8.17Z" />
                <path d="M28.053 22.059v-3.181a.636.636 0 0 1 1.086-.45L36 25.877l-6.86 7.449a.636.636 0 0 1-1.086-.45v-3.229a11.687 11.687 0 0 0-11.916 4.632.45.45 0 0 1-.811-.26c-.001-1.919 2.191-11.96 12.726-11.96Z" />
            </svg>
        );
    },
);
