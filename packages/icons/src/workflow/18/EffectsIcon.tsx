import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EffectsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.534 12h-3.3c-.2 0-.243.078-.363.236L24.2 18.853v-.045l-2.763-6.651c-.041-.118-.081-.157-.242-.157h-9.159l.62-2.688c1.17-5.295 3.6-6.231 5.521-6.231a17.94 17.94 0 0 1 3 .75c.139.046.233-.046.28-.228l.608-2.648c.047-.137-.046-.273-.187-.365a15.965 15.965 0 0 0-3.645-.509c-4.539 0-7.815 2.567-9.359 9.46L8.254 12H3.739a.255.255 0 0 0-.282.229l-.936 2.5-.013.09c.014.018.076 0 .2.183h4.453C6.74 17.054 2.519 32.7 1.537 35.483c-.094.228 0 .365.186.365.375-.045 2.534.138 3.657 0 .233-.045.327-.091.374-.319.982-2.968 3.567-11.947 5.391-20.529h4.782c.1 0 2.038-.025 3.1-.126l2.82 5.623c-2.459 2.7-5.528 6.451-8.068 9.229a.152.152 0 0 0 .081.274h3.461c.2 0 4.888-5.551 6.34-7.39h.039S27.724 30 27.886 30h3.264c.161 0 .242-.118.161-.274-.886-1.878-3.858-6.725-4.987-9.073 2.257-2.426 6.4-6.227 8.331-8.379.122-.117.081-.274-.121-.274Z" />
            </svg>
        );
    },
);
