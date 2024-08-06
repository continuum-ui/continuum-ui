import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CollectionEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.9 28.046c.006-.016.016-.03.022-.046H14V18h8v6.582l2-2V18h4.582l1.118-1.123a2.856 2.856 0 0 1 1.978-.833h.023a2.724 2.724 0 0 1 1.941.8L34 17.2V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h15.115ZM24 6h8v10h-8ZM14 6h8v10h-8Zm-2 22H4V18h8Zm0-12H4V6h8Z" />
                <path d="m35.738 21.764-3.506-3.506a.738.738 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.929 28.48a.607.607 0 0 0-.153.256l-2.66 6.63c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.756-2.4 6.634-2.661a.6.6 0 0 0 .252-.151l10.19-10.19a.836.836 0 0 0 .246-.537.743.743 0 0 0-.213-.58Zm-10.97 10.33c-1.314.4-3.928 1.862-5.063 2.2l2.195-5.062Z" />
            </svg>
        );
    },
);
