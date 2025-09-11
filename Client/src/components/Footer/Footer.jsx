import { memo } from 'react';
import bgfooter from '../../assets/images/background_footer.png';
import lghp from '../../assets/images/Logo-Gang-thep-Trang.png';
import LGCD2 from '../../assets/images/LoGoCD2.png';
import bgfooterright from '../../assets/images/background_footer_right.png';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="bg-mainHP w-full h-[180px] relative ">
            <div className="flex items-center justify-between ">
                <img
                    src={bgfooter}
                    alt="footer"
                    className="w-2/12 h-[180px] object-cover"
                ></img>
                <div className="w-8/12 h-[180px] flex flex-col ">
                    <div className="grid grid-cols-4 grid-rows-1 gap-4">
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col items-center justify-center gap-2 m-4">
                                <img
                                    src={lghp}
                                    alt="logo"
                                    className="w-[60%] object-cover"
                                ></img>
                                <img
                                    src={LGCD2}
                                    alt="logo"
                                    className="w-[100px] object-cover mt-2"
                                ></img>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    ĐỊA CHỈ
                                </h3>
                                <div className="flex gap-1">
                                    <span className="font-semibold text-white text-[14px]">
                                        Khu kinh tế Dung Quất, Xã Vạn Tường,
                                        Tỉnh Quảng Ngãi
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    LIÊN HỆ
                                </h3>
                                <span className="font-semibold text-white text-[14px]"></span>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 ">
                            <div className="flex flex-col gap-2 m-3 ">
                                <h3 className="font-semibold text-white text-[20px]">
                                    KẾT NỐI VỚI CHÚNG TÔI
                                </h3>
                                <div className="flex items-center gap-6 pl-20">
                                    <FaFacebook color="white" size={30} />
                                    <IoLogoYoutube color="white" size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src={bgfooterright}
                    alt="footer"
                    className="w-2/12 h-[180px] object-cover"
                ></img>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <span className="text-[10px] text-white/80 flex italic justify-center">
                    Copyright © CNTT Nhà máy Cơ Điện 2 năm {year}
                </span>
            </div>
        </div>
    );
};

export default memo(Footer);
