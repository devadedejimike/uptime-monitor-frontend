'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, AtSignIcon, LockIcon } from "lucide-react";
import { api } from "../lib/api";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false);

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
    <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={isLogin ? handleLogin : handleSignUp} className=" space-y-3">
            <div className="rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className='mb-3 text-2xl'>
                    {isLogin ? 'Please log in to continue.' : 'Sign up to use our service'}
                </h1>
                <div className="">
                <div>
                    <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="email"
                    >
                    Email
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                    />
                    <AtSignIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="password"
                    >
                    Password
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        minLength={6}
                    />
                    <LockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                {!isLogin && (
                    <div className="mt-4">
                        <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="password"
                        >
                        Confirm Password
                        </label>
                        <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="password"
                            type="password"
                            name="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter password"
                            required
                            minLength={6}
                        />
                        <LockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                )}
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2 mt-4 rounded">
                        {isLogin ? 'Log in' : 'Sign up'} <ArrowRightIcon className="ml-auto h-5 w-5" />
                    </button>
                </div>
                {/* Alternative Login */}
                <div className="flex h-8 items-end space-x-1">
                {/* Add form errors here */}
                </div>
                <div>
                    {isLogin ?  "Don't have an account yet? " : 'Already have an account? '}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="bg-brand-primary text-white px-2 py-1 rounded"
                    >
                        {isLogin ? 'Create one' : 'Log in'}
                    </button>
                </div>
            </div>
            </form>
    </div>
  );
}
