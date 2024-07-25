import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileSpaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.652 19.889A23.3 23.3 0 0 0 17 19a23.3 23.3 0 0 0-6.652.889.5.5 0 0 0-.348.484v7.947a.514.514 0 0 0 .315.469A16.582 16.582 0 0 0 17 29.9a17.163 17.163 0 0 0 6.686-1.111.509.509 0 0 0 .314-.469v-7.947a.5.5 0 0 0-.348-.484Z" />
                <path d="M27.995 7C27.939 3.549 22.272 2.1 17 2.1S6.061 3.549 6.005 7H6v22h.005c.056 3.451 5.723 4.9 10.995 4.9s10.939-1.449 10.995-4.9H28V7ZM17 4.1c5.384 0 9 1.525 9 2.95S22.384 10 17 10 8 8.475 8 7.05s3.616-2.95 9-2.95Zm9 24.95c0 1.425-3.616 2.95-9 2.95s-9-1.525-9-2.95c0-.017.007-.033.008-.05H8V10.093C10.128 11.41 13.643 12 17 12s6.872-.59 9-1.907V29h-.008c.001.017.008.033.008.05Z" />
            </svg>
        );
    },
);
