'use client'

import { Activity, Globe, LayoutDashboard, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { UserProvider, useUser } from "../context/userContext";



export default function DashboardLayout({children} : {children: ReactNode}) {
      
    return(
        <UserProvider>
            <DashboardInner>{children}</DashboardInner>
        </UserProvider>
    )
}

const DashboardInner = ({children}: {children: ReactNode}) => {
    const {user} = useUser()
    return(
        <div className="min-h-screen bg-gray-50">
            <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <Activity className="text-brand-primary "/>
                    <span className="font-bold text-lg">Uptime Watcher</span>
                </div>
                <div className="flex items-center gap-4 text-brand-text-muted">
                    <p>{user?.email || "Unknown"}</p>
                    <Link href={''} className="flex items-center gap-1 hover:bg-brand-background hover:text-brand-primary p-2 rounded">
                        <LogOut size={18}/>
                    </Link>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-1 p-10 bg-brand-background/20">
                {children}
            </main>
        </div>
    )
}