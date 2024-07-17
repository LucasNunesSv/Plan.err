import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";

export default function ImportantLinks() {

    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="https://www.airbnb.com.br" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">https://www.airbnb.com.br/</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 " />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Localizações</span>
                        <a href="https://www.google.com/maps/place/Ouro+Preto,+MG,+35400-000/@-20.391286,-43.5222453,14z/data=!3m1!4b1!4m6!3m5!1s0xa40b1d2c57b55b:0xd984d1131d83d5fc!8m2!3d-20.402211!4d-43.5105574!16zL20vMDF0bGR5?entry=ttu" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">https://www.google.com/maps/place/Ouro+Preto,+MG,+35400-000/@-20.391286,-43.5222453,14z/data=!3m1!4b1!4m6!3m5!1s0xa40b1d2c57b55b:0xd984d1131d83d5fc!8m2!3d-20.402211!4d-43.5105574!16zL20vMDF0bGR5?entry=ttu</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 " />
                </div>
            </div>
            <Button variant="secondary" size="full">
                <span>Cadastrar novo link</span>
                <Plus className='size-5 ' />
            </Button>
        </div>
    )
}