import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SelectCircularIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.8 5.46-.654-1.9A16.023 16.023 0 0 0 6 7.428l1.657 1.159A14.014 14.014 0 0 1 11.8 5.46ZM5.608 11.493l-1.657-1.16a15.839 15.839 0 0 0-1.844 5.888h2.017a13.919 13.919 0 0 1 1.484-4.728ZM4.124 19.777H2.1a16.021 16.021 0 0 0 2.145 6.36l1.6-1.206a13.892 13.892 0 0 1-1.721-5.154ZM7.984 27.772l-1.606 1.21a15.869 15.869 0 0 0 5.273 3.7l.59-1.929a14.026 14.026 0 0 1-4.257-2.981ZM18 32a13.978 13.978 0 0 1-2.357-.214l-.59 1.933a15.862 15.862 0 0 0 6.44-.116l-.653-1.893A14 14 0 0 1 18 32ZM24.2 30.539l.653 1.9A16 16 0 0 0 30 28.569l-1.653-1.158a14.038 14.038 0 0 1-4.147 3.128ZM31.874 19.777a13.9 13.9 0 0 1-1.484 4.728l1.656 1.159a15.842 15.842 0 0 0 1.844-5.887ZM31.874 16.221H33.9a16.02 16.02 0 0 0-2.147-6.361l-1.6 1.207a13.887 13.887 0 0 1 1.721 5.154ZM28.013 8.226l1.607-1.211a15.885 15.885 0 0 0-5.274-3.7l-.59 1.93a14.023 14.023 0 0 1 4.257 2.981ZM18 4a14.07 14.07 0 0 1 2.356.213l.591-1.935a15.88 15.88 0 0 0-6.44.117l.653 1.894A14.059 14.059 0 0 1 18 4Z" />
            </svg>
        );
    },
);
