import { memo } from 'react';

const Label = ({ title }) => {
    return (
        <div className="relative inline-block ">
            <div className="px-4 py-2 font-semibold text-white bg-mainHP">
                {title}
            </div>
            <div className="absolute top-0 right-[-45px] w-0 h-0 border-t-[40px] border-t-transparent border-l-[45px] border-l-mainHP"></div>
        </div>
    );
};

export default memo(Label);
