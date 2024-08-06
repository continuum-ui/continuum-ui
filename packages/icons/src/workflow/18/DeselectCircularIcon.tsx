import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DeselectCircularIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect
                    height="43.854"
                    rx=".818"
                    ry=".818"
                    transform="rotate(-45 18 18)"
                    width="2.455"
                    x="16.772"
                    y="-3.927"
                />
                <path d="M31.569 21.45a13.9 13.9 0 0 1-1.661 3.895l1.448 1.448a15.884 15.884 0 0 0 2.152-4.852ZM29.1 9.463c.132.17.26.345.382.521l1.642-1.143q-.211-.3-.439-.6a15.985 15.985 0 0 0-3.6-3.42l-1.137 1.648A14.009 14.009 0 0 1 29.1 9.463ZM32 17.979h2a15.927 15.927 0 0 0-1.018-5.6l-1.872.7a13.944 13.944 0 0 1 .89 4.9ZM10.657 6.094a13.866 13.866 0 0 1 3.811-1.646l-.5-1.935A15.875 15.875 0 0 0 9.21 4.647ZM22.844 4.862l.69-1.877A16.174 16.174 0 0 0 17.928 2l.007 2a14.166 14.166 0 0 1 4.909.862ZM4.43 14.55a13.929 13.929 0 0 1 1.661-3.9L4.643 9.207a15.9 15.9 0 0 0-2.152 4.852ZM6.9 26.537a14.79 14.79 0 0 1-.382-.521L4.88 27.159q.212.3.439.6a16.027 16.027 0 0 0 3.6 3.42l1.136-1.647A13.982 13.982 0 0 1 6.9 26.537ZM4 18.021H2a15.927 15.927 0 0 0 1.018 5.6l1.873-.7a13.9 13.9 0 0 1-.891-4.9ZM25.343 29.906a13.9 13.9 0 0 1-3.812 1.646l.5 1.935a15.875 15.875 0 0 0 4.754-2.134ZM13.155 31.137l-.69 1.878a16.174 16.174 0 0 0 5.606.985l-.007-2a14.144 14.144 0 0 1-4.909-.863Z" />
            </svg>
        );
    },
);
