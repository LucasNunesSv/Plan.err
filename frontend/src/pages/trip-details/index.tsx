import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, User, UserCog, X } from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";

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

                <div className="flex-1 space-y-6 px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
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
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3 ">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Academia em Grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3 ">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    <span className="text-zinc-100">Passeio Ouro Preto</span>
                                    <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-80 space-y-6">
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
                        <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <span>Cadastrar novo link</span>
                            <Plus className='size-5 ' />
                        </button>
                    </div>

                    <div className='w-full h-px bg-zinc-800' />

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
                        <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <UserCog className='size-5 ' />
                            <span>Gerenciar convidados</span>
                        </button>
                    </div>

                </div>

            </main>

            {isCreateActivityModalopen ? (
               <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
            ) : null}

        </div>
    )
}