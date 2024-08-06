import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LayersSendToBackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.106 28.069H7.1v-25a.989.989 0 0 0-.986-1h-.993a1 1 0 0 0-1 1l-.006 25H2.108a.5.5 0 0 0-.5.5.49.49 0 0 0 .148.35l3.536 4.034a.5.5 0 0 0 .633 0l3.535-4.03a.489.489 0 0 0 .147-.35.5.5 0 0 0-.501-.504ZM23 3.829 31.682 9 23 14.17 14.318 9ZM23 1a1.2 1.2 0 0 0-.629.178l-11.99 7.141a.8.8 0 0 0 0 1.362l11.99 7.141a1.2 1.2 0 0 0 1.249.006l11.993-7.143a.8.8 0 0 0 .007-1.366L23.629 1.178A1.194 1.194 0 0 0 23 1ZM35.62 26.319 31.726 24 23 29l-8.726-5-3.893 2.319a.8.8 0 0 0 0 1.362l11.99 7.141a1.2 1.2 0 0 0 1.249.006l11.993-7.143a.8.8 0 0 0 .007-1.366Z" />
                <path d="m31.726 15-2.54 1.513L31.682 18 23 23.17 14.318 18l2.5-1.487L14.274 15l-3.893 2.319a.8.8 0 0 0 0 1.362l11.99 7.141a1.2 1.2 0 0 0 1.249.006l11.993-7.143a.8.8 0 0 0 .007-1.366Z" />
            </svg>
        );
    },
);
