import { Plus } from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import ImportantLinks from "./important-links";
import Guests from "./guests";
import Activities from "./activities";
import DestinationAndDateHeader from "./destination-and-date-header";
import Button from "../../components/button";

export default function TripDetails() {

    const [isCreateActivityModalopen, setIsCreateActivityModalopen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalopen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalopen(false)
    }


    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationAndDateHeader />

            <main className="flex gap-16">

                <div className="flex-1 space-y-6 px-6">

                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <Button onClick={openCreateActivityModal} variant="primary">
                            Cadastrar atividade
                            <Plus className='size-5 ' />
                        </Button>
                    </div>

                    <Activities />

                </div>

                <div className="w-80 space-y-6">
                    
                    <ImportantLinks />

                    <div className='w-full h-px bg-zinc-800' />

                    <Guests />

                </div>

            </main>

            {isCreateActivityModalopen ? (
               <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
            ) : null}

        </div>
    )
}