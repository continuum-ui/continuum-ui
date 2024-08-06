import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const CampaignEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="16" cy="18" r="4.3" />
                <path d="M4.227 20.311H0A16.172 16.172 0 0 0 13.688 34v-4.228a12.006 12.006 0 0 1-9.461-9.461ZM13.688 6.228V2A16.172 16.172 0 0 0 0 15.688h4.228a12.005 12.005 0 0 1 9.46-9.46ZM27.772 15.688H32A16.172 16.172 0 0 0 18.312 2v4.228a12.005 12.005 0 0 1 9.46 9.46ZM35.738 21.764l-3.506-3.506a.738.738 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.929 28.48a.607.607 0 0 0-.153.256l-2.66 6.63c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.756-2.4 6.634-2.661a.6.6 0 0 0 .252-.151l10.19-10.19a.836.836 0 0 0 .246-.537.743.743 0 0 0-.213-.58Zm-10.97 10.33c-1.314.4-3.928 1.862-5.063 2.2l2.195-5.062Z" />
            </svg>
        );
    },
);
