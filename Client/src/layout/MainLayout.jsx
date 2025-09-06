import { Outlet } from 'react-router-dom';
import { Banner, Footer, HeaderPublic } from '../components';

const MainLayout = () => {
    return (
        <div className="flex flex-col items-center w-full">
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
