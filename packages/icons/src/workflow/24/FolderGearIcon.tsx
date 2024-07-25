import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM20.2 36A15.883 15.883 0 0 1 44 22.214V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h15.38a15.844 15.844 0 0 1-1.18-6Z" />
                <path d="M47.174 34.377h-2.891a8.359 8.359 0 0 0-1.221-2.964l2.059-2.058a.826.826 0 0 0 0-1.168l-1.251-1.251a.826.826 0 0 0-1.168 0l-2.058 2.059a8.362 8.362 0 0 0-2.964-1.221v-2.891a.825.825 0 0 0-.825-.825H35.2a.826.826 0 0 0-.826.825v2.891a8.362 8.362 0 0 0-2.964 1.221l-2.058-2.059a.826.826 0 0 0-1.168 0l-1.251 1.251a.826.826 0 0 0 0 1.168l2.059 2.058a8.358 8.358 0 0 0-1.221 2.964h-2.888a.826.826 0 0 0-.825.826v1.651a.826.826 0 0 0 .825.826h2.891a8.355 8.355 0 0 0 1.221 2.964L26.936 42.7a.825.825 0 0 0 0 1.167l1.251 1.251a.826.826 0 0 0 1.168 0l2.058-2.058a8.361 8.361 0 0 0 2.964 1.221v2.891A.826.826 0 0 0 35.2 48h1.651a.826.826 0 0 0 .825-.826v-2.891a8.361 8.361 0 0 0 2.964-1.221l2.06 2.059a.826.826 0 0 0 1.168 0l1.251-1.251a.825.825 0 0 0 0-1.167l-2.059-2.058a8.356 8.356 0 0 0 1.221-2.964h2.891a.826.826 0 0 0 .828-.827V35.2a.826.826 0 0 0-.826-.823Zm-11.145 4.875a3.223 3.223 0 1 1 3.223-3.223 3.223 3.223 0 0 1-3.223 3.223Z" />
            </svg>
        );
    },
);
