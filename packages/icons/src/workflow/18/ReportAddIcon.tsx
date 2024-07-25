import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReportAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.084 30H10.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h4.25a12.252 12.252 0 0 1 .334-2H10.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h6.393a12.349 12.349 0 0 1 1.743-2H16.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v6.393a12.269 12.269 0 0 1 2-1.124V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v8.25c.331-.027.662-.05 1-.05s.669.024 1 .05V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h6.769a12.2 12.2 0 0 1-.685-2ZM10 14.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
                <path d="M27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-3.5v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3.5h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3.5v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
