import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const QuickSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.333 17.814a4.468 4.468 0 0 0-3.14.838 6.435 6.435 0 0 0-1.968 3.436c-.433 1.378-.948 2.877-2.182 3.627a2.28 2.28 0 0 0-.588.41.524.524 0 0 0-.062.657.729.729 0 0 0 .4.189c3.317.764 7.549 1.018 10.278-1.434a4.4 4.4 0 0 0-1.281-7.327 4.714 4.714 0 0 0-1.457-.396ZM22.937 19.527c5.707-6.49 12.954-15.41 11.056-17.308S24.235 9.174 18.582 15.37a7.93 7.93 0 0 1 4.355 4.157ZM7.469 5.954l-.6-2.037A11.153 11.153 0 0 0 3.064 8.39l1.985.483a9.007 9.007 0 0 1 2.42-2.919ZM4 13c0-.242.052-.469.071-.706l-1.988-.484A11.163 11.163 0 0 0 2 13.111v3.111h2ZM4 23v-3.222H2v3.111a11.167 11.167 0 0 0 .11 1.483l1.98-.483A8.717 8.717 0 0 1 4 23ZM5.14 27.293l-1.994.486a11.151 11.151 0 0 0 3.726 4.3l.6-2.038a8.979 8.979 0 0 1-2.332-2.748ZM13 32a8.87 8.87 0 0 1-2.3-.336l-.563 1.921a10.864 10.864 0 0 0 5.948 0L15.5 31.6a8.868 8.868 0 0 1-2.5.4ZM20.886 27.245A8.991 8.991 0 0 1 18.71 29.9l.64 2.185a11.154 11.154 0 0 0 3.727-4.3ZM20.942 8.856q.805-.869 1.554-1.66a11.1 11.1 0 0 0-3.146-3.279L18.71 6.1a8.98 8.98 0 0 1 2.232 2.756ZM13 4a8.867 8.867 0 0 1 2.5.4l.581-1.983a10.864 10.864 0 0 0-5.948 0l.562 1.92A8.884 8.884 0 0 1 13 4Z" />
            </svg>
        );
    },
);
