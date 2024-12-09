import { OurWay } from "./components/OurWay";
import { Header } from "./components/Header"
import { LandingInfo } from "./components/Landing"
import { OurWork } from "./components/OurWork";
import { CustomSeparator } from "./components/CustomSeparator";
import { Founders } from "./components/Founders";
import { StartNow } from "./components/StartNow";
import { Footer } from "./components/Footer";
import { LineSeparator } from './components/LineSeparator';


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
        </>
    )
}