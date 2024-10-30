import { X, Link2, Pen } from "lucide-react"
import Button from "../../components/button"
import TextInput from "../../components/textInput"
import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"

interface CreateLinkProps {
    closeCreateLinkModal: () => void
}

export default function CreateLinkModal({ closeCreateLinkModal }: CreateLinkProps) {

    const {tripId} = useParams()

    async function createLink (event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const title = data.get("title")?.toString()
        const url = data.get("url")?.valueOf()

        await api.post(`/trips/${tripId}/links`, {
            title: title, 
            url: url
        })

        closeCreateLinkModal()

        window.document.location.reload()

    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar link</h2>
                        <button type='button' onClick={closeCreateLinkModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Todos convidados podem visualizar os links. </p>
                </div>

                <form onSubmit={createLink} className='space-y-3'>

                    <TextInput type="text" name='title' placeholder="Digite o título do link">
                        <Pen className='text-zinc-400 size-5' />
                    </TextInput>

                    <TextInput type="text" name='url' placeholder="Digite a URL do link">
                        <Link2 className='text-zinc-400 size-5' />
                    </TextInput>

                    <Button variant="primary" size="full">
                        Salvar link
                    </Button>

                </form>
            </div>
        </div>
    )
}