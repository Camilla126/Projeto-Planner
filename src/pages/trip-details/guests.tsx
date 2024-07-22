import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect } from "react";

export function Guests(){
    const { tripId } = useParams()
    const [trip, setTrip] = useState<Trip | undefined>()
    
    useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setTrip(response.data.trip))
    }, [tripId])
    

    return(
        <div className="space-y-6">
<h2 className="font-semibold text-xl">Convidados</h2>
<div className="space-y-5">
<div className="flex items-center justify-between gap-4">
    <div className="space-y-1.5">
        <span className="block font-medium text-zinc-100">Camilla carvalho</span>
        <span className="block text-sm text-zinc-400 truncate ">camilla.carvalho@gmail.com</span>
    </div>
    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
</div>
<div className="flex items-center justify-between gap-4">
    <div className="space-y-1.5">
        <span className="block font-medium text-zinc-100">Breno</span>
        <span className="block text-sm text-zinc-400 truncate ">breno.nascimento@gmail.com</span>
    </div>
    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>

</div>

</div>

    <Button variant="secondary" size="full">
    <UserCog className="size-5" />
         Gerenciar convidados
   </Button>

</div>
    )
}