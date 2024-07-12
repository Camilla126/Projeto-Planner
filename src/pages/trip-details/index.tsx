import { MapPin } from "lucide-react";

export function TripDetailsPage() {
    return(
        <div className="max-w-6xl px-6 py-10">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <span>
                    <MapPin/>
                </span>
            </div>
        </div>
    )
}