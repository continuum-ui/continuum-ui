import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextTrackingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.366 6.7c-.432 1.809-1.8 5.807-2.609 8.264h5.3c-.567-1.783-2.123-6.373-2.664-8.264Z" />
                <path d="M35.5 2H.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5h35a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5ZM12.073 21.555a.235.235 0 0 1-.269.189H8.67a.239.239 0 0 1-.269-.161L2.054 4.243C2 4.108 2.054 4 2.215 4h3.107a.187.187 0 0 1 .215.162C8.1 11.266 9.858 16.505 10.345 18.5h.055c.6-2.106 1.945-6.7 4.51-14.287.054-.162.109-.216.243-.216H18.1c.134 0 .215.081.161.243Zm22.423.189h-3.025a.273.273 0 0 1-.271-.161l-1.333-3.839h-6.913l-1.261 3.784a.267.267 0 0 1-.3.216H18.7c-.163 0-.217-.081-.189-.27L24.07 5.648a4.111 4.111 0 0 0 .243-1.459c0-.108.055-.189.162-.189h3.754c.135 0 .163.027.189.162L34.657 21.5c.028.163 0 .244-.157.244ZM32.723 30.15l-3.954-3.963a.432.432 0 0 0-.725.262v2.566H7.956v-2.566a.432.432 0 0 0-.725-.262L3.277 30.15a.5.5 0 0 0 0 .706l3.955 3.972a.432.432 0 0 0 .725-.263V32h20.087v2.565a.432.432 0 0 0 .725.263l3.955-3.972a.5.5 0 0 0-.001-.706Z" />
                <path d="m32.834 30.128-4-4A.49.49 0 0 0 28.5 26a.5.5 0 0 0-.5.5V29H8v-2.5a.5.5 0 0 0-.5-.5.49.49 0 0 0-.331.129l-4 4a.5.5 0 0 0 0 .744l4 4A.49.49 0 0 0 7.5 35a.5.5 0 0 0 .5-.5V32h20v2.5a.5.5 0 0 0 .5.5.49.49 0 0 0 .331-.129l4-4a.5.5 0 0 0 0-.744Z" />
            </svg>
        );
    },
);
