import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DraftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2zM35.785 21.721l-3.505-3.506a.739.739 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.344 29.069a.608.608 0 0 0-.153.256l-2.027 6c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.123-1.764 6-2.028a.6.6 0 0 0 .252-.151l10.824-10.829A.835.835 0 0 0 36 22.3a.743.743 0 0 0-.215-.579Zm-11.6 10.963c-1.314.395-3.3 1.229-4.43 1.568l1.56-4.431Z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h9.079l1.839-5.443a2.827 2.827 0 0 1 .752-1.207L30 16.127V14Z" />
            </svg>
        );
    },
);
