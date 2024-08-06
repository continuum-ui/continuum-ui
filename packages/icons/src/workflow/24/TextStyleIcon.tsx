import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TextStyleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.112 30.934c.692 3.979 3.523 11.094 10.067 11.094a6.383 6.383 0 0 0 6.8-6.632c0-2.834-1.761-5.306-4.97-7.718l-1.888-1.327c-3.964-2.954-7.488-6.33-7.488-11.335C14.628 7.9 20.606 3.5 28.345 3.5a21.418 21.418 0 0 1 7.11 1.206c1.133.362 1.951.723 2.58.965a91.317 91.317 0 0 0-.377 9.225l-2.2.18c-.566-3.8-2.076-9.164-7.613-9.164a6 6 0 0 0-6.041 6.21c0 2.954 1.762 4.884 5.1 7.175l1.888 1.266c4.341 3.015 7.928 6.331 7.928 11.758 0 7.6-6.8 12.179-15.227 12.179-5.223 0-9.627-2.05-11.452-3.738.063-1.387.063-4.763 0-9.587Z" />
            </svg>
        );
    },
);
