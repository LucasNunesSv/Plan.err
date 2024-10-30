import { X, Calendar, Pin } from "lucide-react"
import Button from "../../components/button"
import TextInput from "../../components/textInput"
import { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"

interface UpdateLocalAndDateModalProps {
    closeUpdateLocalAndDateModal: () => void
}

export default function UpdateLocalAndDateModal({ closeUpdateLocalAndDateModal }: UpdateLocalAndDateModalProps) {

    const { tripId } = useParams()

    const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>()
    const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to ? `${format(eventStartAndEndDate.from, "d' de 'LLL")} a ${format(eventStartAndEndDate.to, "d")} de ${format(eventStartAndEndDate.to, "LLL")}` : null

    async function UpdateLocalAndDate(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const destination = data.get("destination")?.toString()


        if (!destination) {
            return
        }
        if (!eventStartAndEndDate?.from || !eventStartAndEndDate?.to) {
            return
        }

        await api.put(`/trips/${tripId}`, {
            destination: destination,
            starts_at: eventStartAndEndDate.from,
            ends_at: eventStartAndEndDate.to,
        })

        closeDatePicker()

        window.document.location.reload()

    }

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        return setIsDatePickerOpen(false)
    }

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Atualize sua viagem</h2>
                        <button type='button' onClick={closeUpdateLocalAndDateModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Utilize os campos abaixo para alterar ao local ou data da viagem. </p>
                </div>

                <form onSubmit={UpdateLocalAndDate} className='space-y-3'>

                    <TextInput type="text" name='destination' placeholder="Qual o novo destino?">
                        <Pin className='text-zinc-400 size-5' />
                    </TextInput>

                    <TextInput >
                        <button onClick={openDatePicker} className='flex items-center gap-2 text-left w-full'>
                            <Calendar className='size-5 text-zinc-400' />
                            <span className="text-lg text-zinc-400 w-40 outline-none flex-1" >
                                {displayedDate || "Quando"}
                            </span>
                        </button>
                    </TextInput>

                    {isDatePickerOpen ? (
                        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                            <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                                <div className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-lg font-semibold'>Selecione uma data</h2>
                                        <button type='button' onClick={closeDatePicker}>
                                            <X className='size-5 text-zinc-400' />
                                        </button>
                                    </div>
                                </div>
                                <DayPicker selected={eventStartAndEndDate} onSelect={setEventStartAndEndDate} mode="range" classNames={{
                                    today: `border-violet-500`, // Add a border to today's date
                                    selected: `bg-violet-500 rounded-full border-violet-500 text-white`, // Highlight the selected day
                                }} />
                            </div>
                        </div>
                    ) : null}

                    <Button variant="primary" size="full">
                        Atualizar viagem
                    </Button>

                </form>
            </div>
        </div>
    )
}