import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm-4.433 15.225a.257.257 0 0 1-.209.408h-2.744a.257.257 0 0 1-.206-.1l-3.461-4.618 3.461-4.615a.256.256 0 0 1 .206-.1h2.744a.257.257 0 0 1 .209.407l-3.505 4.31Zm2.766 1.844h-1.866a.514.514 0 0 1-.495-.652l3.745-13.412a.515.515 0 0 1 .5-.376h1.863a.514.514 0 0 1 .495.652l-3.747 13.413a.514.514 0 0 1-.494.376Zm7.258-1.539a.26.26 0 0 1-.206.1h-2.743a.257.257 0 0 1-.209-.408l3.505-4.31-3.505-4.31a.257.257 0 0 1 .209-.407h2.744a.259.259 0 0 1 .206.1l3.461 4.615Z" />
            </svg>
        );
    },
);
