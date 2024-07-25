import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NamingOrderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8.215 23.155 6.16 29.683a.374.374 0 0 1-.411.317H2.014c-.225 0-.3-.119-.261-.395L9.447 6.414a6.4 6.4 0 0 0 .337-2.135c0-.16.074-.279.224-.279H15.2c.188 0 .224.039.262.237l8.628 25.407c.038.237 0 .356-.224.356h-4.184a.373.373 0 0 1-.373-.237l-2.167-6.608Zm7.732-4.315c-.784-2.612-2.541-8.111-3.288-10.881h-.037c-.6 2.651-2.092 7.281-3.212 10.881ZM25.634 44c-.15 0-.3-.039-.3-.317v-2.652a.875.875 0 0 1 .112-.474l12.963-18.283H25.9c-.188 0-.3-.039-.262-.276l.56-3.681c.038-.237.15-.317.336-.317H43.9c.185 0 .224.08.224.237v2.85a.835.835 0 0 1-.188.555L31.2 39.688h13.373c.185 0 .26.118.185.356l-.6 3.639c-.036.237-.112.317-.335.317Z" />
            </svg>
        );
    },
);
