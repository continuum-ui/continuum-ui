import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LinkPageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 28.355a8.153 8.153 0 0 1-2.074-.531c-.52.52-1.5 1.547-1.713 1.762a4.1 4.1 0 1 1-5.8-5.8L13.6 16.6a4.585 4.585 0 0 1 3.366-1.292 4.061 4.061 0 0 1 2.162.692h3.753a7.1 7.1 0 0 0-1.2-1.622 7.311 7.311 0 0 0-10.26.048l-7.182 7.186a7.176 7.176 0 0 0 10.149 10.149c.216-.216.88-.9 1.612-1.641ZM23.722 6.479a4.1 4.1 0 1 1 5.8 5.8L25.8 16h4.349l1.551-1.547A7.176 7.176 0 0 0 21.547 4.3c-.385.385-4.264 4.222-5.351 5.309a8.3 8.3 0 0 1 3.742.607c.521-.516 3.569-3.522 3.784-3.737Z" />
                <path d="M16 19.25a3.151 3.151 0 0 1-.909-1.3 2.041 2.041 0 0 0-.428.318l-1.636 1.712a7.164 7.164 0 0 0 1.227 1.673A6.165 6.165 0 0 0 16 22.833ZM18 19v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1Zm16 15H20V22h14Z" />
            </svg>
        );
    },
);
