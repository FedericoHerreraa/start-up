import { Metadata } from "next";
import { OurWork } from "@/app/components/OurWork";

export const metadata: Metadata = {
    title: "Our Best Projects | AsNeeed",
    description: "At AsNeeed, we showcase cutting-edge UI and technology solutions. Explore our best projects and discover how our expertise can bring your ideas to life.",
};


export default function OurWorkPage() {
    return (
        <OurWork/>
    )
}