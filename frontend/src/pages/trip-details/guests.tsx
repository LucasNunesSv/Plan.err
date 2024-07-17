import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import Button from "../../components/button";

export default function Guests() {

    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Lucas Nunes</span>
                        <span className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">lucas.ns@aluno</span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400 " />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Luan Patrick</span>
                        <span className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">luan.ps@boyf</span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300 " />
                </div>
            </div>
            <Button variant="secondary" size="full">
                <UserCog className='size-5 ' />
                <span>Gerenciar convidados</span>
            </Button>
        </div>
    )
}