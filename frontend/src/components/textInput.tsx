import { ComponentProps, ReactNode } from "react"

interface textInputProps extends ComponentProps<'input'> {
    children: ReactNode
}

export default function TextInput({children, ...props} : textInputProps) {

    return (
        <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            {children}
            <input {...props} className="bg-transparent text-lg text-zinc-400 outline-none flex-1" />
        </div>
    )
}