import { X, User2, AtSign } from "lucide-react"
import Button from "../../components/button"
import TextInput from "../../components/textInput"
import { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { ThreeDots } from "react-loader-spinner"

interface GuestsManageModalProps {
    closeGuestsManageModalModal: () => void
}

export default function GuestsManageModalModal({ closeGuestsManageModalModal }: GuestsManageModalProps) {

    const {tripId} = useParams()
    const [isLoading, setIsLoading] = useState(false)

    async function inviteGuest (event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        setIsLoading(true)

        const data = new FormData(event.currentTarget)

        // const name = data.get("name")?.toString()
        const email = data.get("email")?.valueOf()

        await api.post(`/trips/${tripId}/invites`, {
            email: email
        })

        closeGuestsManageModalModal()

        setIsLoading(false)

        window.document.location.reload()

    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar link</h2>
                        <button type='button' onClick={closeGuestsManageModalModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Compartilhe esta aventura com seus amigos, familiares ou colegas de viagem </p>
                </div>

                <form onSubmit={inviteGuest} className='space-y-3'>

                    <TextInput type="text" name='name' placeholder="Digite o nome do convidado">
                        <User2 className='text-zinc-400 size-5' />
                    </TextInput>

                    <TextInput type="email" name='email' placeholder="Digite o email do convidado">
                        <AtSign className='text-zinc-400 size-5' />
                    </TextInput>

                    <Button variant="primary" size="full">
                        {isLoading ? (
                            <div className="flex justify-center items-center gap-1">
                                <ThreeDots color="#fff" height={34} width={34} />
                            </div>
                        ) : (
                            "Convidar"
                        )}
                    </Button>

                </form>
            </div>
        </div>
    )
}