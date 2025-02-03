import { OurWay } from "@/app/components/OurWay";
import { LandingInfo } from "@/app/components/Landing"
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { Founders } from "@/app/components/Founders";
import { LineSeparator } from '@/app/components/LineSeparator';
import { Metadata } from "next";
import { TrustedByCompanies } from "@/app/components/TrustedByCompanies";
import { WhyUs } from "@/app/components/WhyUs";

export const metadata: Metadata = {
    title: "Grow Your Business | AsNeeed",
    description: "At AsNeeed, we provide tailored solutions to help your business reach new heights. Discover how our expertise can transform your ideas into reality and start your journey with us today.",
};

export default function HomePage() {
    return (
        <>
            <LandingInfo />
            <CustomSeparator />
            <OurWay />
            <LineSeparator />
            <WhyUs />
            <LineSeparator />
            <TrustedByCompanies />
            <CustomSeparator />
            <Founders /> 
        </>
    )
}