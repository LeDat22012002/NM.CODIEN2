import { memo } from 'react';
import logo from '../../assets/images/Logo.png';
import { navigation } from '../../utils/constants';
import clsx from 'clsx';

const TopHeaderPublic = () => {
    return (
        <div className="w-full ">
            <div className="fixed top-0 left-0 right-0 z-50 w-full h-[60px] bg-white drop-shadow-md animate-slide-down">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-[50%] h-[60px]  ">
                        <img
                            src={logo}
                            alt="logoHP"
                            className="object-contain w-full h-[40px] "
                        />
                    </div>
                    <div className="flex items-center gap-2 w-[50%]">
                        <div className="flex items-center gap-2 px-4 py-2">
                            {navigation.map((el) => (
                                <div
                                    key={el.id}
                                    className={clsx(
                                        'flex items-center gap-1 px-3 py-1.5 text-[14px] rounded transition cursor-pointer text-black font-semibold'
                                    )}
                                >
                                    <h3
                                        className={clsx(
                                            'relative inline-block ',
                                            'after:content-[""] after:absolute after:-bottom-1.5 after:left-0 after:h-[3px]',
                                            'after:w-full after:bg-mainHP after:origin-left after:scale-x-0',
                                            'after:transition-transform after:duration-300',
                                            'hover:after:scale-x-100'
                                        )}
                                    >
                                        {el.value}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(TopHeaderPublic);
