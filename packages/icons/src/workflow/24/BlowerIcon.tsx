import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const BlowerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.013 9.344a8.7 8.7 0 0 0-8.795-2.692c-3.305.783-8.085 5.682-10 9.37-.073 0-.141-.022-.215-.022a7.917 7.917 0 0 0-3.614.9c1.376-5.443 5.3-9.991-.271-13.888C15.655-.11 9.346 4.986 9.346 4.986a8.7 8.7 0 0 0-2.693 8.8c.783 3.3 5.681 8.085 9.369 10 0 .074-.022.142-.022.216a7.917 7.917 0 0 0 .9 3.614c-5.443-1.375-9.991-5.3-13.888.272-3.122 4.459 1.975 10.767 1.975 10.767a8.7 8.7 0 0 0 8.8 2.693c3.305-.783 8.085-5.682 10-9.37.073 0 .141.022.215.022a7.917 7.917 0 0 0 3.614-.9c-1.376 5.443-5.3 9.99.271 13.888 4.46 3.122 10.769-1.974 10.769-1.974a8.7 8.7 0 0 0 2.693-8.8c-.783-3.3-5.681-8.085-9.369-10 0-.074.022-.142.022-.216a7.909 7.909 0 0 0-.9-3.615c5.444 1.376 9.992 5.3 13.889-.271 3.119-4.459-1.978-10.768-1.978-10.768ZM24 28a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
            </svg>
        );
    },
);
