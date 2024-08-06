import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const ApplicationDeliveryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.9 26.469a3.2 3.2 0 0 1 .31-.469H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v7.028a2.868 2.868 0 0 1 2-.386V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h6.683a3.225 3.225 0 0 1 .217-1.531Z" />
                <path d="m34.08 17.905-2.242.939a9.35 9.35 0 0 0-2.691-2.695l.924-2.258a.862.862 0 0 0-.472-1.125l-1.712-.7a.863.863 0 0 0-1.126.471l-.924 2.258a9.33 9.33 0 0 0-3.808.034l-.94-2.243a.862.862 0 0 0-1.13-.462l-1.592.667a.863.863 0 0 0-.463 1.129l.94 2.243a9.338 9.338 0 0 0-2.695 2.691l-2.257-.924a.862.862 0 0 0-1.126.471l-.7 1.713a.862.862 0 0 0 .471 1.125l2.258.925a9.312 9.312 0 0 0 .034 3.808l-2.243.94a.863.863 0 0 0-.462 1.13l.667 1.592a.862.862 0 0 0 1.13.462l2.242-.939a9.325 9.325 0 0 0 2.691 2.7l-.924 2.257a.862.862 0 0 0 .472 1.126l1.712.7a.863.863 0 0 0 1.126-.471l.924-2.258a9.329 9.329 0 0 0 3.808-.033l.94 2.242a.863.863 0 0 0 1.13.462l1.592-.667a.863.863 0 0 0 .463-1.13l-.94-2.242a9.313 9.313 0 0 0 2.7-2.691l2.257.924a.862.862 0 0 0 1.126-.472l.7-1.712a.862.862 0 0 0-.471-1.125l-2.257-.925a9.33 9.33 0 0 0-.035-3.808l2.243-.94a.863.863 0 0 0 .462-1.13l-.667-1.592a.862.862 0 0 0-1.135-.467Zm-6.9 4.761a3.453 3.453 0 1 1-4.518-1.85 3.451 3.451 0 0 1 4.522 1.85Z" />
            </svg>
        );
    },
);
