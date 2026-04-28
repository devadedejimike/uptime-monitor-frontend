'use client'
import React from "react"
import { Activity, ArrowRight, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import { Baloon,  cards, label } from "./lib/types"
import Link from "next/link"

export default function LandingPage () {
    const options = ["website", "API", "dashboards"]
    const [value, setValue] = useState(0);

    const steps = [
        "Sign up/Login",
        "Add your Url",
        "We start monitoring",
        "We check every 5 minutes",
        "You get notified if something breaks"
    ];
    

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev + 1) % options.length) 
        }, 2500)
        return () => clearInterval(interval);
    },[])
    return(
        <div className="min-h-screen">
            {/* Navigation bar */}
            <nav className="sticky top-0 z-50">
                <div className="flex justify-between items-center backdrop-blur-md px-10 py-3">
                    <a href="#home" className="flex items-center gap-1 text-emerald-600">
                        <Activity className=""/>
                        <p className=" text-md font-bold">Uptime Watcher</p>
                    </a>
                    <ul className="flex items-center gap-3">
                        <li><a href="#what-we-do">What We Do</a></li>
                        <li><a href="#our-approach">Our Approach</a></li>
                        <li><a href="#about-us">About Us</a></li>
                    </ul>
                    <Link href={'/auth'}>
                        <button className="text-sm font-semibold border px-6 py-3 rounded-xl shadow-md bg-emerald-500 text-white outline-none hover:bg-emerald-500/60 hover:shadow-lg active:scale-95 transition-all duration-200">Sign Up</button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main id="home" className="w-full flex flex-col items-center mx-auto pt-20 pb-20">
                <div className="max-w-4xl text-center space-y-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Know when your{" "}<br/><span className="">{options[value]}</span>{" "}<br/>goes down before your users do</h3>
                    <p className="text-sm text-center">Uptime Watcher checks your websites every 5 minutes and alerts you instantly when something breaks. <br/>Simple setup, powerful monitoring.</p>
                </div>
            </main>

            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h3 className="text-3xl md:text-4xl">You Rest, We Watch.</h3>
                    <p className="text-sm mt-2">Enjoy Peace of Mind</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                    {/* Left side */}
                    <ul className="space-y-5 text-right text-sm font-semibold">
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
                    <ul className="space-y-5 text-left text-sm font-semibold">
                        <li>Skip manual checks</li>
                        <li>See real performance</li>
                        <li>Cut the noise</li>
                    </ul>
                </div>
            </section>
            <section className="max-w-4xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center shadow-emerald-500/60 shadow-lg">
                    {/* Left Side */}
                    <div className="px-3 py-5 border-b-2 md:border-b-0 md:border-r-2 border-slate-800/20 space-y-3">
                        <h3 className="font-semibold text-2xl b">Why is there a need <br/>for Uptime Watcher?</h3>
                        <div className="border-l border-slate-800/20 px-2 text-sm">
                            <p>System fails silently... you won&apos;t know until users do</p>
                            <p>Downtime quietly damages trusts</p>
                            <p>Manual checks aren&apos;t reliable</p>
                            <p>The sooner you know, the faster you fix it</p>
                        </div>
                        <Link href={'/auth'}>
                            <button className="mt-5 text-sm font-semibold border px-6 py-3 rounded-xl shadow-md bg-emerald-500 text-white outline-none hover:bg-emerald-500/60 hover:shadow-lg active:scale-95 transition-all duration-200">See problems before users do</button>
                        </Link>
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
            <section id="what-we-do" className="py-20 px-20 space-y-10">
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Solve for burdens of not knowing when things break</h3>
                    <p className="text-sm">Get alerted instantly, track performance, and stay ahead of issues without comlex setup</p>
                </div>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs font-semibold border px-2 py-1 rounded-full mb-20">where we fit</p>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {cards.map((card) => (
                            <div key={card.id} className="shadow-emerald-500/60 shadow-lg rounded-xl px-5 py-10 space-y-3">
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-sm">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center space-y-3">
                    <p className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">what you get</p>

                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Your go-to Patner who{" "}<br/><span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl">Watches and Delivers</span></h3> 
                        <p className="text-sm">Everything is monitored, we watch and inform you immediately it goes down</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-20">

                            {Baloon.map((baloon) => (
                                <div key={baloon.id} className="relative w-32 h-32 flex items-center justify-center">

                                {/* Spinning border */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500 shadow-lg animate-[spin_8s_linear_infinite]" />

                                {/* Static content */}
                                <div className="w-full h-full flex items-center justify-center p-4">
                                    <p className="text-sm text-center">{baloon.content}</p>
                                </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
            </section>
            {/* Our Approach section */}
            <section id="our-approach" className="space-y-5 py-5 px-5 border-t-4 rounded-t-[500px] border-emerald-500">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">Our Approach</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-2">We are always active<br/> for your sake</h3>
                    <p className="text-sm">Our service centers on you, we&apos;re an everyday partner who watches with geniune care</p>

                    <div className="relative w-full h-[400px] flex items-center justify-center">

                    {/* Center plus */}
                    <div className="relative flex items-center justify-center">
                        
                        {/* Vertical line */}
                        <div className="absolute w-[2px] h-20 border-2 border-emerald-500/50 animate-pulse"></div>

                        {/* Horizontal line */}
                        <div className="absolute h-[2px] w-20 border-2 border-emerald-500/50 animate-pulse"></div>

                        {/* Center circle */}
                        <div className="w-6 h-6 rounded-full border bg-transparent z-10 border-2 border-dashed border-emerald-500 shadow-lg animate-[spin_8s_linear_infinite]"></div>
                    </div>

                    {/* Top label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80px] text-sm text-center">
                        <p className="font-semibold">Monitor what matters</p>
                    </div>

                    {/* Right label */}
                    <div className="absolute top-1/2 left-1/2 translate-x-[80px] -translate-y-1/2 text-sm text-center">
                        <p className="font-semibold">Respond fast</p>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[60px] text-sm text-center">
                        <p className="font-semibold">Stay clear</p>
                    </div>

                    {/* Left label */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-[160px] -translate-y-1/2 text-sm text-center">
                        <p className="font-semibold">Keep it simple</p>
                    </div>

                    </div>
                    <div>
                        <button className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">How it works</button>
                        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 p-8 rounded-2xl shadow-emerald-500/60 shadow-lg">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                {/* Step Button */}
                                <div className="relative">
                                    <div className="absolute -inset-0.5 rounded-lg blur opacity-20 transition duration-300"></div>
                                    <button className="relative shadow-lg border px-4 py-2 text-sm font-semibold rounded-lg">
                                    {step}
                                    </button>
                                </div>

                                {/* Arrow: Show ArrowRight on desktop, ArrowDown on mobile */}
                                {index !== steps.length - 1 && (
                                    <div className="flex items-center justify-center text-emerald-600">
                                    {/* Desktop Arrow */}
                                    <ArrowRight className="hidden md:block w-5 h-5 animate-pulse" />
                                    {/* Mobile Arrow */}
                                    <ArrowDown className="md:hidden w-5 h-5 animate-pulse" />
                                    </div>
                                )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div> 
                </div>
            </section>
            {/* About us */}
            <section id="about-us" className="space-y-5 py-5 px-5">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">About Us</p>
                    <div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-2">ONE VISION</h3>
                        <p className="text-sm">Helping users monitor with ease</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold border px-2 py-1 rounded-full mb-20 mt-20">our core values</p>
                        {/* core values */}
                        <div className="w-full py-16 px-6 md:px-16">
                            <div className="flex justify-center">
                                <div className="flex flex-col items-center gap-6 max-w-md w-full">
                                    {label.map((item, i) => (
                                        <div key={i} className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-lg w-full rounded-lg shadow-lg">
                                            <div className="w-10 flex justify-center">
                                                <h1 className="font-semibold text-emerald-600 text-2xl">{item.letter}</h1>
                                            </div>
                                            <div className="flex flex-col md:items-end">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="shadow-emerald-500/60 shadow-lg flex flex-col md:flex-row justify-center rounded-lg items-stretch p-6 md:p-10">
                            <div className="p-5 space-y-6">
                                <h3 className="text-4xl font-medium tracking-tight leading-tight mb-4">Experience Monitoring <br/>in a new way</h3>
                                <Link href={'/auth'}>
                                    <button className="text-sm font-semibold border px-6 py-3 rounded-xl shadow-md bg-emerald-500 text-white outline-none hover:bg-emerald-500/60 hover:shadow-lg active:scale-95 transition-all duration-200">Get Started</button>
                                </Link>
                                
                            </div>
                            <div className=" shadow-lg px-2 py-4 space-y-5 rounded-lg">
                                <h3 className="text-2xl text-start font-semibold">Sounds like you?</h3>
                                <div className="text-sm space-y-3">
                                    <p className="text-start">Your site goes down... and you are the last to know</p>
                                    <p className="text-start">Tired of checking dashboards manually after deployment</p>
                                    <p className="text-start">Getting too many alerts that don't matter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <footer className="space-y-10 mt-20 pt-20 px-5 pb-3 border-t-4 rounded-t-[500px] border-emerald-500">
                <nav className="flex items-center justify-center  space-x-10">
                    <div className="flex items-center justify-center gap-1">
                        <Activity />
                        <h3 className="font-semibold">Uptime Watcher</h3>
                    </div>
                    <Link href={'/auth'}>
                        <button className="text-sm font-semibold border px-6 py-3 rounded-xl shadow-md bg-emerald-500 text-white outline-none hover:bg-emerald-500/60 hover:shadow-lg active:scale-95 transition-all duration-200 animate-[glow_3s_ease-in-out_infinite]">Sign Up</button>
                    </Link>
                </nav>
                <section className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-1">Never miss any downtime</h3>

                {/* Wrapper to hold the beam and pendulums together */}
                <div className="flex flex-col items-center mt-10">
                    
                    {/* The Support Line */}
                    <div className="w-32 h-[2px] bg-emerald-500 rounded-full relative"/>

                    {/* Pendulum animation Container */}
                    <div className="flex justify-center items-start">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                        key={i}
                        className={`relative flex flex-col items-center w-6 origin-top ${
                            i === 0
                            ? "animate-swing-left"
                            : i === 3
                            ? "animate-swing-right"
                            : ""
                        }`}
                        >
                        {/* String */}
                        <div className="w-[1px] h-20 bg-emerald-600/20"></div>

                        {/* Ball */}
                        <div className="relative w-6 h-6 border  bg-emerald-600 rounded-full -mt-0.5 shadow-inner">
                            <div className="absolute top-1 left-1.5 w-1 h-1 bg-white/10 rounded-full blur-[1px]"></div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </section>
                <section className="max-w-6xl mx-auto flex items-center justify-between bg-emerald-100 p-5">
                    <ul className="flex items-center justify-center gap-3 text-sm">
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                    <p className="text-sm">&copy; Uptime Watcher {new Date().getFullYear()}</p>
                </section>
            </footer>
        </div>
    )
}