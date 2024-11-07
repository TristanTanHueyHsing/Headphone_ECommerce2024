import { secondBanner } from "../assets";
import Container from "./Container";

const SecondBanner = () => {
    return (
        <Container className="relative py-5 overflow-hidden">
            <div className="relative">
                <img
                    src={secondBanner}
                    alt="secondBanner"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-end px-10 text-right">
                <h2 className="text-xl md:text-4xl lg:text-6xl text-whiteText font-bold">
                    Elevate your <br></br> audio experience 
                </h2>
                <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 mt-4">
                High-Fidelity Headphones for the<br></br> Discerning Listener.Shop Now and Save
                </p>
            </div>
        </Container>
    );
};

export default SecondBanner;


