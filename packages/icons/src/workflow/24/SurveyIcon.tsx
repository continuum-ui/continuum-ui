import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SurveyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.052 16.462a5.218 5.218 0 0 1-1.891 4.077c-1.152 1.093-2.245 2.068-2.245 2.954a3.116 3.116 0 0 0 .473 1.625.127.127 0 0 1-.119.207H20.7a.494.494 0 0 1-.384-.119 3.232 3.232 0 0 1-.709-2.038c0-1.389.857-2.275 2.275-3.692.974-.975 1.536-1.595 1.536-2.511 0-1.064-.709-1.8-2.511-1.8a7.517 7.517 0 0 0-3.723.974c-.118.059-.236 0-.236-.118v-2.868c0-.118 0-.236.118-.295a9.373 9.373 0 0 1 4.491-1.034c3.543 0 5.495 2.038 5.495 4.638ZM46.986 28.793l-5.765-5.765a1.111 1.111 0 0 0-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 0 0-.906.426L25.705 36.767a.986.986 0 0 0-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 0 0 .061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 0 0 .414-.249l13.686-13.685a1.375 1.375 0 0 0 .4-.884 1.221 1.221 0 0 0-.346-.948Zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025Z" />
                <path d="M21.036 38H8V8h28v12.815l.562-.561A5.328 5.328 0 0 1 40 18.681V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h14.843Z" />
                <path d="M19.755 29.756a2.068 2.068 0 0 1 4.135 0 1.909 1.909 0 0 1-2.067 2.068 1.938 1.938 0 0 1-2.068-2.068Z" />
            </svg>
        );
    },
);
