

import { useEffect, useState } from "react";
import { useLenguage } from "@/app/context/LenguageContext";
import { ContactUsView } from "./ContactUsView";

export const ContactUsController = () => {
    const { spanish } = useLenguage()
    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    const [date, setDate] = useState<Date>()
    const [time, setTime] = useState<string>()
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

        const dataToSend = {
            ...formData,
            date: date?.toLocaleDateString() || '',
            time: time || '',
        }

        setLoading(true)
    
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
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
        <ContactUsView
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            loading={loading}
            showConfetti={showConfetti}
            spanish={spanish}
        />
    )
}