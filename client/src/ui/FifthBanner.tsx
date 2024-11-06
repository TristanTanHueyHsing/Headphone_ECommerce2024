import { fifthBanner } from "../assets";
import Container from "./Container";
import LinkButton2 from "./LinkButton2";

const FifthBanner = () => {
    return (
        <Container className="relative py-5 overflow-hidden">
            <div className="relative">
                <img
                    src={fifthBanner}
                    alt="fifthBanner"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center px-10">
                <h2 className="text-xl md:text-4xl lg:text-6xl text-whiteText font-bold">
                    Learn the basics <br></br>of audio
                </h2>
                <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
                    Click the button below <br></br>to go to our guide
                </p>
                <LinkButton2 className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
            </div>
        </Container>
    );
};

export default FifthBanner;