import { memo, useState, useEffect } from 'react';
import Banner1 from '../../assets/images/che-tao-kim-loai.jpg';
import Banner4 from '../../assets/images/dien-lanh.jpg';
import Banner5 from '../../assets/images/Banner1.jpg';

const images = [Banner1, Banner4, Banner5];

const Banner = () => {
    const [index, setIndex] = useState(0);

    // Tự động đổi ảnh sau 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="relative w-full h-[600px] mx-auto">
            <img
                src={images[index]}
                alt="banner"
                className="object-cover w-full h-full transition-all duration-500 rounded-sm "
            />

            <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-2 left-1/2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`w-5 h-1 transition-all duration-300 cursor-pointer ${
                            index === i ? 'bg-main scale-125' : 'bg-gray-200'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(Banner);
