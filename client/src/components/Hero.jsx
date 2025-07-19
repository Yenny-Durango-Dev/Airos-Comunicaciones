import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = ({ images, text, buttonText, buttonLink, showLogo = false, logo }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const multipleImages = images.length > 1;

    useEffect(() => {
        if (!multipleImages) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images, multipleImages]);

    return (
        <div
            className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center transition-all duration-2000 ease-in-out"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="bg-[#01377d67] backdrop-blur-md p-8 rounded-md text-black shadow-lg text-center">
                {showLogo && logo && (
                    <img src={logo} alt="Logo" className="w-70 mx-auto mb-4" />
                )}
                <p className="text-lg md:text-xl mb-6 text-white">{text}</p>
                {buttonText && buttonLink && (
                    <Link to={buttonLink}>
                        <button className="bg-[#01377d] text-white px-6 py-3 rounded-md font-bold hover:bg-[#63a7ff] hover:text-black transition">
                            {buttonText}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Hero;
