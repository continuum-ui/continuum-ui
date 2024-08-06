import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const QuickSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M22.686 22.566a5.48 5.48 0 0 0-3.853 1.027 7.907 7.907 0 0 0-2.415 4.216c-.531 1.69-1.163 3.53-2.677 4.45a2.843 2.843 0 0 0-.721.5.641.641 0 0 0-.076.806.887.887 0 0 0 .494.232c4.07.938 9.262 1.25 12.61-1.759a5.4 5.4 0 0 0-1.572-8.989 5.759 5.759 0 0 0-1.79-.483ZM31.151 24.205c6.9-7.844 15.657-18.626 13.363-20.92S32.72 11.692 25.887 19.18a9.586 9.586 0 0 1 5.264 5.025ZM7.8 31.28V26H4v5.28c0 .428.026.849.064 1.268l3.754-.915c-.004-.118-.018-.233-.018-.353ZM4 16.719V22h3.8v-5.281c0-.048.007-.1.007-.144l-3.754-.914c-.026.35-.053.701-.053 1.058ZM20.912 41.051a10.12 10.12 0 0 1-5.824 0L14.02 44.7a13.877 13.877 0 0 0 7.96 0ZM27.262 35.526a10.249 10.249 0 0 1-2.748 3.594L25.65 43a14.024 14.024 0 0 0 5.356-6.558ZM15.088 6.948a10.12 10.12 0 0 1 5.824 0L21.98 3.3a13.877 13.877 0 0 0-7.96 0ZM8.646 12.663a10.251 10.251 0 0 1 2.84-3.784L10.35 5a14.022 14.022 0 0 0-5.427 6.752ZM11.486 39.12a10.249 10.249 0 0 1-2.748-3.594l-3.744.912A14.024 14.024 0 0 0 10.35 43ZM27.025 12.014q1.424-1.539 2.708-2.893A14 14 0 0 0 25.65 5l-1.136 3.879a10.245 10.245 0 0 1 2.511 3.135Z" />
            </svg>
        );
    },
);
