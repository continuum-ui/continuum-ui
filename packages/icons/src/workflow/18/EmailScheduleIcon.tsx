import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailScheduleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v1.468l18 13.553L36 4.665v-1.5A1.147 1.147 0 0 0 34.875 2ZM0 7.511v16.684l11.165-8.257L0 7.511zM16.71 20.094l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 0 0 1.125 30h13.959a12.191 12.191 0 0 1 1.708-9.863c-.025-.018-.057-.024-.082-.043ZM27 14.7a12.253 12.253 0 0 1 9 3.935V7.541l-9.577 7.188c.193-.009.382-.029.577-.029ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM27 34a7 7 0 0 1-1-13.929v7.136a.674.674 0 0 0 .2.476l2.9 2.9a.673.673 0 0 0 .953 0l.9-.9a.674.674 0 0 0 0-.953l-2.054-2.054a.675.675 0 0 1-.2-.476v-5.993A7 7 0 0 1 27 34Z" />
            </svg>
        );
    },
);
