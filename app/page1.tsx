'use client'

import { Activity, ArrowRight, Zap, Shield, Globe, Clock, Bell, History } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);
  const options = ["websites", "APIs", "dashboards"];
  
  useEffect(() => {
    const interval = setInterval(() => {
       setValue((prev) => (prev + 1) % options.length)
    },2500);
    return () => clearInterval(interval);
  }, [])

  const features = [
    {
      icon: Zap,
      feat: "5-Minute Checks",
      desc: 'Automated HTTP checks every 5 minutes so you catch issues fast'
    },
    {
      icon: History,
      feat: "Uptime History",
      desc: 'Visual uptime bars and percentage tracking for every website'
    },
    {
      icon: Shield,
      feat: "Secure & Private",
      desc: 'Your data is protected and encrypted'
    },
    {
      icon: Globe,
      feat: "Any Website",
      desc: 'Monitor any public URL, APIs, dashboards, blogs'
    },
    {
      icon: Clock,
      feat: "Response Time",
      desc: 'Track response time to spot performance degradation early'
    },
    {
      icon: Bell,
      feat: "Instant Alerts",
      desc: 'Get notified immediately when your website goes down (Coming soon)'
    }
  ]
  const how = [
    {
      num: "01",
      head: "Sign Up",
      desc: "Create a free account in seconds",
    },
    {
      num: "02",
      head: "Add URL",
      desc: "Paste the url of the website you want to monitor",
    },
    {
      num: "03",
      head: "Relax",
      desc: "We check every 5minutes and alert you if something breaks",
    }
  ]
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar  */}
      <nav className="sticky top-0 z-50">
        <div className="flex justify-between items-center bg-white backdrop-blur-md px-10 py-3">
          <span className="flex gap-3">
            <Activity className="text-brand-primary"/>
            <p className="text-lg font-semibold">Uptime Watcher</p>
          </span>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={'/auth'}>Login</Link>
            </li>
            {/* <li className="flex items-center gap-2 bg-brand-primary px-5 py-2.5 text-white rounded-lg hover:opacity-90 transition">
              <Link href={'/auth'}>Get Started</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="relative z-10 bg-brand-background flex flex-col items-center justify-center text-center w-full mx-auto px-6 md:px-20 pt-20 pb-20">
        <div className="max-w-4xl">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight pb-3">
            Know when your{" "} <br />
            <span className="text-brand-primary">
              {options[value]}
            </span>{" "}<br />
            goes down before your users do
          </h3>
          <p className="text-lg font-medium text-brand-muted text-center">Uptime Watcher checks your websites every 5 minutes and alerts you instantly when something breaks. Simple setup, powerful monitoring.</p>
        </div>
        <div className="flex justify-center items-center gap-6 mx-auto pt-5">
          <Link href={'/auth'}>
            <button type="button" className="flex items-center gap-2 bg-brand-primary px-5 py-2.5 text-white rounded-lg hover:opacity-90 transition">
              Start Monitoring Free
              <ArrowRight />
            </button>
          </Link>
          <button className="flex items-center gap-2 border border-brand-primary text-brand-primary px-5 py-2.5 rounded-lg hover:bg-brand-primary hover:text-white transition">See How It Works</button>
        </div>
      </main>
      {/* Features */}
      <section className="bg-brand-background/50 flex flex-col items-center justify-center py-20">
        <div className="text-center pt-20 pb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold pb-3">Everything you need to stay online</h3>
          <p className="text-md text-brand-text-muted">Powerful monitoring tools without complexity</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-20 py-5 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="max-w-xs px-7 py-7 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-brand-card p-2 my-2 rounded w-fit">
                <feature.icon className="text-brand-primary" size={25}/>
              </div>
              <div>
                <p className="font-semibold text-xl">{feature.feat}</p>
                <p className="text-brand-text-muted">{feature.desc}</p>
              </div>
            </div>

          ))}
        </div>
      </section>
      {/* How To Section */}
      <section className="bg-brand-background/20 flex flex-col items-center py-20">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold pb-3">
          Up and Running in 60 seconds
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 text-center">
          {how.map((input, index) => (
            <div
              key={index}
              className="max-w-xs p-6"
            >
              <p className="text-5xl text-brand-primary/50 flex items-center justify-center rounded-full font-bold mb-4">
                {input.num}
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-2">{input.head}</h3>
                <p className="text-brand-text-muted">{input.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Get Started */}
      <section className="bg-brand-background/50 flex flex-col items-center py-20 space-y-5">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Stop Wondering. Start Monitoring.</h3>
        <p className="text-sm sm:text-sm md:text-xl  text-brand-text-muted">Join and never miss any downtime incident again.</p>
        <Link href={'/auth'}>
          <button type="button" className="flex items-center gap-2 bg-brand-primary px-5 py-2.5 text-white rounded-lg hover:opacity-90 transition">
            Get Started Free
            <ArrowRight />
          </button>
        </Link>
      </section>
      {/* Footer */}
      <footer className="flex justify-between items-center px-10 py-6 text-brand-text-muted border-t">
        <div className="flex items-center gap-2">
          <Activity className="text-sm"/>
          <p className="text-sm">Uptime Watcher</p>
        </div>
        <p className="text-sm">&copy; 2026 Uptime Watcher All rights reserved</p>
      </footer>
    </div>
  );
}
