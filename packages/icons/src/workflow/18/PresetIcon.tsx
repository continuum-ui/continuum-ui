import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PresetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 14a12 12 0 0 0-23.483-3.483 12.038 12.038 0 0 1 2.3-.457A10 10 0 1 1 25.94 23.185a12.038 12.038 0 0 1-.457 2.3A12 12 0 0 0 34 14Z" />
                <path d="M14 12h2v2h-2zM12 14h2v2h-2zM14 16h2v2h-2zM12 18h2v2h-2zM14 20h2v2h-2zM16 22h2v2h-2zM16 18h2v2h-2zM16 14h2v2h-2zM18 16h2v2h-2zM18 20h2v2h-2z" />
                <path d="M24 25.817V24h-2v2a11.986 11.986 0 0 1-2-.18V24h-2v1.3a11.939 11.939 0 0 1-2-.922V24h-.628A11.886 11.886 0 0 1 14 22.926V22h-.926A12.173 12.173 0 0 1 12 20.628V20h-.381a11.856 11.856 0 0 1-.921-2H12v-2h-1.82a11.986 11.986 0 0 1-.18-2h2v-2h-1.817a12.068 12.068 0 0 1 .334-1.482 12 12 0 1 0 14.966 14.964 12.128 12.128 0 0 1-1.483.335Z" />
                <path d="M20 22h2v2h-2zM22 20h2v2h-2zM20 18h2v2h-2zM22 16h2v2h-2zM20 14h2v2h-2zM18 12h2v2h-2zM26 22h-2v2h1.817A11.881 11.881 0 0 0 26 22ZM25.3 18H24v2h1.82a11.908 11.908 0 0 0-.52-2ZM24 15.372V16h.381a11.785 11.785 0 0 0-.381-.628ZM12 12h2v-2a11.881 11.881 0 0 0-2 .183ZM16 10.18V12h2v-1.3a11.908 11.908 0 0 0-2-.52ZM20 11.619V12h.628a11.785 11.785 0 0 0-.628-.381ZM22 13.074V14h.926a11.9 11.9 0 0 0-.926-.926Z" />
            </svg>
        );
    },
);
