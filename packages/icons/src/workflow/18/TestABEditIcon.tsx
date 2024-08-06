import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const TestABEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m4.819 17.782-1.308 3.986a.236.236 0 0 1-.262.193H.87c-.143 0-.19-.072-.167-.242L5.6 7.563a3.743 3.743 0 0 0 .214-1.3c0-.1.048-.169.143-.169h3.311c.119 0 .143.024.167.145l5.5 15.509c.024.145 0 .217-.143.217h-2.669a.238.238 0 0 1-.238-.145L10.5 17.782Zm4.925-2.633c-.5-1.594-1.618-4.952-2.094-6.643h-.024c-.381 1.619-1.332 4.445-2.046 6.643ZM17.548 22.879c-.024.1-.071.121-.166.121h-1.975c-.119 0-.143-.048-.119-.145l4.687-17.707c.024-.1.048-.1.143-.1h2c.1 0 .119.024.1.121ZM26.831 19.184v-4.253H29a6.171 6.171 0 0 1 1.618.169 2.417 2.417 0 0 1 1.042.548 3.169 3.169 0 0 1 2.279.919l1.261 1.265a4.651 4.651 0 0 0 .078-.7 4.05 4.05 0 0 0-2.284-3.745 3.789 3.789 0 0 0 1.5-3.14c0-1.546-.762-4.2-5.734-4.2-1.594 0-3.759.048-4.615.072-.119.024-.143.1-.143.218v15.431c0 .066.062.1.115.133Zm0-10.631c.5 0 1.118-.024 1.88-.024 1.95 0 3 .7 3 2.126a2.3 2.3 0 0 1-.9 1.908 14.426 14.426 0 0 0-2.165-.145h-1.815Z" />
                <path d="m35.738 21.764-3.506-3.506a.738.738 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.3 29.113a.607.607 0 0 0-.153.256l-2.027 6c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.123-1.764 6-2.028a.6.6 0 0 0 .252-.151l10.821-10.829a.836.836 0 0 0 .246-.537.743.743 0 0 0-.214-.577Zm-11.6 10.963c-1.314.395-3.3 1.229-4.431 1.568l1.56-4.431Z" />
            </svg>
        );
    },
);
