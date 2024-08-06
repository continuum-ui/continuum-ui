import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const AssetsModifiedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.014 25.941 14.955 24H4V4h28v5.982a3.189 3.189 0 0 1 1.023.688l.977.977V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h9.968c.017-.018.032-.041.046-.059Z" />
                <path d="m35.645 16.685-4.323-4.323a.911.911 0 0 0-.65-.265h-.029a1.028 1.028 0 0 0-.7.3L14.711 27.639a.748.748 0 0 0-.188.316l-2.443 7.34c-.085.282.344.638.587.638a.206.206 0 0 0 .046 0c.207-.048 6.26-2.118 7.344-2.444a.735.735 0 0 0 .311-.187L35.6 18.059a1.031 1.031 0 0 0 .3-.662.916.916 0 0 0-.255-.712ZM14.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988Z" />
            </svg>
        );
    },
);
