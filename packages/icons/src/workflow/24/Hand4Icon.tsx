import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const Hand4Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.168 22.945 2.224-12.874A2.859 2.859 0 0 0 32.9 6.482a2.963 2.963 0 0 0-3.069 2.25l-1.613 9.431s-.19 1.362-1.156 1.362c-.6 0-1.178-.3-1.178-1.526V6.857a2.857 2.857 0 1 0-5.714 0V18s.067 1.207-.395 1.381a.753.753 0 0 1-.962-.381c-.983-2.867-3.144-9.353-3.144-9.353A2.965 2.965 0 0 0 12.46 7.6a2.86 2.86 0 0 0-2.251 3.742L14.1 22.661a9.636 9.636 0 0 1 .357 1.537 2.38 2.38 0 0 1-1.071 2.62c-.216.124-1.081-.277-2.055-.811-1.781-1.3-3.606-2.749-3.606-2.749-2.857-1.945-4.619-1.272-5.357-.4-.786.931-.238 2.46.9 3.638l7.319 8.313a52.91 52.91 0 0 0 1.861 2.131 26.186 26.186 0 0 0 2.489 3.723c2 2.19 4.834 3.333 9.047 3.333h.065a13.47 13.47 0 0 0 8.311-2.446A8.547 8.547 0 0 0 35.414 38c.982-2.845 1.8-5.961 2.107-7.336.588-2.647.323-4.976-4.353-7.719Z" />
            </svg>
        );
    },
);
