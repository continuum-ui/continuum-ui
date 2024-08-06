import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ReuseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.74 4.308a13.767 13.767 0 0 0-10.561 6.3l-3.13-1.634a.692.692 0 0 0-.937.3.673.673 0 0 0-.043.523L4.4 17.333a.431.431 0 0 0 .541.283l7.483-2.41a.679.679 0 0 0 .4-.335.69.69 0 0 0-.29-.937l-3.29-1.721A10.316 10.316 0 0 1 19.4 7.857a.863.863 0 0 0 .994-.625l.432-1.683a.859.859 0 0 0-.661-1.065 13.722 13.722 0 0 0-3.425-.176ZM32.912 8.255a.678.678 0 0 0-.449-.273l-7.783-1.3a.436.436 0 0 0-.322.076.43.43 0 0 0-.173.281l-1.2 7.77a.678.678 0 0 0 .117.512.691.691 0 0 0 .968.16l2.892-2.081a10.188 10.188 0 0 1 1.138 3.919 10.317 10.317 0 0 1-2.459 7.481.869.869 0 0 0 .023 1.187l1.222 1.227a.865.865 0 0 0 1.254-.014 13.732 13.732 0 0 0 1.668-15.851l2.948-2.124a.691.691 0 0 0 .156-.97ZM23.765 29.066l-6.028-5.048a.675.675 0 0 0-.5-.164.691.691 0 0 0-.638.746l.3 3.68a10.382 10.382 0 0 1-8.871-6.78.866.866 0 0 0-1.047-.564l-1.665.473a.869.869 0 0 0-.6 1.1 13.821 13.821 0 0 0 12.457 9.255l.283 3.508a.691.691 0 0 0 .749.634.678.678 0 0 0 .465-.242l5.141-5.989a.432.432 0 0 0-.05-.609Z" />
            </svg>
        );
    },
);
