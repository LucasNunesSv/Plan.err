import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import Button from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns"
 
interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    openGuestsInput: () => void
    closeGuestsInput: () => void
}

export default function DestinationAndDateStep({ closeGuestsInput, isGuestsInputOpen, openGuestsInput }: DestinationAndDateStepProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>()
    const defaultClassNames = getDefaultClassNames()
    const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to ? `${format(eventStartAndEndDate.from, "d' de 'LLL")} a ${format(eventStartAndEndDate.to, "d")} de ${format(eventStartAndEndDate.to, "LLL")}` : null


    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
        return setIsDatePickerOpen(false)
    }

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg text-zinc-400 outline-none" />
            </div>

            <button onClick={openDatePicker} className='flex items-center gap-2 text-left w-[240px]' disabled={isGuestsInputOpen}>
                <Calendar className='size-5 text-zinc-400' />
                <span className="text-lg text-zinc-400 w-40 outline-none flex-1" >
                    {displayedDate || "Quando"}
                </span>
            </button>

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
                            today: `border-lime-400`, // Add a border to today's date
                            selected: `bg-lime-400 rounded-full border-lime-400 text-white`, // Highlight the selected day
                        }} />
                    </div>
                </div>
            ) : null}

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestsInputOpen ? (
                <Button onClick={closeGuestsInput} variant="secondary" >
                    Alterar data/local
                    <Settings2 className='size-5 ' />
                </Button>
            ) : (
                <Button onClick={openGuestsInput} variant="primary">
                    Continuar
                    <ArrowRight className='size-5 ' />
                </Button>
            )}
        </div>
    )
}