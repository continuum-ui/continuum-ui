import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const EditCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm9.7 11.918L16.449 25.167a.732.732 0 0 1-.309.185c-1.076.323-7.141 2.436-7.347 2.483h-.045c-.241 0-.668-.353-.583-.633l2.482-7.342a.738.738 0 0 1 .187-.313L22.082 8.3a1.019 1.019 0 0 1 .69-.3h.028a.905.905 0 0 1 .645.263l4.292 4.292a.911.911 0 0 1 .261.706 1.022 1.022 0 0 1-.298.657Z" />
                <path d="M10.822 25.184c1.025-.306 2.814-1.059 4-1.416l-2.592-2.585Z" />
            </svg>
        );
    },
);
