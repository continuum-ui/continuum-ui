import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const DataUserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M34 28.159V20.27a4.824 4.824 0 0 1-.867.814 9 9 0 0 1-1.557 6.188ZM20.314 27.211a10.349 10.349 0 0 1-1.295-2.949c-.354.008-.7.013-1.02.013-4.936 0-14.212-1.169-16-4V29c0 2.282 4.9 4.2 11.588 4.8a8.4 8.4 0 0 1 6.727-6.589ZM18.685 21.989v-.062c0-4.724 3-8.023 7.285-8.023a6.822 6.822 0 0 1 6.784 5.037A2.551 2.551 0 0 0 34 17v-6.73c-2.447 3.095-11.064 4-16 4s-14.212-1.169-16-4V17c0 2.761 7.163 5 16 5 .231 0 .456-.008.685-.011Z" />
                <path d="M28.677 28.542v-1.4a.966.966 0 0 1 .246-.623 7.366 7.366 0 0 0 1.675-4.6c0-3.479-1.845-5.424-4.633-5.424s-4.686 2.021-4.686 5.424a7.447 7.447 0 0 0 1.756 4.6.965.965 0 0 1 .246.623v1.389a.958.958 0 0 1-.836.967c-5.6.487-6.439 4.319-6.439 5.83L16 36h20v-.667c0-1.448-.989-5.266-6.49-5.825a.963.963 0 0 1-.833-.966Z" />
            </svg>
        );
    },
);
