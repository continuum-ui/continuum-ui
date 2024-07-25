import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PublishPendingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.244 4.424 2.05 17a1.065 1.065 0 0 0-.191 1.978l9.669 4.834ZM20.361 33.627 12.116 29v10.185a.95.95 0 0 0 1.565.725l6.565-5.531c.028-.254.076-.502.115-.752ZM36.05 20.2a15.871 15.871 0 0 1 4.125.56L47.5 6.091 16.128 26.042l5.741 2.895A15.885 15.885 0 0 1 36.05 20.2ZM38.05 28.2v8.149a1 1 0 0 1-.293.707l-3.42 3.42a1 1 0 0 1-1.414 0l-1.336-1.336a1 1 0 0 1 0-1.414l2.17-2.17a1 1 0 0 0 .293-.707V28.2ZM43.056 40.177l2.666 2.666A11.808 11.808 0 0 0 47.77 38h-3.794a8.2 8.2 0 0 1-.92 2.177Z" />
                <path d="M40.241 43.019A8.078 8.078 0 0 1 36.05 44.2a8.185 8.185 0 0 1-2-16.126v-3.793a11.894 11.894 0 0 0 2 23.619 11.765 11.765 0 0 0 6.85-2.225ZM43.974 34h3.8a11.82 11.82 0 0 0-2.029-4.862l-2.682 2.682a8.188 8.188 0 0 1 .911 2.18ZM42.912 26.309a11.814 11.814 0 0 0-4.862-2.029v3.794a8.106 8.106 0 0 1 2.183.915Z" />
            </svg>
        );
    },
);
