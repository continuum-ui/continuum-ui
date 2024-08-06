import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const PeopleGroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.974 6.752a3.947 3.947 0 1 0-.008-5.6 5.872 5.872 0 0 1 .731 2.8 5.886 5.886 0 0 1-.723 2.8Zm3 2.248h-.449a9.833 9.833 0 0 0-1.352.093 6.961 6.961 0 0 1 2.326 5.36v9.412a2.567 2.567 0 0 1-2.562 2.563h-.371l-.818 8.743.032.34a.562.562 0 0 0 .558.489h4.812a.562.562 0 0 0 .558-.489l1.038-11.082h2.192a.563.563 0 0 0 .563-.562v-9.415C23.5 10.813 20.579 9 16.975 9Z" />
                <path d="M22.474 6.752a3.947 3.947 0 1 0-.008-5.6 5.872 5.872 0 0 1 .731 2.8 5.886 5.886 0 0 1-.723 2.8Zm3 2.248h-.449a9.833 9.833 0 0 0-1.352.093A6.961 6.961 0 0 1 26 14.453v9.412a2.567 2.567 0 0 1-2.562 2.563h-.371l-.818 8.743.032.34a.562.562 0 0 0 .558.489h4.812a.562.562 0 0 0 .558-.489l1.038-11.082h2.192a.563.563 0 0 0 .561-.563v-9.414C32 10.813 29.079 9 25.475 9ZM12.7 3.948A3.948 3.948 0 1 1 8.75 0a3.948 3.948 0 0 1 3.95 3.948ZM8.975 9h-.45C4.921 9 2 10.814 2 14.453v9.413a.562.562 0 0 0 .563.563h2.185L5.78 35.51a.563.563 0 0 0 .558.49h4.812a.562.562 0 0 0 .558-.489l1.038-11.082h2.192a.562.562 0 0 0 .562-.563v-9.413C15.5 10.814 12.579 9 8.975 9Z" />
            </svg>
        );
    },
);
