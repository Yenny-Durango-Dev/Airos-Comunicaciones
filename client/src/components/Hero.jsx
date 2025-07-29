import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = ({ images,title, text, buttonText, buttonLink, showLogo = false, logo }) => {
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
            <div className="bg-[#00000090] w-[100%] max-w-[800px] h-[600px] flex flex-col justify-center items-center p-8 rounded-md text-black shadow-lg text-center overflow-hidden">
                {showLogo && logo && (
                    <img src={logo} alt="Logo" className="w-70 mx-auto mb-4" />
                )}
                <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
                <p className="text-lg md:text-xl mb-6 text-white">{text}</p>
                {buttonText && buttonLink && (
                    <Link to={buttonLink}>
                        <button className="bg-[#01377d] text-white px-6 py-3 rounded-md font-bold hover:bg-[#63a7ff] hover:text-black transition cursor-pointer">
                            {buttonText}
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Hero;
