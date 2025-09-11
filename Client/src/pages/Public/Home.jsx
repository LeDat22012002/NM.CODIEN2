import {
    FactoryCulture,
    FactoryIntroduction,
    FactoryPersonnel,
    FactoryVision,
} from '../../components';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Thời gian chạy hiệu ứng (ms)
            once: false, // Chỉ chạy 1 lần khi scroll tới
            offset: 0, // Khoảng cách trước khi bắt đầu animation
        });
    }, []);
    return (
        <div className="flex flex-col gap-8 w-main">
            <FactoryIntroduction />
            <FactoryPersonnel />
            <FactoryCulture />
            <div className="flex justify-center">
                <FactoryVision />
            </div>
        </div>
    );
};

export default Home;
