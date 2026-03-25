'use client'

import { Activity, LogOut} from "lucide-react";
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
            <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-20 bg-white border-b border-gray-200">
                <div className="flex items-center gap-1 sm:gap-3">
                    <Activity className="text-brand-primary "/>
                    <span className="font-bold text-lg">Uptime Watcher</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 text-brand-text-muted">
                    <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm">
                        {user?.email?.[0].toUpperCase()}
                    </div>
                    <p className="hidden sm:block text-sm">{user?.email || "Unknown"}</p>
                    <Link href={''} className="flex items-center gap-1 hover:bg-brand-background hover:text-brand-primary p-2 rounded">
                        <LogOut size={18}/>
                    </Link>
                </div>
            </header>
            {/* Main Content */}
            <main className="py-6 px-4 sm:py-8 sm:px-6 md:px-12 lg:px-20 bg-brand-background/20">
                {children}
            </main>
        </div>
    )
}