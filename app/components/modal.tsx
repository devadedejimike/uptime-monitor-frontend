'use client'
import { useState } from "react";
import { api } from "../lib/api";

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
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[400px]">

                <h3>Add a website to monitor</h3>
                <p>We will check every 5 mins and track its uptime</p>

                <form onSubmit={handleSubmitModal}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="url">URL</label>
                        <input 
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="border w-full"
                        />
                    </div>

                    <button type="submit" className="mt-4 bg-black text-white px-4 py-2 rounded">
                        Add Website
                    </button>
                </form>

            </div>
        </section>

    )
}