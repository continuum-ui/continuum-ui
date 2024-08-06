import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ImageProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 4H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 26h-3.456c-1.238-1.822-3.516-3.556-7.63-3.974a1.335 1.335 0 0 1-1.155-1.34v-1.933a1.341 1.341 0 0 1 .34-.863 10.209 10.209 0 0 0 2.323-6.372C24.422 10.695 21.865 8 18 8s-6.5 2.8-6.5 7.517a10.324 10.324 0 0 0 2.434 6.372 1.336 1.336 0 0 1 .341.863v1.925a1.328 1.328 0 0 1-1.159 1.34C8.876 26.388 6.6 28.143 5.4 30H2V6h32Z" />
            </svg>
        );
    },
);
