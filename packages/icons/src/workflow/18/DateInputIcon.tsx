import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DateInputIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 16.909h1.286a.721.721 0 0 0 .714-.727v-1.455a.721.721 0 0 0-.714-.727h-1.531a2.833 2.833 0 0 0-2.021.852L28 17.272l-1.734-2.42A2.833 2.833 0 0 0 24.245 14h-1.531a.721.721 0 0 0-.714.727v1.455a.721.721 0 0 0 .714.728H24l2 3.151v4.849h-3.286a.721.721 0 0 0-.714.727v1.455a.721.721 0 0 0 .714.727H26v2.121l-2 3.151h-1.286a.721.721 0 0 0-.714.728v1.455a.721.721 0 0 0 .714.727h1.531a2.833 2.833 0 0 0 2.021-.852L28 32.728l1.734 2.42a2.833 2.833 0 0 0 2.021.852h1.531a.721.721 0 0 0 .714-.727v-1.455a.721.721 0 0 0-.714-.728H32l-2-3.15v-2.122h3.286a.721.721 0 0 0 .714-.727v-1.455a.721.721 0 0 0-.714-.727H30V20.06Z" />
                <path d="M34 12h2V7a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H12V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h17v-.182A2.717 2.717 0 0 1 20.706 32H4V8h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h14v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h4Z" />
            </svg>
        );
    },
);
