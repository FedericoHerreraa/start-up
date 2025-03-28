import { Metadata } from "next"
import { StartNow } from "@/app/components/StartNow";
import { LineSeparator } from "@/app/components/LineSeparator";
import { FAQs } from "@/app/components/FAQs";

export const metadata: Metadata = {
    title: "Schedule a Call | AsNeed",
    description: "Book a meeting with our team at AsNeed to discuss your project. Choose a 30-minute or 1-hour session and let’s start working on your vision today.",
};

export default function StartNowPage() {
    return (
        <>
            <StartNow />
            <LineSeparator />
            <FAQs />
        </>
    )
}