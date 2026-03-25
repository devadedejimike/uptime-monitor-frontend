'use client'
import { useState } from "react";
import { api } from "../lib/api";
import { X } from "lucide-react";

type ModalProps = {
    AddWebsite: (website: any) => void,
    onClose: () => void
}
export default function Modal({AddWebsite, onClose}: ModalProps){
    const [name, setName] = useState('');
    const [url, setUrl] = useState('')

    const handleSubmitModal = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await api.post('/website', {name, url})
            AddWebsite(data);
            onClose();

            setName('')
            setUrl('')
        } catch (error) {
            console.log("Error adding new url")
        }
        
    }

    return(
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={onClose}>
            <div className="w-full bg-white max-w-md sm:max-w-lg p-6 rounded-lg space-y-5" onClick={(e) => {e.stopPropagation()}}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-brand-primary">Add a website to monitor</h3>
                        <p className="text-sm text-brand-text-muted">We&apos;ll check every 5 mins and track its uptime</p>
                    </div>
                    <div className="hover:bg-brand-primary hover:text-white text-brand-primary p-2 rounded-lg" onClick={onClose}>
                        <X size={24}/>
                    </div>

                </div>    
                    
                <form onSubmit={handleSubmitModal} className="space-y-4">
                    <div>
                        <label htmlFor="name"  className="block text-sm font-medium mb-1">Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Example"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="url" className="block text-sm font-medium">URL</label>
                        <input 
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-brand-primary text-white px-4 py-2 rounded">
                        Add Website
                    </button>
                </form>

            </div>
        </section>

    )
}