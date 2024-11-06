import { thirdBanner } from "../assets";
import Container from "./Container";

const ThirdBanner = () => {
    return (
        <Container className="relative py-5 overflow-hidden">
            <div className="relative">
                <img
                    src={thirdBanner}
                    alt="thirdBanner"
                    className="w-full h-full object-cover rounded-md" 
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
            </div>
        </Container>
    );
};

export default ThirdBanner