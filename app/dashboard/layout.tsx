import { Activity, Globe, LayoutDashboard, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";


export default function DashboardLayout({children} : {children: ReactNode}) {
    return(
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-10">
                    <Activity className="text-brand-primary "/>
                    <span className="font-bold text-lg">Uptime Watcher</span>
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    <Link href={''} className="flex items-center gap-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-background px-5 py-2 rounded">
                        <LayoutDashboard size={18}/>
                        Dashboard
                    </Link>
                    <Link href={''} className="flex items-center gap-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-background px-5 py-2 rounded">
                        <Globe size={18}/>
                        Website
                    </Link>
                    <Link href={''} className="flex items-center gap-2 text-brand-text-muted hover:text-brand-primary hover:bg-brand-background px-5 py-2 rounded">
                        <Settings size={18}/>
                        Settings
                    </Link>
                </nav>
            </aside>
            {/*Right Side */}
            <div className="flex-1 flex flex-col">
                {/* Top Nav */}
                <header className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
                    <h3 className="font-semibold ">Dashboard</h3>
                    <div className="flex items-center gap-4 text-brand-text-muted">
                        <p>user@gmail.com</p>
                        <Link href={''} className="flex items-center gap-1 hover:bg-brand-background hover:text-brand-primary p-2 rounded">
                            <LogOut size={18}/>
                        </Link>
                    </div>
                </header>
                {/* Main Content */}
            </div>
        </div>
    )
}