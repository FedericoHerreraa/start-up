import { Metadata } from "next"
import { StartNow } from "@/app/components/StartNow";

export const metadata: Metadata = {
    title: "Schedule a Call | AsNeeed",
    description: "Book a meeting with our team at AsNeeed to discuss your project. Choose a 30-minute or 1-hour session and let’s start working on your vision today.",
};

export default function StartNowPage() {
    return (
        <StartNow />
    )
}