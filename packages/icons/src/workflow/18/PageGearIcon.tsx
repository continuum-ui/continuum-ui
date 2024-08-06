import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PageGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.925 24.678H32.61a6.69 6.69 0 0 0-.977-2.373l1.648-1.648a.661.661 0 0 0 0-.935l-1-1a.661.661 0 0 0-.935 0L29.7 20.368a6.693 6.693 0 0 0-2.373-.978v-2.314a.661.661 0 0 0-.661-.661h-1.327a.661.661 0 0 0-.661.661v2.315a6.692 6.692 0 0 0-2.373.978l-1.648-1.649a.661.661 0 0 0-.935 0l-1 1a.661.661 0 0 0 0 .935l1.648 1.648a6.69 6.69 0 0 0-.977 2.373h-2.317a.661.661 0 0 0-.661.661v1.322a.661.661 0 0 0 .661.661h2.315a6.69 6.69 0 0 0 .977 2.373l-1.648 1.651a.661.661 0 0 0 0 .935l1 1a.661.661 0 0 0 .935 0l1.648-1.648a6.692 6.692 0 0 0 2.373.977v2.315a.661.661 0 0 0 .661.661h1.322a.661.661 0 0 0 .661-.661V32.61a6.693 6.693 0 0 0 2.373-.977l1.648 1.648a.661.661 0 0 0 .935 0l1-1a.661.661 0 0 0 0-.935L31.632 29.7a6.69 6.69 0 0 0 .977-2.373h2.315a.661.661 0 0 0 .661-.661v-1.327a.661.661 0 0 0-.66-.661ZM26 29.6a3.6 3.6 0 1 1 3.6-3.6 3.6 3.6 0 0 1-3.6 3.6Z" />
                <path d="M14.684 30H4V10h28v5.605a12.069 12.069 0 0 1 2 1.451V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h12.605a12.027 12.027 0 0 1-.921-2Z" />
            </svg>
        );
    },
);
