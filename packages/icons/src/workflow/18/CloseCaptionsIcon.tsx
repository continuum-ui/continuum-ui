import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CloseCaptionsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.5 6h-27A4.5 4.5 0 0 0 0 10.5v15A4.5 4.5 0 0 0 4.5 30h27a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 31.5 6Zm-14.837 7.612a.809.809 0 0 1-.37.715l-.323.2-.459-.183a5.96 5.96 0 0 0-2.342-.376 3.721 3.721 0 0 0-4.02 4 3.817 3.817 0 0 0 4.061 4.042 6.586 6.586 0 0 0 2.279-.308l.311-.102.381.163a.787.787 0 0 1 .361.691v1.812a.935.935 0 0 1-.57.9 9.648 9.648 0 0 1-3.065.416c-4.657 0-7.667-2.961-7.667-7.544 0-4.55 3.2-7.606 7.972-7.606a7.566 7.566 0 0 1 2.922.4.908.908 0 0 1 .531.848Zm13.5 0a.809.809 0 0 1-.37.715l-.323.2-.459-.183a5.96 5.96 0 0 0-2.342-.376 3.721 3.721 0 0 0-4.02 4 3.817 3.817 0 0 0 4.061 4.042 6.586 6.586 0 0 0 2.279-.308l.311-.102.381.163a.787.787 0 0 1 .361.691v1.812a.935.935 0 0 1-.57.9 9.648 9.648 0 0 1-3.065.416c-4.657 0-7.667-2.961-7.667-7.544 0-4.55 3.205-7.606 7.972-7.606a7.566 7.566 0 0 1 2.922.4.908.908 0 0 1 .531.848Z" />
            </svg>
        );
    },
);
