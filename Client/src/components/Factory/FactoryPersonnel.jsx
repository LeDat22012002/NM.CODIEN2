import { memo, useState } from 'react';
import { Label, LabelBar } from '../';
import Banner9 from '../../assets/images/dmst.jpg';

import bgfooter from '../../assets/images/background_footer.png';
import bgfooterright from '../../assets/images/background_footer_right.png';
import Banner7 from '../../assets/images/p11.jpg';
const FactoryPersonnel = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className="my-8">
                <Label title="MÔ HÌNH NHÂN SỰ" />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="col-span-1 row-span-1 border border-gray-400 shadow-md bg-mainHP"
                >
                    <div className="m-2 ">
                        <LabelBar
                            text="THÀNH VIÊN NHÀ MÁY"
                            textColor="text-white"
                            barColor="bg-white"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <h2 className="font-bold text-[100px] text-white">
                            798
                        </h2>
                        <h4 className="font-bold text-white">THÀNH VIÊN</h4>
                    </div>
                </div>

                <div
                    // data-aos="fade-left"
                    data-aos-delay="300"
                    className="w-full col-span-3 row-span-2 font-semibold text-white border border-gray-100 shadow-md "
                >
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1">
                            <div className="relative w-full h-[700px] bg-mainHP ">
                                <div className="absolute left-0 ml-2 top-2">
                                    <LabelBar
                                        text="SƠ ĐỒ TỔ CHỨC"
                                        textColor="text-white"
                                        barColor="bg-white"
                                    />
                                </div>
                                <div className="absolute left-0 right-0 flex items-center justify-between top-[20px]">
                                    <img
                                        src={bgfooter}
                                        alt="footer"
                                        className="object-cover w-full h-full"
                                    ></img>

                                    <img
                                        src={bgfooterright}
                                        alt="footer"
                                        className="object-cover w-full h-full"
                                    ></img>
                                </div>

                                {/* Overlay content */}
                                <div
                                    data-aos="fade-down"
                                    className="absolute left-0 right-0 flex justify-center z-49 top-[80px] "
                                >
                                    <div className="flex items-center gap-4 px-4 py-2 pr-6 rounded-sm shadow-md ">
                                        {/* Icon Next */}
                                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />

                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-white">
                                                BAN GIÁM ĐỐC NHÀ MÁY CƠ ĐIỆN 2
                                            </h3>
                                            <span className="text-sm italic font-semibold text-white/50">
                                                (GĐ. Vũ Thành Trung)
                                            </span>
                                        </div>

                                        {/* Icon Prev */}
                                        <div className="bg-no-repeat bg-icons bg-icon-prev w-icon h-icon" />
                                    </div>
                                </div>

                                <div className="absolute left-5 right-5 flex justify-between items-center z-49 top-[200px]">
                                    <div
                                        data-aos="fade-right"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        {/* Icon Next */}
                                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />

                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                KHỐI PHỤC VỤ CHUNG
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                X. CƠ ĐIỆN LUYỆN GANG 1
                                            </h3>
                                            {/* <span className="text-sm italic font-semibold text-gray-700">
                                                    (QĐ. Trần Văn Phong)
                                                </span> */}
                                        </div>

                                        {/* Icon Prev */}
                                        <div className="bg-no-repeat bg-icons bg-icon-prev w-icon h-icon" />
                                    </div>
                                </div>

                                <div className="absolute left-5 right-5 flex justify-between items-center z-49 top-[320px] ">
                                    <div
                                        data-aos="fade-right"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        {/* Icon Next */}
                                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />

                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                X. CƠ ĐIỆN NHIỆT ĐIỆN 1
                                            </h3>
                                            {/* <span className="text-sm italic font-semibold text-gray-700">
                                                    (QĐ. Chưa biết)
                                                </span> */}
                                        </div>
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                X. CƠ ĐIỆN LUYỆN GANG 2
                                            </h3>
                                            {/* <span className="text-sm italic font-semibold text-gray-700">
                                                    (QĐ. Đỗ Quang Trưởng, Lê Văn
                                                    Hồng Hiệp)
                                                </span> */}
                                        </div>

                                        {/* Icon Prev */}
                                        <div className="bg-no-repeat bg-icons bg-icon-prev w-icon h-icon" />
                                    </div>
                                </div>

                                <div className="absolute left-5 right-5 flex justify-between items-center z-49 top-[440px]">
                                    <div
                                        data-aos="fade-right"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        {/* Icon Next */}
                                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />

                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                X. CƠ ĐIỆN NHIỆT ĐIỆN 2
                                            </h3>
                                            {/* <span className="text-sm italic font-semibold text-gray-700">
                                                    (QĐ. Hồ Thanh Uyên)
                                                </span> */}
                                        </div>
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        className="flex items-center gap-4 px-4 py-2 rounded-sm shadow-md bg-white/70 "
                                    >
                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold text-black">
                                                X. CƠ ĐIỆN NĂNG LƯỢNG, TRẠM
                                                110KV
                                            </h3>
                                            {/* <span className="text-sm italic font-semibold text-gray-700">
                                                    (QĐ. Phan Trọng Thật)
                                                </span> */}
                                        </div>

                                        {/* Icon Prev */}
                                        <div className="bg-no-repeat bg-icons bg-icon-prev w-icon h-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full h-full col-span-1 row-span-1 shadow-md "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Ảnh nền */}
                    <img
                        data-aos="zoom-in"
                        src={Banner9}
                        alt="banner6"
                        className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-[1000ms] ease-in-out opacity-100"
                        style={{ opacity: isHovered ? 0 : 1 }}
                    />
                    {/* Ảnh hover */}
                    <img
                        src={Banner7}
                        alt="banner-hover"
                        className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-[1000ms] ease-in-out opacity-0"
                        style={{ opacity: isHovered ? 1 : 0 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(FactoryPersonnel);
