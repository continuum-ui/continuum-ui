import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const VolumeThreeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.745 12.073H1a1 1 0 0 0-1 1v9.923a1 1 0 0 0 1 1h5.745a1.429 1.429 0 0 1 .93.345l7.131 7.259A.727.727 0 0 0 16 31.029V5a.726.726 0 0 0-1.194-.571l-7.127 7.3a1.437 1.437 0 0 1-.934.344ZM22.04 18a6.936 6.936 0 0 1-1.407 4.192.981.981 0 0 0 .086 1.288l.016.016a.991.991 0 0 0 1.487-.09 8.954 8.954 0 0 0-.027-10.853.991.991 0 0 0-1.484-.087l-.015.016a.982.982 0 0 0-.085 1.292A6.944 6.944 0 0 1 22.041 18Z" />
                <path d="M28.04 18a12.937 12.937 0 0 1-3.115 8.435.972.972 0 0 0 .063 1.317l.014.014a1.003 1.003 0 0 0 1.474-.069 14.98 14.98 0 0 0-.026-19.43 1 1 0 0 0-1.469-.07l-.014.014a.977.977 0 0 0-.066 1.323A12.94 12.94 0 0 1 28.04 18Z" />
                <path d="M34.04 18a18.92 18.92 0 0 1-4.823 12.642 1 1 0 0 0 .024 1.375l.014.015a.98.98 0 0 0 1.422-.023 20.862 20.862 0 0 0 5.306-14.01 20.868 20.868 0 0 0-5.326-14.034.985.985 0 0 0-1.423-.02l-.015.015a.996.996 0 0 0-.021 1.374A18.923 18.923 0 0 1 34.04 18Z" />
            </svg>
        );
    },
);
