import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InviteGuestsModal from './invite-guests-modal'
import ConfirmTripModal from './confirm-trip-modal'
import DestinationAndDateStep from './steps/destination-and-date-step'
import InvitedGuestsStep from './steps/invited-guests-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState(['lucas.ns@aluno'])

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>()

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function addNewEmail(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            alert('Este email ja está na lista de convidados')
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeInvitedEmail(emailToRemove: string) {

        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
        setEmailsToInvite(newEmailList)

    }

    async function createTrip(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        console.log(destination)
        console.log(ownerEmail)
        console.log(ownerName)
        console.log(emailsToInvite)
        console.log(eventStartAndEndDate)

        if(!destination) {
            return
        }
        if(!eventStartAndEndDate?.from || !eventStartAndEndDate?.to){
            return
        }
        if(emailsToInvite.length === 0){
            return
        }
        if(!ownerName || !ownerEmail){
            return
        }

        const response = await api.post("/trips", {
            destination,
            starts_at: eventStartAndEndDate.from,
            ends_at: eventStartAndEndDate.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: ownerEmail
        })

        const {tripId} = response.data

        navigate(`/trips/${tripId}`)

    }

    return (
        <>
            <div className="h-screen flex items-center justify-center bg-pattern bg-center bg-no-repeat">

                <div className="max-w-3xl w-full px-6 text-center space-y-10">

                    <div className='flex flex-col items-center gap-3'>
                        <img src="/logo.svg" alt="plann.er" />
                        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                    </div>

                    <div className='space-y-4'>

                        <DestinationAndDateStep
                            closeGuestsInput={closeGuestsInput}
                            isGuestsInputOpen={isGuestsInputOpen}
                            openGuestsInput={openGuestsInput}
                            setDestination={setDestination}
                            setEventStartAndEndDate={setEventStartAndEndDate}
                            eventStartAndEndDate={eventStartAndEndDate}
                        />

                        {isGuestsInputOpen ? (
                            <InvitedGuestsStep
                                emailsToInvite={emailsToInvite}
                                openConfirmTripModal={openConfirmTripModal}
                                openGuestsModal={openGuestsModal}
                            />
                        ) : null}
                    </div>

                    <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                        com nossos <a className="text-zinc-300" href="#">termos de uso</a> e <a className="text-zinc-300" href="#">políticas de privacidade</a>.</p>
                </div>

                {isGuestsModalOpen ? (
                    <InviteGuestsModal
                        emailsToInvite={emailsToInvite}
                        addNewEmail={addNewEmail}
                        closeGuestsModal={closeGuestsModal}
                        removeInvitedEmail={removeInvitedEmail}
                    />
                ) : null}

                {isConfirmTripModalOpen ? (
                    <ConfirmTripModal
                        setOwnerName={setOwnerName}
                        setOwnerEmail={setOwnerEmail}
                        closeConfirmTripModal={closeConfirmTripModal}
                        createTrip={createTrip} />
                ) : null}

            </div>
        </>
    )
}

export default CreateTripPage
