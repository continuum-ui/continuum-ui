import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TestABIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m4.819 21.782-1.308 3.986a.236.236 0 0 1-.262.193H.87c-.143 0-.19-.072-.167-.242L5.6 11.563a3.743 3.743 0 0 0 .214-1.3c0-.1.048-.169.143-.169h3.311c.119 0 .143.024.167.145l5.5 15.509c.024.145 0 .217-.143.217h-2.669a.238.238 0 0 1-.238-.145L10.5 21.782Zm4.925-2.633c-.5-1.594-1.618-4.952-2.094-6.643h-.024c-.381 1.619-1.332 4.445-2.046 6.643ZM17.548 26.879c-.024.1-.071.121-.166.121h-1.975c-.119 0-.143-.048-.119-.145l4.687-17.707c.024-.1.048-.1.143-.1h2c.1 0 .119.024.1.121ZM24 10.331c0-.121.024-.193.143-.217.856-.024 3.021-.072 4.615-.072 4.972 0 5.734 2.657 5.734 4.2a3.789 3.789 0 0 1-1.5 3.14 4.049 4.049 0 0 1 2.284 3.744c0 3.044-2.593 4.88-6.519 4.88-2.07 0-3.687-.024-4.591-.048a.183.183 0 0 1-.166-.19Zm2.831 6.088h1.808a14.445 14.445 0 0 1 2.165.145 2.3 2.3 0 0 0 .9-1.908c0-1.425-1.047-2.126-3-2.126-.761 0-1.38.024-1.879.024Zm0 7.1c.523.024 1.118.048 1.832.048 2.236.024 3.664-.749 3.664-2.367a2.021 2.021 0 0 0-1.713-2.1A6.169 6.169 0 0 0 29 18.931h-2.169Z" />
            </svg>
        );
    },
);
