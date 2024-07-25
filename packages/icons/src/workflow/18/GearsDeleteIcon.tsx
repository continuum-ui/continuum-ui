import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GearsDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.17 30.392a6.142 6.142 0 0 0 .9-2.179h.8a10.742 10.742 0 0 1 0-2.428h-.8a6.141 6.141 0 0 0-.9-2.179l1.513-1.513a.606.606 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.513 1.513a6.147 6.147 0 0 0-2.178-.9v-2.121a.607.607 0 0 0-.607-.607H8.393a.607.607 0 0 0-.607.607v2.125a6.147 6.147 0 0 0-2.178.9l-1.513-1.516a.607.607 0 0 0-.858 0l-.92.92a.606.606 0 0 0 0 .858l1.513 1.514a6.141 6.141 0 0 0-.9 2.179H.807a.606.606 0 0 0-.606.607v1.214a.607.607 0 0 0 .606.607h2.125a6.142 6.142 0 0 0 .9 2.179l-1.516 1.512a.606.606 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.514-1.514a6.146 6.146 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.127a6.146 6.146 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.606.606 0 0 0 0-.858ZM9 30.164A3.164 3.164 0 1 1 12.164 27 3.164 3.164 0 0 1 9 30.164ZM18.871 19.319a11.206 11.206 0 0 1 4.911-3.043 4.192 4.192 0 1 1 1.88-.389 10.976 10.976 0 0 1 7.8 1.978l.6.243a.864.864 0 0 0 1.127-.474l.653-1.6a.865.865 0 0 0-.474-1.127l-2.8-1.143a8.749 8.749 0 0 0-.012-3.357l2.811-1.182a.865.865 0 0 0 .462-1.132l-.729-1.71a.865.865 0 0 0-1.132-.462L31.157 7.1a8.762 8.762 0 0 0-2.392-2.356l1.143-2.8a.864.864 0 0 0-.473-1.127l-1.6-.653a.865.865 0 0 0-1.127.474l-1.143 2.8a8.763 8.763 0 0 0-3.357.012L21.024.644a.865.865 0 0 0-1.132-.462L18.183.9a.865.865 0 0 0-.462 1.132L18.9 4.843a8.756 8.756 0 0 0-2.356 2.392l-2.8-1.143a.864.864 0 0 0-1.127.474l-.653 1.6a.865.865 0 0 0 .474 1.127l2.8 1.143a8.761 8.761 0 0 0 .012 3.357l-2.811 1.182a.865.865 0 0 0-.461 1.132l.719 1.708a.864.864 0 0 0 1.132.462l2.81-1.182a8.783 8.783 0 0 0 2.232 2.224Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
