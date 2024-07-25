import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.631 21.88-3.506-3.506a.739.739 0 0 0-.527-.215h-.023a.834.834 0 0 0-.564.247L20.189 29.229a.607.607 0 0 0-.153.256l-2.027 6c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.123-1.764 6-2.028a.6.6 0 0 0 .252-.151L35.6 22.994a.836.836 0 0 0 .246-.537.743.743 0 0 0-.215-.577Zm-11.6 10.963c-1.314.395-3.3 1.229-4.431 1.568l1.56-4.431ZM17.775 27.622a3.835 3.835 0 0 1 .891-1.4l5.765-5.764a13.934 13.934 0 0 0-4.255-1 1.431 1.431 0 0 1-1.248-1.444c0-.721.043-1.016.084-2.116a1.441 1.441 0 0 1 .366-.93 10.775 10.775 0 0 0 1.962-3.678 9.908 9.908 0 0 0 .577-3.146 10.792 10.792 0 0 0-.517-3.43A6.358 6.358 0 0 0 14.961 0a6.8 6.8 0 0 0-4.05 1.229 6.031 6.031 0 0 0-1.3 1.33A9.022 9.022 0 0 0 7.963 8.1a9.448 9.448 0 0 0 .276 2.133 10.971 10.971 0 0 0 2.261 4.774 1.444 1.444 0 0 1 .367.93c.031.837.083 1.466.083 2.032a1.431 1.431 0 0 1-1.25 1.444c-8.366.728-9.673 6.45-9.673 8.707 0 .251.048 1.526.048 1.526h16.889Z" />
            </svg>
        );
    },
);
