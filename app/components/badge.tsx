import { Wifi } from "lucide-react"
export default function Badge({status}: {status?: "UP" | "DOWN"}) {
    const isUp = status === 'UP'
    return(
        <div>
            <span
                className={`flex items-center p-2 text-xs gap-2 rounded-lg ${isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
               <Wifi size={18}/> {isUp ? "UP" : "DOWN"}
            </span>
        </div>
    )
}