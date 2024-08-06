import * as React from "react";
import { iconVariants } from "@continuum-ui/icons/helpers";
import type { IconProps } from "@continuum-ui/icons/helpers";

export const SpotHealIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.637 4.363a8 8 0 0 0-11.313 0l-8.609 8.608L4.363 32.324a8 8 0 1 0 11.313 11.313l7.93-7.93 20.031-20.031a8 8 0 0 0 0-11.313ZM29.625 20.508a2.934 2.934 0 1 1-2.933 2.934 2.934 2.934 0 0 1 2.933-2.934Zm-5.063-5.062a2.933 2.933 0 1 1-2.933 2.933 2.934 2.934 0 0 1 2.933-2.933ZM24 26.133a2.934 2.934 0 1 1-2.934 2.934A2.934 2.934 0 0 1 24 26.133Zm-5.063-5.062A2.934 2.934 0 1 1 16 24a2.934 2.934 0 0 1 2.933-2.929ZM27.943 2.952a19.454 19.454 0 0 0-.957-.382l-.2-.071-.041-.014-.041-.015-.042-.015-.112-.038-.014-.006-.136-.047h-.014l-.029-.01h-.013l-.03-.01-.041-.013-.043-.014-.058-.019-.042-.013-.057-.018-.057-.017-.116-.044h-.015l-.07-.021h-.016l-.029-.008-.086-.025-.029-.008-.043-.013-.089-.031-.042-.012-.029-.008h-.043l-.031-.009h-.026l-.029-.008h-.015l-.046-.012-.071-.019H25.133l-.033-.047-.028-.006h-.014l-.073-.018-.046-.012-.039-.015-.117-.027-.193-.045-.072-.016-.165-.036h-.016l-.137-.031h-.013l-.316-.061c-.006 0-.154-.029-.376-.066s-.559-.083-.589-.088l-.106-.017-.105-.013s-.28-.033-.29-.033l-.084-.009-.221-.021-.175-.015-.09-.007-.134-.01h-.531c-.009 0-.327-.016-.787-.016h-.228l.047 4h.175a15.163 15.163 0 0 1 5.981 1.232ZM16.618 5.875l-1.011-3.87a19 19 0 0 0-4.49 1.812l-.013.007-.014.008-.014.008-.094.053-.015.009-.013.007-.014.008-.013.008-.08.046-.014.008-.013.008-.053.031-.161.1-.042.025-.131.081-.929.61-.079.056-.025.01-.024.016-.1.074-.014.01q-.381.276-.749.57l2.5 3.122a15.154 15.154 0 0 1 5.605-2.817Zm-8.14 5.41L5.3 8.853q-.464.606-.879 1.249a17.636 17.636 0 0 0-.667 1.117l-.053.1-.041.081-.08.151-.007.014-.007.013-.008.014-.007.014a18.921 18.921 0 0 0-1.644 4.429l3.894.915a14.839 14.839 0 0 1 2.677-5.665ZM6.77 26.664a14.818 14.818 0 0 1-1.37-6.109l-4 .037a18.872 18.872 0 0 0 .772 5.171v.028l.008.027.038.124.008.027.013.031s0 .007.039.124c.011.032.056.176.121.368a13.54 13.54 0 0 0 .381 1.015q.171.422.361.834Z" />
            </svg>
        );
    },
);
