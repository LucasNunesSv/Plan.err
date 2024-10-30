import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import CreateLinkModal from "./create-link-modal";

interface Link {
    id: string,
    title: string,
    url: string,
}

export default function ImportantLinks() {

    const { tripId } = useParams()
    const [links, setLinks] = useState<Link[]>([])
    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)

    function openCreateLinkModal (){
        setIsLinkModalOpen(true)
    }

    function closeCreateLinkModal (){
        setIsLinkModalOpen(false)
    }

    useEffect(() => {
        api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
    }, [tripId])

    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                {links.map(link => {
                    return (
                        <div key={link.id} className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5 flex-1">
                                <span className="block font-medium text-zinc-100">{link.title}</span>
                                <a href={link.url} className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">{link.url}</a>
                            </div>
                            <Link2 className="size-5 text-zinc-400 " />
                        </div>
                    )
                })}
            </div>
            <Button onClick={openCreateLinkModal} variant="secondary" size="full">
                <span>Cadastrar novo link</span>
                <Plus className='size-5 ' />
            </Button>
            {isLinkModalOpen ? (
               <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
            ) : null}
        </div>
    )
}