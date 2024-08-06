import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AppIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.865 15.889q-.19-.61-.385-1.218-.19-.61-.353-1.176c-.106-.377-.201-.723-.288-1.036h-.021a17.472 17.472 0 0 1-.448 1.71c-.2.641-.404 1.296-.61 1.966q-.31 1.005-.61 1.86h3.377a43.973 43.973 0 0 0-.3-.963l-.362-1.143Z" />
                <path d="M27.2 2H8.8A6.8 6.8 0 0 0 2 8.8v18.4A6.8 6.8 0 0 0 8.8 34h18.4a6.8 6.8 0 0 0 6.8-6.8V8.8A6.8 6.8 0 0 0 27.2 2Zm-2.8 22h-2.778a.195.195 0 0 1-.212-.148l-1.092-3.165h-4.937l-1.004 3.121a.254.254 0 0 1-.258.192H11.62c-.142 0-.193-.078-.15-.235l4.274-12.312c.043-.127.087-.273.129-.438a4.41 4.41 0 0 0 .085-.865.134.134 0 0 1 .15-.15h3.398q.151 0 .171.108l4.852 13.68c.042.142 0 .212-.129.212Z" />
            </svg>
        );
    },
);
