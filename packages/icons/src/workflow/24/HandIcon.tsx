import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const HandIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.864 14.109c-1.361-.419-2.859.629-3.492 1.9l-3.921 6.057c-.286.576-1.021 1.112-1.542.886s-.666-.835-.4-1.814l1.885-11.071A2.859 2.859 0 0 0 32.9 6.482a2.964 2.964 0 0 0-3.069 2.25l-1.792 10.323s-.131 1.341-1.2 1.294-.952-1.417-.952-1.417V6.857a2.857 2.857 0 1 0-5.714 0v12.025c0 .755-1.148.736-1.361.116-.983-2.867-3.144-9.353-3.144-9.353A2.965 2.965 0 0 0 12.46 7.6a2.86 2.86 0 0 0-2.251 3.743L14.1 22.661a9.632 9.632 0 0 1 .357 1.537 2.38 2.38 0 0 1-1.071 2.62c-.556.317-5.86-3.742-6.287-3.934-2.483-1.438-4.05-.83-4.731-.022-.786.931-.238 2.46.9 3.638l8.36 9.491a12.751 12.751 0 0 1 1.342 1.833 20.786 20.786 0 0 0 1.968 2.843c2 2.19 4.834 3.333 9.047 3.333 5.318 0 9.264-2.033 10.667-5.333.952-2.762 1.854-6.49 2.286-7.786.282-.848 7.206-12.992 7.206-12.992.767-1.554.456-3.246-1.28-3.78Z" />
            </svg>
        );
    },
);
