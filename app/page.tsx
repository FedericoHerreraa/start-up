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
import { TrustedByCompanies } from "./components/TrustedByCompanies";

export const metadata: Metadata = {
    title: "Grow Your Business | AsNeeed",
    description: "At AsNeeed, we provide tailored solutions to help your business reach new heights. Discover how our expertise can transform your ideas into reality and start your journey with us today.",
};

export default function HomePage() {
    return (
        <>
            <Header />
            <LandingInfo />
            <CustomSeparator />
            <OurWay />
            <LineSeparator />
            <OurWork />
            <LineSeparator />
            <TrustedByCompanies />
            <CustomSeparator />
            <Founders /> 
            <LineSeparator />
            <StartNow />
            <Footer />
            <BackToTop />
        </>
    )
}