import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const LinkGlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.133 36.75c-.851.87-1.932 2-2.187 2.252A6.327 6.327 0 0 1 9 30.055l8.214-8.214c2.471-2.471 6.854-2.75 9.325-.279a9.219 9.219 0 0 1 .966 1.115 15.8 15.8 0 0 1 3.991-1.819 10.923 10.923 0 0 0-1.808-2.445 11.281 11.281 0 0 0-15.829.073L5.643 26.7A11.071 11.071 0 0 0 21.3 42.357l.056-.056a15.828 15.828 0 0 1-1.223-5.551Z" />
                <path d="M22.72 27.367a5.542 5.542 0 0 1-1.294-.933 6.42 6.42 0 0 1-1.914-2.508 3.11 3.11 0 0 0-.659.491l-2.524 2.641a11.043 11.043 0 0 0 1.893 2.581 9.517 9.517 0 0 0 2.572 1.816 15.854 15.854 0 0 1 1.926-4.088ZM26.991 12c.8-.8 2.732-2.668 3.063-3A6.327 6.327 0 1 1 39 17.945l-2.291 2.291a15.821 15.821 0 0 1 5.49 1.22l.156-.156A11.071 11.071 0 0 0 26.7 5.643c-.595.595-3.806 3.741-5.482 5.418a12.822 12.822 0 0 1 5.773.939ZM27.919 32.853c-.779-2.817 1.231-4.029 1.033-6.436A11.954 11.954 0 0 0 24.092 36c0 6.777 5.908 10.816 10.081 11.7a5.139 5.139 0 0 0 .777.123c1.488-3.793-1.319-8.024-3.171-10.78-1.542-2.294-2.944-.875-3.86-4.19Z" />
                <path d="M46.984 36.767c-1.2-.456-2.225 1.1-2.315-3.1a4.29 4.29 0 0 1 1.239-2.975 2.3 2.3 0 0 1 .542-.259c-.142-.259-.3-.508-.461-.757-.027.015-.053.033-.081.046-.93.434-1.059.562-1.487 0a1.173 1.173 0 0 1 .257-1.73 11.909 11.909 0 0 0-8.322-3.864l.1.05c1.42.169 2.81 1.212 1.943 2.853a11.4 11.4 0 0 0-3.421-.959c-.574 0 1.173-2.149 1.013-1.963a11.948 11.948 0 0 0-4.92 1.059 6.3 6.3 0 0 0 2.454.539l.007.081c-.908.264.823 3.472.752 3.008.371-1.7 2.687-2.362 3.4-.109a2.783 2.783 0 0 1-.623 1.685c-1.049 1.379-1.262 3.833-1.785 3.205-4.9-2.007-4.362.648-2.754 2.423 2.576 2.842 1.269.291 4.643 1.779 2.714 1.2 5.978 1.48 5.183 2.381-2.411 2.73-1.9 4.539-6.168 7.738a24.628 24.628 0 0 0 1.719-.161 12.1 12.1 0 0 0 9.947-10.711 1.78 1.78 0 0 1-.862-.259Z" />
            </svg>
        );
    },
);
