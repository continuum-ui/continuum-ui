import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <g>
                    <path d="M16 28V8h8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1.003 1.003 0 0 0-1-1H1a1.003 1.003 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8v20H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.667ZM35.645 20.685l-4.324-4.323a1.08 1.08 0 0 0-.678-.265 1.125 1.125 0 0 0-.696.305L18.711 27.64a.748.748 0 0 0-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.206.206 0 0 0 .046-.005c.207-.048 6.26-2.118 7.344-2.444a.735.735 0 0 0 .31-.187l11.237-11.237a1.03 1.03 0 0 0 .303-.662.916.916 0 0 0-.262-.712ZM18.039 33.973l1.978-5.519 3.54 3.531c-1.62.487-4.118 1.57-5.518 1.988Z" />
                </g>
            </svg>
        );
    },
);
