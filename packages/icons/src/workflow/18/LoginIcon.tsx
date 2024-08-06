import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LoginIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.6 30.177a7.9 7.9 0 0 1 7.891-7.889 7.573 7.573 0 0 1 1.951.255l.9-.9c0-.032-.017-.062-.017-.1v-2.221a1.54 1.54 0 0 1 .392-.993A11.746 11.746 0 0 0 25.388 11c0-5.547-2.941-8.646-7.387-8.646s-7.47 3.221-7.47 8.646a11.873 11.873 0 0 0 2.8 7.33 1.54 1.54 0 0 1 .392.993v2.214a1.528 1.528 0 0 1-1.333 1.542c-8.931.777-10.326 6.886-10.326 9.3 0 .268.031 1.321.051 1.584h10.492a7.785 7.785 0 0 1-1.007-3.786Z" />
                <path d="m35.665 20.892-3.942-3.942a.915.915 0 0 0-1.294 0l-8.393 8.393a5.428 5.428 0 0 0-2.547-.654 5.489 5.489 0 1 0 5.489 5.489 5.432 5.432 0 0 0-.64-2.521l4.1-4.1 2.281 2.281a.457.457 0 0 0 .647 0l2.04-2.04-2.6-2.6.751-.751 2.6 2.6 1.506-1.506a.457.457 0 0 0 .002-.649ZM18.9 32.6a1.83 1.83 0 1 1 1.83-1.83 1.83 1.83 0 0 1-1.83 1.83Z" />
            </svg>
        );
    },
);
