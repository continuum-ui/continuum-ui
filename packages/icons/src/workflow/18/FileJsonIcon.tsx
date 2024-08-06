import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FileJsonIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm-2.977 3.765a.454.454 0 0 1-.463.445l-1.03.084a.43.43 0 0 0-.456.401v3.083a3.97 3.97 0 0 1-1.201 2.213 4.127 4.127 0 0 1 1.201 2.231v3.09a.44.44 0 0 0 .464.407H15.6a.454.454 0 0 1 .464.445v1.52a.454.454 0 0 1-.464.445h-.553c-2.047 0-3.139-1.72-3.139-3.685v-2.316a1.939 1.939 0 0 0-.957-1.79.38.38 0 0 1 .005-.686 1.913 1.913 0 0 0 .952-1.8c0-.543-.008-.565-.017-2.28-.01-1.97 1.085-3.669 3.139-3.669l.53-.084a.454.454 0 0 1 .462.444Zm9.025 6.573a1.96 1.96 0 0 0-.98 1.79v2.316c0 1.964-1.07 3.685-3.116 3.685h-.597a.454.454 0 0 1-.463-.444v-1.521a.454.454 0 0 1 .463-.445h1.107a.44.44 0 0 0 .464-.408v-3.089a4.127 4.127 0 0 1 1.201-2.231 3.97 3.97 0 0 1-1.201-2.213v-3.083a.43.43 0 0 0-.456-.4h-1.083a.454.454 0 0 1-.463-.445v-1.502a.454.454 0 0 1 .463-.445h.582c2.054 0 3.126 1.699 3.116 3.669-.008 1.715-.017 1.737-.017 2.28a1.933 1.933 0 0 0 .975 1.8.38.38 0 0 1 .005.686Z" />
            </svg>
        );
    },
);
