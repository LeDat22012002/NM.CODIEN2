import { memo } from 'react';

const FooterBottom = () => {
    const year = new Date().getFullYear();

    return (
        <div className="w-full z-[9999] h-[40px] bg-mainHP flex justify-between items-center px-4 text-white">
            <div>
                <span className="font-bold">
                    Copyright © CNTT Nhà máy Cơ điện 2
                </span>
            </div>
            <div className="font-bold">
                <span>Nhà máy Cơ điện 2 năm {year}</span>
            </div>
        </div>
    );
};

export default memo(FooterBottom);
