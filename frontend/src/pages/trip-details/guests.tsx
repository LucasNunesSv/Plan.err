import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import GuestsManageModal from "./guests-manage-modal";

interface Participant {
    id: string,
    name: string | null,
    email: string,
    is_confirmed: boolean,
}

export default function Guests() {

    const [participants, setParticipants] = useState<Participant[]>([])
    const { tripId } = useParams()
    const [isGuestsManageModalOpen, setIsGuestsManageModalOpen] = useState(false)

    function openGuestsManageModal () {
        setIsGuestsManageModalOpen(true)
    }

    function closeGuestsManageModal () {
        setIsGuestsManageModalOpen(false)
    }

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])

    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                {participants.map(participant => {
                    return (
                        <div key={participant.id} className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5 flex-1">
                                <span className="block font-medium text-zinc-100">{participant.name}</span>
                                <span className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">{participant.email}</span>
                            </div>
                            {participant.is_confirmed ? (
                                <CircleCheck className="size-5 text-lime-400 " />
                            ) : (
                                <CircleDashed className="size-5 text-zinc-400 " />
                            )}

                        </div>
                    )
                })}
            </div>

            <Button onClick={openGuestsManageModal} variant="secondary" size="full">
                <UserCog className='size-5 ' />
                <span>Gerenciar convidados</span>
            </Button>

            {isGuestsManageModalOpen ? (
                <GuestsManageModal 
                    closeGuestsManageModalModal={closeGuestsManageModal}
                />
            ) : null}

        </div>
    )
}




