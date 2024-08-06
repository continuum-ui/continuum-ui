import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PeopleGroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.613 4.913A4.913 4.913 0 1 1 12.7 0a4.913 4.913 0 0 1 4.913 4.913ZM12.99 12h-.58C7.765 12 4 14.257 4 18.785V30a1.222 1.222 0 0 0 1.243 1.2h2.2l1.37 15.755A1.229 1.229 0 0 0 10.046 48h5.293a1.229 1.229 0 0 0 1.232-1.044L17.952 31.2h2.205A1.222 1.222 0 0 0 21.4 30V18.785c0-4.528-3.765-6.785-8.41-6.785ZM20.593 9.009A4.912 4.912 0 1 0 23.3 0a4.882 4.882 0 0 0-2.725.827 8.811 8.811 0 0 1 1.038 4.087 8.814 8.814 0 0 1-1.02 4.095Zm3 2.991h-.58c-.035 0-.068.006-.1.007a10.1 10.1 0 0 1 2.487 6.778V30a5.214 5.214 0 0 1-3.766 4.988L20.555 47.3a5.456 5.456 0 0 1-.147.652 1.219 1.219 0 0 0 .238.043h5.293a1.228 1.228 0 0 0 1.231-1.044L28.552 31.2h2.205A1.222 1.222 0 0 0 32 30V18.785C32 14.257 28.235 12 23.59 12Z" />
                <path d="M30.593 9.009A4.912 4.912 0 1 0 33.3 0a4.882 4.882 0 0 0-2.725.827 8.811 8.811 0 0 1 1.038 4.087 8.814 8.814 0 0 1-1.02 4.095Zm3 2.991h-.58c-.035 0-.068.006-.1.007a10.1 10.1 0 0 1 2.487 6.778V30a5.214 5.214 0 0 1-3.766 4.988L30.555 47.3a5.456 5.456 0 0 1-.147.652 1.219 1.219 0 0 0 .238.043h5.293a1.228 1.228 0 0 0 1.231-1.044L38.552 31.2h2.205A1.222 1.222 0 0 0 42 30V18.785C42 14.257 38.235 12 33.59 12Z" />
            </svg>
        );
    },
);
