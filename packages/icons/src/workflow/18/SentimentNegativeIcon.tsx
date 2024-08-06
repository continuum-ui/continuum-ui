import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SentimentNegativeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm5.473 6.432c1.657 0 3 1.679 3 3.75s-1.343 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75Zm-11.108.1c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.748 3-3.748Zm14.512 16.11-.942.476a1 1 0 0 1-1.124-.152c-.333-.3-.727-.659-.829-.73a10.487 10.487 0 0 0-5.941-1.736 10.474 10.474 0 0 0-6 1.771c-.124.088-.489.424-.8.717a1 1 0 0 1-1.134.161l-.928-.47a1 1 0 0 1-.29-1.564c.232-.257.442-.483.526-.558a13.008 13.008 0 0 1 8.626-3.057 12.969 12.969 0 0 1 8.729 3.15c.047.043.208.219.4.432a1 1 0 0 1-.293 1.56Z" />
            </svg>
        );
    },
);
