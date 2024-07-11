import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InvitedGuestsStepProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void

}

export default function InvitedGuestsStep({emailsToInvite, openConfirmTripModal, openGuestsModal}: InvitedGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button onClick={openGuestsModal} type='button' className='flex items-center gap-2 flex-1 text-left'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailsToInvite.length > 0 ? (
                    <span className="text-lg text-zinc-100 flex-1">{emailsToInvite.length} pessoa(s) convidada(s)</span>
                ) : (
                    <span className="text-lg text-zinc-400 flex-1"> Quem estará na viagem </span>
                )}

            </button>

            <div className='w-px h-6 bg-zinc-800'></div>
            
            <button onClick={openConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar viagem
                <ArrowRight className='size-5 ' />
            </button>
        </div>
    )
}