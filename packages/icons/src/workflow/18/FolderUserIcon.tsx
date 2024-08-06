import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const FolderUserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586ZM28.677 28.542v-1.4a.966.966 0 0 1 .246-.623 7.366 7.366 0 0 0 1.675-4.6c0-3.479-1.845-5.424-4.633-5.424s-4.686 2.021-4.686 5.424a7.447 7.447 0 0 0 1.756 4.6.965.965 0 0 1 .246.623v1.389a.958.958 0 0 1-.836.967c-5.6.487-6.439 4.319-6.439 5.83L16 36h20v-.667c0-1.448-.989-5.266-6.49-5.825a.963.963 0 0 1-.833-.966Z" />
                <path d="M19.689 26.959a10.321 10.321 0 0 1-1.41-5.031c0-4.959 3.16-8.424 7.686-8.424 4.564 0 7.633 3.385 7.633 8.424a10.492 10.492 0 0 1-1.361 5.059 10.683 10.683 0 0 1 1.763.692V9a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h11.971a9.048 9.048 0 0 1 4.718-3.041Z" />
            </svg>
        );
    },
);
