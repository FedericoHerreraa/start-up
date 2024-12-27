import { useState } from "react";
import { Calendar } from "@/app/components/ui/calendar"

import {
    Select,
    SelectContent,
    // SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"  


export const ContactUsForm = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [formData, setFormData] = useState({
        to: '',
        name: '',
        text: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex gap-5 w-full">
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2 text-zinc-400">Email</label>
                    <input 
                        type="email" 
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        required
                        className="py-2 px-4 block w-full border-gray-200 bg-zinc-900 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                        placeholder="you@site.com"
                    />
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2 text-zinc-400">Nombre y Apellido</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-2 px-4 block w-full border-gray-200 bg-zinc-900 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                        placeholder="Escribe tu nombre completo"
                    />                
                </div>
            </div>

            <div className="w-full mt-3">
                <label className="block text-sm font-medium mb-2 text-zinc-400">Tu proyecto</label>
                <textarea 
                    className="py-3 px-4 block w-full bg-zinc-900 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" 
                    rows={4} 
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                    placeholder="Describe brevemente tu proyecto aqui..."
                ></textarea>
            </div>

            <div className="flex gap-5">
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2 text-zinc-400">Elige el dia para la reunion</label>
                    <div className="bg-zinc-900 flex justify-center rounded-lg">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border-none bg-zinc-900 text-zinc-300 text-center"
                        />          
                    </div>       
                </div>
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2 text-zinc-400">Elige la cantidad de tiempo para la reunion</label>
                    <div className="bg-zinc-900 flex justify-center rounded-lg">
                        <Select >
                            <SelectTrigger 
                                
                            >
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent 
                                
                            >
                            </SelectContent>
                        </Select>       
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <p className="text-zinc-400 text-sm">Al hacer click en este boton nos enviaras un mail con la informacion, y se te notificara a ti tambien para tu seguridad</p>
                <button 
                    className="bg-gradient-to-r w-[250px] mt-5 from-blue-700 to-blue-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-80"
                    type="submit"
                >
                    Send Email
                </button>
            </div>

        </form>
    )
}