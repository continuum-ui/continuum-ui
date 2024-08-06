import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SpellcheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.614 11.344-1.455-1.133a1 1 0 0 0-1.4.175L17.124 27.9l-6.647-6.61a1 1 0 0 0-1.414 0l-1.325 1.325a1 1 0 0 0 0 1.414l8.926 8.9a1 1 0 0 0 1.5-.093l15.629-20.09a1 1 0 0 0-.179-1.402Z" />
                <path d="M28.977 6.887a4.8 4.8 0 0 0-1.784-.239 4.776 4.776 0 0 0-5.048 5.065A4.759 4.759 0 0 0 24 15.814l1.072-1.377a3.414 3.414 0 0 1-1.128-2.785 3.121 3.121 0 0 1 3.237-3.447 4.15 4.15 0 0 1 1.769.316c.059.014.119.014.119-.105V7.053a.161.161 0 0 0-.092-.166Zm-9.741 4.42a2.357 2.357 0 0 0 .944-1.963c0-.959-.494-2.576-3.461-2.576-.975 0-2.248.029-2.727.045-.076.015-.09.06-.09.134v9.516a.115.115 0 0 0 .09.119c.539.016 1.514.029 2.682.029 2.4.016 3.986-1.123 3.986-3a2.439 2.439 0 0 0-1.424-2.304ZM15.6 8.281c.283 0 .644-.015 1.078-.015 1.168 0 1.812.435 1.812 1.318a1.4 1.4 0 0 1-.568 1.215 10.977 10.977 0 0 0-1.26-.076H15.6Zm1.033 6.862c-.4 0-.719-.014-1.033-.03v-2.892h1.242a3.848 3.848 0 0 1 .975.105 1.281 1.281 0 0 1 1.048 1.334c-.004 1.033-.902 1.483-2.236 1.483ZM9.152 6.8H7.145c-.061 0-.09.045-.09.105a2.093 2.093 0 0 1-.119.78l-2.864 8.762c-.029.09 0 .135.09.135H5.6a.145.145 0 0 0 .15-.105l.779-2.518h3.3l.824 2.533a.132.132 0 0 0 .135.09h1.6c.09 0 .105-.045.09-.119l-3.22-9.576c-.016-.074-.045-.087-.106-.087Zm-2.187 5.59c.42-1.379.959-3.117 1.2-4.121h.014c.256 1.064.929 3.117 1.215 4.121Z" />
            </svg>
        );
    },
);
