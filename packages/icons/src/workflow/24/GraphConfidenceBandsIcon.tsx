import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const GraphConfidenceBandsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m37.959 16.7-1.922.549a1.5 1.5 0 0 0 .412 2.941 1.451 1.451 0 0 0 .412-.059l1.922-.549a1.5 1.5 0 1 0-.824-2.883ZM30.189 20.246l-1.414 1.414a1.5 1.5 0 1 0 2.125 2.121l1.414-1.414a1.5 1.5 0 0 0-2.121-2.121ZM0 29.01l10.684-10.682 8.953 2.238a1.514 1.514 0 0 0 1.424-.395l9.547-9.547L48 4.1V.9L29.25 7.93a1.476 1.476 0 0 0-.533.344l-9.178 9.176-8.953-2.238a1.5 1.5 0 0 0-1.424.394L0 24.768ZM45.652 14.5l-1.924.549a1.5 1.5 0 0 0 .412 2.943 1.522 1.522 0 0 0 .412-.057l1.924-.549a1.5 1.5 0 0 0-.824-2.887ZM24.533 25.9l-1.416 1.416a1.5 1.5 0 1 0 2.121 2.121l1.416-1.416a1.5 1.5 0 0 0-2.121-2.121ZM20.521 27.941l-1.629-1.162a1.5 1.5 0 0 0-1.742 2.442l1.629 1.162a1.5 1.5 0 1 0 1.742-2.441ZM2.324 36.6A1.5 1.5 0 1 0 .3 34.379l-.3.277v3.668a1.5 1.5 0 0 0 .844-.38ZM48 27.229l-16.023 2.625a1.511 1.511 0 0 0-.814.42l-11 11-6.3-8.394a1.5 1.5 0 0 0-1.025-.59 1.54 1.54 0 0 0-1.135.338L0 42.38v3.907l12.414-10.346 6.386 8.514a1.5 1.5 0 0 0 1.094.6 1.534 1.534 0 0 0 1.166-.436l11.883-11.885L48 30.271Z" />
                <path d="m12.143 23.615-1.48 1.346a1.5 1.5 0 1 0 2.019 2.219l1.481-1.346a1.5 1.5 0 0 0-2.02-2.219ZM6.223 29l-1.479 1.344a1.5 1.5 0 0 0 2.019 2.219l1.479-1.346A1.5 1.5 0 0 0 6.223 29Z" />
            </svg>
        );
    },
);
