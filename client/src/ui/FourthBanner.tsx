import { fourthBanner } from "../assets";
import Container from "./Container";

const FourthBanner = () => {
    return (
        <Container className="relative py-5 overflow-hidden">
            <div className="relative">
                <img
                    src={fourthBanner}
                    alt="fourthBanner"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
            </div>
        </Container>
    );
};

export default FourthBanner;


