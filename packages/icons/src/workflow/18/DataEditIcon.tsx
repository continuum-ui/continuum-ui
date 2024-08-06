import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M17.776 27.622a3.822 3.822 0 0 1 .891-1.4l2.025-2.026c-.965.055-1.881.083-2.692.083-4.936 0-14.212-1.168-16-4V29c0 2.467 5.726 4.513 13.249 4.921ZM23.154 21.73l5.7-5.7a4.018 4.018 0 0 1 2.689-1.183h.164a3.91 3.91 0 0 1 2.293.742V10.27c-2.447 3.095-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.761 7.164 5 16 5a48.811 48.811 0 0 0 5.154-.27ZM35.738 21.764l-3.506-3.506a.738.738 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.929 28.48a.607.607 0 0 0-.153.256l-2.66 6.63c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.756-2.4 6.634-2.661a.6.6 0 0 0 .252-.151l10.19-10.19a.836.836 0 0 0 .246-.537.743.743 0 0 0-.213-.58Zm-10.97 10.33c-1.314.4-3.928 1.862-5.063 2.2l2.195-5.062Z" />
            </svg>
        );
    },
);
