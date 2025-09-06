import { memo } from 'react';
import logo from '../../assets/images/Logo.png';
import { navigation } from '../../utils/constants';
import clsx from 'clsx';
const HeaderPublic = () => {
    return (
        <div className="w-full h-[100px] bg-white">
            <div className="flex items-center justify-between ">
                <div className="flex items-center w-[50%] h-[100px]">
                    <img
                        src={logo}
                        alt="logoHP"
                        className="object-contain w-full h-[60px] "
                    />
                </div>
                <div className="flex items-center gap-2 w-[50%]">
                    <div className="flex items-center gap-2 px-4 py-2">
                        {navigation.map((el) => (
                            <button
                                key={el.id}
                                // onClick={() => handleActive(el?.value)}
                                className={clsx(
                                    'flex items-center gap-1 px-3 py-1.5 text-sm border rounded border-blue-600 transition'
                                    //   currentNav === el.value
                                    //     ? 'bg-blue-600 text-white'
                                    //     : 'text-blue-600 hover:bg-blue-100'
                                )}
                            >
                                {el.value}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HeaderPublic);
