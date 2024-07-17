import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
isGuestsInputOpen,
closeGuestsInput,
openGuestsInput,
}: DestinationAndDateStepProps){
const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)


function openDatePicker(){
  return setIsDatePickerOpen(true)
}

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <button onClick={openDatePicker}  disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left">
          <Calendar className="size-5 text-zinc-400" />
          <span 
            className=" text-lg text-zinc-400 w-40">
              Quando?
          </span>
        </button>

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
<div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <h2 className="font-lg font-semibold">Confirmar criação da viagem</h2>
      <button>
        <X className="size-5 text-zinc-400" onClick={closeConfirmTripModal} />
      </button>
    </div>

    <p className="text-sm text-zinc-400">
    Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span > nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
    </p>
  </div>

 <h1>hellooooooooooo</h1>
</div>
</div>

        <div className="w-px h-6 bg-zinc-800" />

        {isGuestsInputOpen ? (

<Button onClick={closeGuestsInput} variant="secondary">
<Settings2 className="size-5" />
Alterar local/data
</Button>
        ) : (

<Button onClick={openGuestsInput} variant="primary">
   Continuar
<ArrowRight className="size-5" />
</Button>
          
        )}
      </div>
    )
}