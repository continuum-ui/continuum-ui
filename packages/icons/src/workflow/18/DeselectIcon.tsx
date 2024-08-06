import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DeselectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 18h2v6H4zM6 30v-2H4v3.111a.889.889 0 0 0 .889.889H8v-2ZM12 30h6v2h-6zM30 12h2v6h-2zM31.111 4H28v2h2v2h2V4.889A.889.889 0 0 0 31.111 4ZM18 4h6v2h-6z" />
                <rect
                    height="43.854"
                    rx=".818"
                    ry=".818"
                    transform="rotate(-45 18 18)"
                    width="2.455"
                    x="16.773"
                    y="-3.927"
                />
                <path d="M32 27.437V22h-2v3.437l2 2zM25.436 30H22v2h5.436l-2-2zM4 8.563V14h2v-3.437l-2-2zM10.562 6H14V4H8.562l2 2z" />
            </svg>
        );
    },
);
