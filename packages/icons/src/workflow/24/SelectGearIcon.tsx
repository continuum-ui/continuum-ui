import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 8h16v6l4 4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h2ZM47.146 34.349h-2.891a8.356 8.356 0 0 0-1.221-2.964l2.059-2.058a.826.826 0 0 0 0-1.168l-1.251-1.251a.826.826 0 0 0-1.168 0l-2.058 2.059a8.366 8.366 0 0 0-2.964-1.221v-2.892a.826.826 0 0 0-.826-.826h-1.652a.826.826 0 0 0-.826.826v2.891a8.366 8.366 0 0 0-2.964 1.221l-2.058-2.059a.826.826 0 0 0-1.168 0l-1.251 1.251a.826.826 0 0 0 0 1.168l2.059 2.058a8.356 8.356 0 0 0-1.221 2.964h-2.891a.826.826 0 0 0-.826.826v1.651a.826.826 0 0 0 .826.826h2.891a8.356 8.356 0 0 0 1.221 2.964l-2.059 2.058a.825.825 0 0 0 0 1.167l1.251 1.251a.826.826 0 0 0 1.168 0l2.058-2.058a8.365 8.365 0 0 0 2.964 1.221v2.891a.826.826 0 0 0 .826.826h1.651a.826.826 0 0 0 .826-.826v-2.89a8.365 8.365 0 0 0 2.964-1.221l2.058 2.058a.826.826 0 0 0 1.168 0l1.251-1.251a.825.825 0 0 0 0-1.167l-2.059-2.058a8.356 8.356 0 0 0 1.221-2.964h2.891a.826.826 0 0 0 .826-.826v-1.652a.826.826 0 0 0-.825-.825ZM36 39.223A3.223 3.223 0 1 1 39.223 36 3.223 3.223 0 0 1 36 39.223Z" />
                <path d="M27.362 24.185 13.155 10.2a.678.678 0 0 0-1.155.479v27.935a.678.678 0 0 0 1.157.48L20 30.758h2.985a15.923 15.923 0 0 1 4.377-6.573Z" />
            </svg>
        );
    },
);
