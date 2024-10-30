import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import { ThreeDots } from "react-loader-spinner";
import { format } from "date-fns"
import { DateRange } from "react-day-picker";

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
    setOwnerName: (ownerName: string) => void
    setOwnerEmail: (ownerEmail: string) => void
    destination: string
    eventStartAndEndDate: DateRange | undefined
    isLoading: boolean
}

export default function ConfirmTripModal({ closeConfirmTripModal, createTrip, setOwnerName, setOwnerEmail, destination, eventStartAndEndDate, isLoading }: ConfirmTripModalProps) {

    const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to ? `${format(eventStartAndEndDate.from, "d' de 'LLL")} a ${format(eventStartAndEndDate.to, "d")} de ${format(eventStartAndEndDate.to, "LLL")}` : null

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação da viagem</h2>
                        <button type='button' onClick={closeConfirmTripModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Para concluir a criação da viagem para <span className='text-sm text-zinc-100'>{destination}</span> nas datas de <span className='text-sm text-zinc-100'>{displayedDate}</span> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className='space-y-3'>

                    <TextInput onChange={event => setOwnerName(event.target.value)} type="text" name='name' placeholder="Seu nome completo">
                        <User className='text-zinc-400 size-5' />
                    </TextInput>

                    <TextInput onChange={event => setOwnerEmail(event.target.value)} type="email" name='email' placeholder="Seu email pessoal">
                        <Mail className='text-zinc-400 size-5' />
                    </TextInput>

                    <Button type='submit' variant="primary" size="full">
                        {isLoading ? (
                            <div className="flex justify-center items-center gap-1">
                                <ThreeDots color="#fff" height={34} width={34} />
                            </div>
                        ) : (
                            "Confirmar criação da viagem"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    )
}