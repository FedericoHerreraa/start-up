import { OurWay } from "@/app/components/OurWay";
import { Header } from "@/app/components/Header"
import { LandingInfo } from "@/app/components/Landing"
import { OurWork } from "@/app/components/OurWork";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { Founders } from "@/app/components/Founders";
import { StartNow } from "@/app/components/StartNow";
import { Footer } from "@/app/components/Footer";
import { LineSeparator } from '@/app/components/LineSeparator';
import { BackToTop } from "@/app/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | As You Need",
    description: "En As You Need tenes la posibilidad de llevar tu negocio al siguiente nivel. Conocé más sobre nosotros y empezá a trabajar en tu proyecto.",
}

export default function HomePage() {
    return (
        <>
            <Header />
            <LandingInfo />
            <CustomSeparator />
            <OurWay />
            <LineSeparator />
            <OurWork />
            <CustomSeparator />
            <Founders /> 
            <LineSeparator />
            <StartNow />
            <Footer />
            <BackToTop />
        </>
    )
}