import { memo } from 'react';
import bgfooter from '../../assets/images/background_footer.png';
import lghp from '../../assets/images/Logo-Gang-thep-Trang.png';
import LGCD2 from '../../assets/images/LoGoCD2.png';
import bgfooterright from '../../assets/images/background_footer_right.png';
const Footer = () => {
    return (
        <div className="bg-mainHP w-full h-[200px] shadow-xl shadow-gray-600/70 shadow-top ">
            <div className="flex items-center justify-between ">
                <img
                    src={bgfooter}
                    alt="footer"
                    className="w-2/12 h-[200px] object-cover"
                ></img>
                <div className="w-8/12 h-[200px] ">
                    <div className="grid grid-cols-4 grid-rows-1 gap-4">
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col items-center justify-center gap-2 m-4">
                                <img
                                    src={lghp}
                                    alt="logo"
                                    className="w-[80%] object-cover"
                                ></img>
                                <img
                                    src={LGCD2}
                                    alt="logo"
                                    className="w-[100px]  object-cover"
                                ></img>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    ĐỊA CHỈ
                                </h3>
                                <span className="font-semibold text-white text-[14px]">
                                    Khu kinh tế Dung Quất, Xã Vạn Tường , Tỉnh
                                    Quảng Ngãi
                                </span>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    LIÊN HỆ
                                </h3>
                                <span className="font-semibold text-white text-[14px]">
                                    Khu kinh tế Dung Quất, Xã Vạn Tường , Tỉnh
                                    Quảng Ngãi
                                </span>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    KẾT NỐI
                                </h3>
                                <span className="font-semibold text-white text-[14px]">
                                    Khu kinh tế Dung Quất, Xã Vạn Tường , Tỉnh
                                    Quảng Ngãi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={bgfooterright}
                    alt="footer"
                    className="w-2/12 h-[200px] object-cover"
                ></img>
            </div>
        </div>
    );
};

export default memo(Footer);
