import Link from "next/link";
import Badge from "./badge";
import { ExternalLink, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";



type Website={
    id: number,
    name: string,
    url: string,
    status?: "UP" | "DOWN";
    responseTime?: number;
    uptime?: number;
    lastCheck?: string;
}
export default function WebsiteCard({site}: {site: Website}){

    return(
        <div className="bg-white p-4 md:px-6 rounded shadow-sm hover:shadow-md transition">
            <div className="transition">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h3 className="font-semibold text-lg">{site.name}</h3>
                        <p className="text-sm text-brand-text-muted break-all">{site.url}</p>
                    </div>
                    <div className="flex items-end">
                        <a 
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit Website"
                            className="p-2 hover:bg-brand-text-muted/30 rounded-md transition"
                        >
                            <ExternalLink size={18} className=""/>
                        </a>
                        <button
                            title="Delete Website"
                            className="p-2 hover:bg-red-100 rounded-md transition"
                        >
                            <Trash2 size={18} className="text-red-600"/>
                        </button>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <Badge status={site.status}/>
                    <div className="text-right">
                        <p className="text-medium font-semibold">{site.uptime ? `${site.uptime}%` : 'N/A'}</p>
                        <p className="text-xs text-brand-text-muted">uptime</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-brand-text-muted text-sm mt-5">
                    <p>Last checked {site.lastCheck ? formatDistanceToNow(new Date(site.lastCheck), {addSuffix: true}) : 'N/A'}</p>
                    <p>
                        {site.responseTime
                            ? site.responseTime > 1000
                            ? `${(site.responseTime / 1000).toFixed(2)} s`
                            : `${Math.round(site.responseTime)} ms`
                            : "N/A"}
                    </p>
                </div>
            </div>
        </div>
    )
}