import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HammerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.591 4.066-5.08 5.08a1.455 1.455 0 0 0 0 2.063l.344.33-1.51 1.573a.968.968 0 0 0-1.392-.041l-1.55 1.55a.727.727 0 0 0 0 1.03l4.109 4.108a.726.726 0 0 0 1.029 0l1.55-1.55c.569-.568-.023-1.374-.023-1.374l1.594-1.535a1.457 1.457 0 0 0 2.046-.013l.866-.867 16.869 16.869a1.455 1.455 0 0 0 2.059 0l1.366-1.366a1.455 1.455 0 0 0 0-2.059L17 11l.565-.565a1.456 1.456 0 0 0 0-2.058l-.684-.684s2.012-2.257 2.434-2.68c1.777-1.777 5.711-.631 5.893-1.541s-8.736-4.287-13.617.594Z" />
            </svg>
        );
    },
);
