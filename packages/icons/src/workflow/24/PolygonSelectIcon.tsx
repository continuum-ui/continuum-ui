import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PolygonSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M40.519 4.89 29.55 14.031 7.134 8.428a2 2 0 0 0-2.325 2.724l6.388 15a6.259 6.259 0 0 0-1.629 4.411c0 3.464 3.381 6.281 7.536 6.281a8.433 8.433 0 0 0 1.568-.181c.91.805 2.153 2.153.563 3.743A27.552 27.552 0 0 1 14.8 43.5a.494.494 0 0 0-.178.672l1.278 2.264a.5.5 0 0 0 .686.188 30.162 30.162 0 0 0 5.2-3.673 5.9 5.9 0 0 0 2-4.68 5.753 5.753 0 0 0-1.6-3.132c.386-.3.967-.827.967-.827.2.013 2.844-.623 2.844-.623l16.268-3.914A2 2 0 0 0 43.8 27.83V6.426a2 2 0 0 0-3.281-1.536ZM12.713 30.563a1.974 1.974 0 0 1 .031-.341l.04-.17a2.52 2.52 0 0 1 .223-.569 2.714 2.714 0 0 1 .289-.435 3.776 3.776 0 0 1 .666-.637 4.977 4.977 0 0 0 1.3 4.729c.036.035.126.119.261.24l.155.141.013.013c-1.73-.421-2.978-1.594-2.978-2.971Zm8.154 1.554c-.048.046-.1.1-.132.134a3.225 3.225 0 0 1-.86.718 20.575 20.575 0 0 1-2.125-2.063c-.719-1.031-.742-3.272-.16-3.46 1.181-.453 3.905 1.53 3.905 3.117a2.419 2.419 0 0 1-.628 1.554ZM40.2 26.594 25 30.229c-.211-3.526-3.656-6.346-7.9-6.346a16.9 16.9 0 0 0-3.084.525L8.767 12.547l21.683 5.422 9.75-8.125Z" />
            </svg>
        );
    },
);
