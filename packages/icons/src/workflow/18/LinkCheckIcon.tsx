import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LinkCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.748 28.057a7.957 7.957 0 0 1-.822-.232c-.52.52-1.5 1.547-1.713 1.762a4.1 4.1 0 1 1-5.8-5.8L13.6 16.6a4.585 4.585 0 0 1 3.366-1.292 3.94 3.94 0 0 1 2.678 1.112 6.533 6.533 0 0 1 .439.511 12.246 12.246 0 0 1 2.553-1.319 6.845 6.845 0 0 0-.951-1.233 7.311 7.311 0 0 0-10.26.047l-7.186 7.186A7.176 7.176 0 0 0 14.388 31.76c.142-.142.478-.485.9-.913a12.248 12.248 0 0 1-.54-2.79ZM23.722 6.479a4.1 4.1 0 1 1 5.8 5.8L27 14.8a12.291 12.291 0 0 1 3.759.59l.938-.937A7.176 7.176 0 0 0 21.547 4.3c-.385.385-4.264 4.222-5.351 5.309a8.3 8.3 0 0 1 3.742.607c.521-.516 3.569-3.522 3.784-3.737Z" />
                <path d="M16.926 20.056a3.579 3.579 0 0 1-.594-.478 4.159 4.159 0 0 1-1.241-1.625 2.053 2.053 0 0 0-.428.318l-1.636 1.712a7.155 7.155 0 0 0 1.227 1.673 6.109 6.109 0 0 0 1.3.97 12.276 12.276 0 0 1 1.372-2.57ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.128a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.004Z" />
            </svg>
        );
    },
);
