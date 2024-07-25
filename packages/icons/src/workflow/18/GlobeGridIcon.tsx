import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GlobeGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17 0a17 17 0 1 0 17 17A17 17 0 0 0 17 0Zm13.749 16h-5.571a27.12 27.12 0 0 0-.853-6h4.547a13.676 13.676 0 0 1 1.877 6Zm-3.311-8H23.7a14.681 14.681 0 0 0-2.2-4.04A13.864 13.864 0 0 1 27.438 8ZM16 18v6h-4.268a24.81 24.81 0 0 1-.911-6Zm-5.179-2a24.81 24.81 0 0 1 .911-6H16v6ZM18 18h5.179a24.81 24.81 0 0 1-.911 6H18Zm0-2v-6h4.268a24.81 24.81 0 0 1 .911 6Zm3.568-8H18V3.619C19.307 4.158 20.6 5.7 21.568 8ZM16 3.619V8h-3.568C13.4 5.7 14.693 4.158 16 3.619Zm-3.5.341A14.681 14.681 0 0 0 10.305 8H6.562A13.864 13.864 0 0 1 12.5 3.96ZM5.128 10h4.547a27.12 27.12 0 0 0-.853 6H3.251a13.676 13.676 0 0 1 1.877-6Zm-1.877 8h5.571a27.12 27.12 0 0 0 .853 6H5.128a13.676 13.676 0 0 1-1.877-6Zm3.311 8h3.743a14.681 14.681 0 0 0 2.195 4.04A13.864 13.864 0 0 1 6.562 26Zm5.87 0H16v4.381c-1.307-.539-2.6-2.081-3.568-4.381ZM18 30.381V26h3.568c-.968 2.3-2.261 3.842-3.568 4.381Zm3.5-.341A14.681 14.681 0 0 0 23.7 26h3.743a13.864 13.864 0 0 1-5.943 4.04ZM28.872 24h-4.547a27.12 27.12 0 0 0 .853-6h5.571a13.676 13.676 0 0 1-1.877 6Z" />
            </svg>
        );
    },
);
