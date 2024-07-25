import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Branch2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.392 11.8a5.908 5.908 0 1 0-1.275-2.641l-9.623 4.903a6.016 6.016 0 0 0-.908-.846l-.007-.007a5.99 5.99 0 0 0-.99-.6c-.036-.017-.069-.04-.106-.057a5.962 5.962 0 0 0-.994-.343c-.073-.019-.14-.05-.214-.067a6 6 0 1 0 0 11.716c.074-.017.141-.048.214-.067a5.964 5.964 0 0 0 .994-.343c.037-.017.07-.04.107-.058a5.982 5.982 0 0 0 .989-.6l.007-.006a6.016 6.016 0 0 0 .908-.846l9.623 4.903a6.093 6.093 0 1 0 1.275-2.64l-9.552-4.868a5.62 5.62 0 0 0 0-2.665v-.001ZM28 5a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm0 20a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z" />
            </svg>
        );
    },
);
