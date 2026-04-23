'use client'

import { Activity } from "lucide-react"
import { useEffect, useState } from "react"
import { Baloon, Card, cards } from "./lib/types"

export default function LandingPage () {
    const options = ["website", "API", "dashboards"]
    const [value, setValue] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev + 1) % options.length) 
        }, 2500)
        return () => clearInterval(interval);
    },[])
    return(
        <div className="min-h-screen font-sans">
            {/* Navigation bar */}
            <nav className="sticky top-0 z-50">
                <div className="flex justify-between items-center backdrop-blur-md px-10 py-3">
                    <span className="flex items-center gap-3">
                        <Activity />
                        <p className="text-md font-bold">Uptime Watcher</p>
                    </span>
                    <ul className="flex items-center gap-3">
                        <li>What We Do</li>
                        <li>Our Approach</li>
                        <li>About Us</li>
                    </ul>
                    <button className="">Watch</button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="w-full flex flex-col items-center mx-auto pt-20 pb-20">
                <div className="max-w-4xl text-center space-y-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Know when your{" "}<br/><span className="">{options[value]}</span>{" "}<br/>goes down before your users do</h3>
                    <p className="text-sm text-center">Uptime Watcher checks your websites every 5 minutes and alerts you instantly when something breaks. <br/>Simple setup, powerful monitoring.</p>
                </div>
            </main>

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h3 className="text-3xl md:text-4xl">You Rest, We Watch.</h3>
                    <p className="text-md mt-2">Enjoy Peace of Mind</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                    {/* Left side */}
                    <ul className="space-y-5 text-right">
                        <li>Catch issues early</li>
                        <li>Deploy with confidence</li>
                        <li>Get instant alerts</li>
                    </ul>
                    {/* Spinning animation */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-40 h-40">
                            {/* Outer spinning circle*/}
                            <div className="absolute inset-0 rounded-full border-dashed border-2 bg-emerald-500/30 animate-[spin_8s_linear_infinite_reverse]"></div>
                            {/* inner pulsing circle*/}
                            <div className="absolute inset-6 rounded-full border-2 bg-emerald-500/40 animate-pulse"></div>
                            {/* Core */}
                            <div className="absolute inset-12 rounded-full bg-emerald-500 border-2 border-dashed shadow-lg shadow-emerald-500/30 animate-[spin_1s_linear_infinite_reverse]"></div>
                        </div>
                    </div>
                    {/* Right side */}
                    <ul className="space-y-5 text-left">
                        <li>Skip manual checks</li>
                        <li>See real performance</li>
                        <li>Cut the noise</li>
                    </ul>
                </div>
            </section>
            <section className="max-w-4xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center border-2">
                    {/* Left Side */}
                    <div className="px-3 py-5 border-b-2 md:border-b-0 md:border-r-2 border-slate-800/20 space-y-3">
                        <h3 className="font-semibold text-2xl b">Why is there a need <br/>for Uptime Watcher?</h3>
                        <div className="border-l border-slate-800/20 px-2 text-sm">
                            <p>System fails silently... you won&apos;t know until users do</p>
                            <p>Downtime quietly damages trusts</p>
                            <p>Manual checks aren&apos;t reliable</p>
                            <p>The sooner you know, the faster you fix it</p>
                        </div>
                        <button className="border rounded-full px-4 py-2">See problems before users do</button>
                    </div>
                    {/* Right side */}
                    {/* An Heartbeat pulse signal */}
                    <div className="relative w-full h-32 flex items-center overflow-hidden">
                    {/* Static Background Grid */}
                    <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    {/* Base line */}
                    <div className="absolute w-full h-[1px] bg-emerald-900/30 top-1/2 left-0"></div>

                    {/* SVG Heartbeat */}
                    <svg
                        viewBox="0 0 400 100"
                        preserveAspectRatio="none"
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        {/* glow filter */}
                        <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                            <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        </defs>

                        {/* The Path */}
                        <path
                        d="M0 50 L160 50 L200 56 L220 10 L250 65 L300 40 L350 50 L400 50"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                        className="draw-line"
                        />
                    </svg>
                    </div>
                </div>
            </section>
            {/* What we do section */}
            <section className="py-20 px-20 space-y-10">
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Solve for burdens of not knowing when things break</h3>
                    <p className="text-sm">Get alerted instantly, track performance, and stay ahead of issues without comlex setup</p>
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <button className="text-xs font-semibold border px-2 py-1 rounded-full mb-20">where we fit</button>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {cards.map((card) => (
                            <div key={card.id} className="border rounded-xl px-5 py-10 space-y-3">
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-sm">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <button className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">what you get</button>

                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Your go-to Patner who{" "}<br/><span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Watches and Delivers</span></h3> 
                        <p className="text-sm">Everything is monitored, we watch and inform you immediately it goes down</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-5">
                            {Baloon.map((baloon) => (
                            <div key={baloon.id} className="w-32 h-32 border flex items-center justify-center p-4 rounded-full">
                                <p>{baloon.content}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>  
            </section>
            {/* Our Approach section */}
        </div>
    )
}