import { useEffect, useState } from "react";
import { Calendar } from "@/app/components/ui/calendar"
import { ImSpinner8 } from "react-icons/im";
import Confetti from 'react-confetti'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"  

export const ContactUsForm = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
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

        setLoading(true)
    
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
                setLoading(false)
                setShowConfetti(true)
                setFormData({
                    to: '',
                    name: '',
                    text: '',
                });
            } else {
                setLoading(false)
                console.error('Error: ' + result.message);
            }
        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti])
    
    return (
        <>
            {showConfetti && 
                <Confetti
                    width={window.innerWidth} 
                    height={window.innerHeight + window.scrollY}
                    numberOfPieces={200}
                    recycle={false}
                    confettiSource={{
                        x: 0,
                        y: window.scrollY,
                        w: window.innerWidth,
                        h: 0,
                    }}
                />
            }
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex gap-5 w-full">
                    <div className="w-1/2 text-zinc-300">
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

                    <div className="w-1/2 text-zinc-300">
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

                <div className="w-full mt-3 text-zinc-300">
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
                            <Select>
                                <SelectTrigger className="border-none text-zinc-300">
                                    <SelectValue placeholder="Selecciona una duracion" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-zinc-200 border-zinc-800 ">
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="30">30 minutos</SelectItem>
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="1">1 hora</SelectItem>
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
                        {loading ? (
                            <div className="flex justify-center">
                                <ImSpinner8 className="animate-spin h-5 w-5 text-white"/>
                            </div>
                        ) : (
                            <p>Send Email</p>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}