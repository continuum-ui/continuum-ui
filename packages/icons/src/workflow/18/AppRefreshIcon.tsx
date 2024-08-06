import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AppRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.865 13.889q-.19-.61-.385-1.218-.19-.61-.353-1.176c-.106-.377-.201-.723-.288-1.036h-.021a17.472 17.472 0 0 1-.448 1.71c-.2.641-.404 1.296-.61 1.966q-.31 1.005-.61 1.86h3.377a43.973 43.973 0 0 0-.3-.963l-.362-1.143Z" />
                <path d="M15 27a11.95 11.95 0 0 1 3.33-8.281l-.012-.032h-4.937l-1.004 3.121a.254.254 0 0 1-.258.192H9.62c-.142 0-.193-.078-.15-.235l4.274-12.312c.043-.127.087-.273.129-.438a4.41 4.41 0 0 0 .085-.865.134.134 0 0 1 .15-.15h3.398q.151 0 .171.108l3.073 8.663A11.91 11.91 0 0 1 32 16.1V6.8A6.8 6.8 0 0 0 25.2 0H6.8A6.8 6.8 0 0 0 0 6.8v18.4A6.8 6.8 0 0 0 6.8 32h9.302A11.934 11.934 0 0 1 15 27Z" />
                <path d="M18.393 24.498a8.883 8.883 0 0 1 15.503-3.1l1.25-1.25a.489.489 0 0 1 .35-.148.5.5 0 0 1 .504.501V25.5a.5.5 0 0 1-.5.5h-4.999a.502.502 0 0 1-.501-.504.489.489 0 0 1 .147-.35l1.74-1.74a6.057 6.057 0 0 0-10.597 1.437.977.977 0 0 1-.921.62h-1.25a.757.757 0 0 1-.726-.965ZM35.607 29.503a8.883 8.883 0 0 1-15.503 3.1l-1.25 1.25a.489.489 0 0 1-.35.147.5.5 0 0 1-.504-.5v-5a.5.5 0 0 1 .5-.5h4.999a.502.502 0 0 1 .501.504.489.489 0 0 1-.147.35l-1.74 1.74a6.056 6.056 0 0 0 10.597-1.437.977.977 0 0 1 .921-.62h1.25a.757.757 0 0 1 .726.966Z" />
            </svg>
        );
    },
);
