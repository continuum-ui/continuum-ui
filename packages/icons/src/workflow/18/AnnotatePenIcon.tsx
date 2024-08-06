import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AnnotatePenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.023 4.36A.967.967 0 0 0 27.98 3a.963.963 0 0 0-1.362-.044 1.561 1.561 0 0 0-.118.144l-.011-.014-8.74 8.736.012.016a.721.721 0 0 0-.145.119.993.993 0 1 0 1.524 1.258l.013.013 8.739-8.737-.015-.014a.813.813 0 0 0 .146-.117ZM29.8 5.883c-.72.721-9.537 9.645-9.588 9.7a2.214 2.214 0 0 1-2.362.029l-.767-.725L6.286 25.474a1.5 1.5 0 0 0-.327.48L4.088 32.36a.375.375 0 0 0 .5.491l6.428-1.951a1.5 1.5 0 0 0 .46-.313L33.06 9.079ZM30.814 4.172l3.106 2.956a2.78 2.78 0 0 0-.807-3.228 3.3 3.3 0 0 0-3.22-1.06c-.179.064.065.3.138.375s.735.861.783.957ZM3.723 27.486c-3.053-9.059.3-16.932 8.726-21.509 1.269-.69.268-2.706-1.01-2.012C2.19 8.992-1.077 17.405 2.286 27.5c1.437 4.314 1.437-.014 1.437-.014Z" />
            </svg>
        );
    },
);
