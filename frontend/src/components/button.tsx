import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium justify-center flex items-center gap-2',

    variants: {

        variant: {
            primary: 'bg-violet-500 text-violet-950 hover:bg-violet-400 transition-all',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-all',
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        },

    },

    defaultVariants: {
        variant: 'primary',
        size: 'default',
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export default function Button({ children, variant, size, ...props }: ButtonProps) {

    return (
        <button {...props} className={buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}