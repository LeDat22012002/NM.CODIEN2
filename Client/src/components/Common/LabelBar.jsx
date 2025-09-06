import { memo } from 'react';
import clsx from 'clsx';
const LabelBar = ({ text, textColor, barColor }) => {
    return (
        <div className="flex ">
            <div className={clsx('w-[3px] h-[17px] mr-2', barColor)}></div>
            <h3 className={clsx('font-bold text-[14px] ', textColor)}>
                {text}
            </h3>
        </div>
    );
};

export default memo(LabelBar);
