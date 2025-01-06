'use client'


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

export const ContactUsView = ({
    handleChange,
    handleSubmit,
    formData,
    date,
    setDate,
    time,
    setTime,
    loading,
    showConfetti,
    spanish,
    nightMode,
    error,
    today,
    twoMonthsAhead,
    setError
}: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleSubmit: (e: React.FormEvent) => void,
    formData: {
        to: string,
        name: string,
        text: string,
    },
    date: Date | undefined,
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
    time: string | undefined,
    setTime: React.Dispatch<React.SetStateAction<string | undefined>>,
    loading: boolean,
    showConfetti: boolean,
    spanish: boolean,
    nightMode: boolean,
    error: string,
    today: Date | null,
    twoMonthsAhead: Date | null,
    setError: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <>
            {showConfetti && 
                <Confetti
                    className="w-screen"
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
                        <label className={`block text-sm font-medium mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Email</label>
                        <input 
                            type="email" 
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            required
                            className={`py-2 px-4 block w-full border-gray-200 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-200'} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`} 
                            placeholder={spanish ? 'tu@sitio.com' : 'you@site.com'}
                        />
                    </div>

                    <div className="w-1/2 text-zinc-300">
                        <label className={`block text-sm font-medium mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? 'Nombre y Apellido' : 'First Name & Last Name'}</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`py-2 px-4 block w-full border-gray-200 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-200'} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                            placeholder={spanish ? 'Escribe tu nombre completo' : 'Write your entire name here' }
                        />                
                    </div>
                </div>

                <div className="w-full mt-3 text-zinc-300">
                    <label className={`block text-sm font-medium mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? 'Tu proyecto' : 'Your project'}</label>
                    <textarea 
                        className={`py-3 px-4 block w-full ${nightMode ? 'bg-zinc-900' : 'bg-zinc-200'} border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
                        rows={4} 
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        required
                        placeholder={spanish ? "Describe brevemente tu proyecto aqui..." : 'Describe your project here...'}
                    ></textarea>
                </div>

                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-1/2">
                        <label className={`block text-sm font-medium mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            {spanish ? `Elige la fecha (${today?.toLocaleDateString()} - ${twoMonthsAhead?.toLocaleDateString()})` : `Choose a date (${today?.toLocaleDateString()} - ${twoMonthsAhead?.toLocaleDateString()})`}
                        </label>
                        <div className={`${nightMode ? 'bg-zinc-900' : 'bg-zinc-200'} flex justify-center rounded-lg`}>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(value) => {
                                    if (value) {
                                        const selectedDate = new Date(value);
                                        if (today && selectedDate >= today && twoMonthsAhead && selectedDate <= twoMonthsAhead) {
                                            setDate(value);
                                            setError(""); 
                                        } else {
                                            setError(
                                                spanish
                                                    ? "Selecciona una fecha dentro del rango permitido."
                                                    : "Please select a date within the allowed range."
                                            );
                                        }
                                    }
                                }}
                                className={`rounded-md border-none ${nightMode ? 'bg-zinc-900 text-zinc-300 ' : 'bg-zinc-200 text-zinc-800 '} text-center`}
                            />          
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                    </div>
                    <div className="md:w-1/2">
                        <label className={`block text-sm font-medium mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? 'Elige la cantidad de tiempo para la reunion' : 'Select the amount of time for the reunion'}</label>
                        <div className={`${nightMode ? 'bg-zinc-900' : 'bg-zinc-200'} flex justify-center rounded-lg`}>
                            <Select required onValueChange={(value) => setTime(value)}>
                                <SelectTrigger className="border-none text-zinc-400">
                                    <SelectValue 
                                        defaultValue={time}
                                        placeholder={spanish ? "Selecciona una duracion" : "Select a duration"}
                                    />
                                </SelectTrigger>
                                <SelectContent className={`${nightMode ? 'bg-black border-zinc-800 text-zinc-200' : 'bg-zinc-300 border-zinc-400 text-zinc-800'}  `}>
                                    <SelectItem className={`${nightMode ? 'focus:bg-zinc-800 focus:text-zinc-200' : 'focus:bg-zinc-400'}`} value="30">{spanish ? '30 minutos' : '30 minutes'}</SelectItem>
                                    <SelectItem className={`${nightMode ? 'focus:bg-zinc-800 focus:text-zinc-200' : 'focus:bg-zinc-400'}`} value="1">{spanish ? '1 hora' : '1 hour'}</SelectItem>
                                </SelectContent>
                            </Select>       
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:text-left text-center">
                    <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>
                        {spanish
                            ? 'Al hacer click en este boton nos enviaras un mail con tu informacion, y se te notificara a ti tambien para tu seguridad.'
                            : 'By clicking this button you will send us an email with your information, and you will be notified for your security.'
                        }
                    </p>
                    <button
                        className="bg-gradient-to-r w-[250px] mt-5 from-blue-700 to-blue-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-80"
                        type="submit"
                    >
                        {loading ? (
                            <div className="flex justify-center">
                                <ImSpinner8 className="animate-spin h-5 w-5 text-white"/>
                            </div>
                        ) : (
                            <p>{spanish ? 'Enviar Email' : 'Send Email'}</p>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}