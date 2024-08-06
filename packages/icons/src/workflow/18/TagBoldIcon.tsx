import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TagBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 4.508c0-.212.045-.339.279-.381C7.949 4.085 12.172 4 15.284 4c9.7 0 11.184 4.659 11.184 7.37a6.462 6.462 0 0 1-2.923 5.507A7.114 7.114 0 0 1 28 23.443C28 28.78 22.942 32 15.284 32c-4.038 0-7.195-.042-8.96-.085-.231-.042-.324-.169-.324-.339Zm5.978 11.474h3.359a24.278 24.278 0 0 1 4.021.3 4.89 4.89 0 0 0 1.681-3.91c0-2.922-1.946-4.358-5.568-4.358-1.415 0-2.563.05-3.493.05Zm0 11.971c.979.042 2.09.084 3.424.084 4.176.042 6.843-1.307 6.843-4.133 0-1.73-.888-3.122-3.2-3.669a12.249 12.249 0 0 0-3.023-.3h-4.044Z" />
            </svg>
        );
    },
);
