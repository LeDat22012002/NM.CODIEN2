import { Outlet } from 'react-router-dom';
import {
    Banner,
    Footer,
    // Footer,
    HeaderPublic,
    TopHeaderPublic,
} from '../components';
import useScrollHandling from '../hooks/useScrollHandling';
import { useEffect, useState } from 'react';

const MainLayout = () => {
    const [showTopHeader, setShowTopHeader] = useState(false);
    const { scrollPosition } = useScrollHandling();
    // console.log('scroll', scrollPosition);
    useEffect(() => {
        if (scrollPosition > 80 && !showTopHeader) {
            setShowTopHeader(true);
        } else if (scrollPosition <= 80 && showTopHeader) {
            setShowTopHeader(false);
        }
    }, [scrollPosition, showTopHeader]);
    return (
        <div className="flex flex-col items-center w-full">
            {showTopHeader && <TopHeaderPublic />}
            <HeaderPublic />
            <Banner />
            <div className="flex flex-col items-center w-full mb-2">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
