import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BulkEditUsersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.524 33.968a.586.586 0 0 0 .252-.151L35.5 22.994a.835.835 0 0 0 .246-.537.738.738 0 0 0-.213-.577l-3.406-3.5a.732.732 0 0 0-.527-.215h-.022a.837.837 0 0 0-.565.247L20.19 29.229a.612.612 0 0 0-.153.256l-1.928 5.9c-.069.229.28.517.476.517a.247.247 0 0 0 .036 0c.17-.044 5.025-1.67 5.903-1.934Zm-3.365-3.988 2.87 2.864c-1.314.395-3.295 1.229-4.431 1.568ZM9.705 19.809c-8.367.728-9.673 6.45-9.673 8.706 0 .251.029 3.238.048 3.485h16.287l1.018-3.016a3.253 3.253 0 0 1 .824-1.34l6.613-6.612a13.69 13.69 0 0 0-4.566-1.215 1.437 1.437 0 0 1-1.244-1.443v-2.083a1.444 1.444 0 0 1 .366-.93 11 11 0 0 0 2.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.124 11.124 0 0 0 2.622 6.866 1.441 1.441 0 0 1 .368.93v2.074a1.432 1.432 0 0 1-1.244 1.444Z" />
                <path d="M26.557 14.35a12.153 12.153 0 0 0 1.868-6.4c0-4.357-2.569-7.55-6.451-7.55-.232 0-.444.042-.668.062a10.93 10.93 0 0 1 2.975 8.037 13.463 13.463 0 0 1-2.869 8.172v.876a14.944 14.944 0 0 1 5.188 1.705l1.555-1.552c-.256-.046-.509-.1-.781-.124a1.342 1.342 0 0 1-1.16-1.346v-1.014a1.528 1.528 0 0 1 .343-.866Z" />
            </svg>
        );
    },
);
