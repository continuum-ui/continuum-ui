import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExtensionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 8h-2V1.215a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V8h-6V1.215a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V8h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.035v5.5a4.5 4.5 0 0 0 4.5 4.5H22.5v3A5.312 5.312 0 0 1 12 27V11.536a5.445 5.445 0 0 0-4.6-5.5 5.2 5.2 0 0 0-5.491 3.276.767.767 0 0 0 .395.995l1.289.554a.783.783 0 0 0 1.048-.4A2.251 2.251 0 0 1 9 11.25V27a8.287 8.287 0 0 0 16.5 0v-3h1.938a4.5 4.5 0 0 0 4.5-4.5V14H32a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
