import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphConfidenceBandsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.9 20.984a1 1 0 0 0 .582-1.814l-1.627-1.162a1 1 0 1 0-1.155 1.629l1.622 1.163a1.009 1.009 0 0 0 .578.184ZM10.277 19.668l1.48-1.346a1 1 0 1 0-1.344-1.48l-1.48 1.346a1 1 0 1 0 1.344 1.48ZM5.838 23.705l1.481-1.346a1 1 0 1 0-1.344-1.48l-1.48 1.346a1 1 0 1 0 1.344 1.48ZM25.836 22a1.012 1.012 0 0 0-.543.279l-9.186 9.186-5.307-7.078a1.013 1.013 0 0 0-.686-.395 1.048 1.048 0 0 0-.756.227L0 32.018v2.6l9.832-8.193 5.368 7.161a1.006 1.006 0 0 0 .73.4.958.958 0 0 0 .777-.291l9.773-9.775L36 22.333v-2.027ZM2.879 26.395a1 1 0 0 0-1.344-1.481L.055 26.26a1.426 1.426 0 0 0-.055.055v1.371a1 1 0 0 0 1.4.055ZM28.105 13.932l1.631-.467a1 1 0 0 0-.551-1.922l-1.734.5a.99.99 0 0 0-.432.254l-.139.139a.923.923 0 0 0 .068 1.346.94.94 0 0 0 .67.26 1.2 1.2 0 0 0 .487-.11Z" />
                <path d="M35.976 0 24.355 4.357a.983.983 0 0 0-.355.229l-7.6 7.6-7.451-1.864a1.007 1.007 0 0 0-.949.264l-8 8v2.828L9.014 12.4l7.451 1.863a1.008 1.008 0 0 0 .949-.263l7.848-7.848L36 2.125V0ZM34.955 9.895l-1.924.551a1 1 0 0 0 .275 1.961.965.965 0 0 0 .275-.039l1.924-.551a.993.993 0 0 0 .495-.323v-1.279a.984.984 0 0 0-1.045-.32ZM19.809 22.332l1.416-1.416a1 1 0 1 0-1.414-1.416l-1.416 1.416a1 1 0 1 0 1.414 1.414ZM24.053 18.088l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414Z" />
            </svg>
        );
    },
);
