import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";

export default function TripDetails() {
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className="text-lg text-zinc-100">Minas Gerais</span>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />
                        <span className="text-zinc-100">17 a 26 de Agosto</span>
                    </div>
                    <div className='w-px h-6 bg-zinc-800'></div>
                    <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                        Alterar data/local
                        <Settings2 className='size-5 ' />
                    </button>
                </div>
            </div>

            <main className="flex gap-16">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            Cadastrar atividade
                            <Plus className='size-5 ' />
                        </button>
                    </div>

                    <div className="space-y-8">

                        <div className="space-y-2.5 ">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada para este dia </p>
                        </div>

                        <div className="space-y-2.5 ">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada para este dia </p>
                        </div>

                    </div>

                </div>

                <div className="w-80">

                </div>
            </main>

        </div>
    )
}