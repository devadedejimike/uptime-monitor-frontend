'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, AtSignIcon, Github, LockIcon, Mail } from "lucide-react";
import { api } from "../lib/api";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();

        try{
            const data = await api.post("/auth/login", {email, password});
            localStorage.setItem("token", data.token)
            router.push("/dashboard")
        }catch(error){
            console.error("Login error", error)
            alert("invalid credentials")
        }
    }

    const handleSignUp = async(e: React.FormEvent) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        try {
            const data = await api.post("/auth/register", {email, password});
            localStorage.setItem("token", data.token);
            router.push("/dashboard")
        } catch (error) {
            alert('Error signing up')
        }
    }
  return (
  <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

{/* LEFT SIDE - FORM */}
  <div className="flex items-center justify-center px-6">
    <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-6 shadow-xl">

      <form onSubmit={isLogin ? handleLogin : handleSignUp} className="space-y-5">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold">
            {isLogin ? "Welcome back 👋" : "Create your account"}
          </h1>
          <p className="text-sm text-brand-text-muted mt-1">
            {isLogin
              ? "Login to continue monitoring"
              : "Start monitoring your websites"}
          </p>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <div className="relative mt-1">
            <input
              className="w-full rounded-lg border px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <AtSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 text-gray-400" />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm font-medium">Password</label>
          <div className="relative mt-1">
            <input
              className="w-full rounded-lg border px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              minLength={6}
            />
            <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 text-gray-400" />
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        {!isLogin && (
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <div className="relative mt-1">
              <input
                className="w-full rounded-lg border px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                required
                minLength={6}
              />
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* BUTTON */}
        <button className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-2 rounded-lg hover:opacity-90 transition">
          {isLogin ? "Login" : "Sign up"}
          <ArrowRightIcon className="h-4 w-4" />
        </button>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* TOGGLE */}
        <p className="text-sm text-center text-brand-text-muted">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-brand-primary font-medium"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>

      </form>
    </div>
  </div>


    {/* RIGHT SIDE */}
    <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-500/40 text-white p-10">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          Monitor your websites in real-time 
        </h2>
        <p className="text-white/80">
          Get instant alerts when your website goes down and track performance effortlessly.
        </p>
      </div>
    </div>

  </div>
);
}
