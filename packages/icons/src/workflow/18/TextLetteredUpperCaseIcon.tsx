import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextLetteredUpperCaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="22" x="14" y="4" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="16" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="28" />
                <path d="M2 12.184c0-.107.015-.138.092-.153.673-.016 1.959-.031 3.26-.031C8.521 12 9.2 13.393 9.2 14.633a2.215 2.215 0 0 1-1.46 2.143v.031a2.361 2.361 0 0 1 1.837 2.311c0 1.9-1.638 2.878-4.424 2.878a82.978 82.978 0 0 1-3.046-.031.122.122 0 0 1-.107-.138Zm2.128 3.842H5.46c1.224 0 1.607-.5 1.607-1.163 0-.827-.551-1.164-1.73-1.164-.6 0-1.071.015-1.209.031Zm0 4.24c.168 0 .52.031 1.148.031 1.286 0 2.051-.337 2.051-1.286 0-.8-.49-1.255-1.852-1.255H4.128ZM10.826 9.846C9.685 6.7 8.453 3.174 7.328.077A.116.116 0 0 0 7.2 0H4.724a.1.1 0 0 0-.108.108 2.764 2.764 0 0 1-.154.955c-.971 2.666-2.28 6.456-3.1 8.768-.031.107 0 .169.123.169h1.852a.167.167 0 0 0 .185-.139L4 8h4l.545 1.892A.138.138 0 0 0 8.7 10h2.034c.107 0 .138-.046.092-.154Zm-4.87-8.028h.016c.256.922 1.19 3.175 1.649 4.431l-3.065.011C5 4.921 5.761 2.7 5.956 1.818ZM7.642 24a5.7 5.7 0 0 1 2.1.313c.075.045.09.075.09.18v1.582c0 .134-.075.134-.135.1a5.045 5.045 0 0 0-1.985-.373 2.982 2.982 0 0 0-3.235 3.168A2.93 2.93 0 0 0 7.7 32.1a6.061 6.061 0 0 0 2.09-.358c.075-.03.119 0 .119.09v1.537c0 .105-.015.164-.119.209A6.15 6.15 0 0 1 7.328 34C4.657 34 2.3 32.522 2.3 29.03 2.3 26.179 4.388 24 7.642 24Z" />
            </svg>
        );
    },
);
