import { OurWay } from "./components/OurWay";
import { Header } from "./components/Header"
import { LandingInfo } from "./components/Landing"
import { OurWork } from "./components/OurWork";
import { CustomSeparator } from "./components/CustomSeparator";
import { Founders } from "./components/Founders";
import { StartNow } from "./components/StartNow";
import { Footer } from "./components/Footer";
import { LineSeparator } from './components/LineSeparator';
import { BackToTop } from "./components/BackToTop";
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