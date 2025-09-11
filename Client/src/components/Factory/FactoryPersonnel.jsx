import { memo, useState } from 'react';
import { Label, LabelBar } from '../';
import Banner9 from '../../assets/images/dmst.jpg';
import bgfooter from '../../assets/images/background_footer.png';
import bgfooterright from '../../assets/images/background_footer_right.png';
import Banner7 from '../../assets/images/p11.jpg';

const FactoryPersonnel = () => {
    const [isHovered, setIsHovered] = useState(false);

    const rows = [
        { left: 'KHỐI PHỤC VỤ CHUNG', right: 'X. CƠ ĐIỆN LUYỆN GANG 1' },
        { left: 'X. CƠ ĐIỆN NHIỆT ĐIỆN 1', right: 'X. CƠ ĐIỆN LUYỆN GANG 2' },
        {
            left: 'X. CƠ ĐIỆN NHIỆT ĐIỆN 2',
            right: 'X. CƠ ĐIỆN NĂNG LƯỢNG, TRẠM 110KV',
        },
    ];

    const baseTopLeft = 225; // vị trí hàng đầu tiên
    const baseTopRight = 260; // vị trí hàng đầu tiên
    const spacing = 115; // khoảng cách giữa các hàng

    return (
        <div>
            <div className="my-8">
                <Label title="MÔ HÌNH NHÂN SỰ" />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {/* Cột bên trái */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="col-span-1 row-span-1 border border-gray-400 shadow-xl shadow-gray-600/70 bg-mainHP"
                >
                    <div className="m-2">
                        <LabelBar
                            text="THÀNH VIÊN NHÀ MÁY"
                            textColor="text-white"
                            barColor="bg-white"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10 ">
                        <h2 className="font-bold text-[100px] text-white">
                            798
                        </h2>
                        <h4 className="font-bold text-white">THÀNH VIÊN</h4>
                    </div>
                </div>

                {/* Sơ đồ tổ chức */}
                <div
                    data-aos-delay="300"
                    className="w-full col-span-3 row-span-2 font-semibold text-white border border-gray-100 shadow-gray-600/70"
                >
                    <div className="flex flex-col gap-1 shadow-xl ">
                        <div className="relative w-full h-[700px] bg-gray-300">
                            {/* Đường dọc chính */}
                            <div
                                data-aos="fade-down"
                                className="absolute top-[145px] h-[370px] w-px bg-mainHP left-1/2"
                            ></div>

                            {/* Tiêu đề */}
                            <div className="absolute left-0 ml-2 top-2">
                                <LabelBar
                                    text="SƠ ĐỒ TỔ CHỨC"
                                    textColor="text-white"
                                    barColor="bg-white"
                                />
                            </div>

                            {/* Họa tiết nền */}
                            <div className="absolute left-0 right-0 flex items-center justify-between top-[20px]">
                                <img
                                    src={bgfooter}
                                    alt="footer"
                                    className="object-cover w-full h-full"
                                />
                                <img
                                    src={bgfooterright}
                                    alt="footer"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Ban giám đốc */}
                            <div
                                data-aos="fade-down"
                                className="absolute left-0 right-0 flex justify-center z-49 top-[80px]"
                            >
                                <div className="flex items-center gap-4 px-4 py-2 pr-6 rounded-sm shadow-md bg-mainHP">
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

                            {/* Map rows */}
                            {rows.map((row, idx) => {
                                const top = baseTopLeft + idx * spacing;
                                return (
                                    <div
                                        data-aos="fade-right"
                                        key={`left-${idx}`}
                                        className="absolute flex items-center"
                                        style={{
                                            top: `${top}px`,
                                            right: '50%',
                                        }} // dính về bên trái
                                    >
                                        {/* Box trái */}
                                        <div className="flex items-center justify-end px-7 py-2 rounded-sm shadow-md bg-mainHP w-[400px]">
                                            <h3 className="font-semibold text-white truncate">
                                                {row.left}
                                            </h3>
                                            <div className="bg-no-repeat bg-icons bg-icon-prev w-icon h-icon" />
                                        </div>

                                        {/* Đường ngang nối vào trục */}
                                        <div className="h-px bg-mainHP w-[40px]"></div>
                                    </div>
                                );
                            })}

                            {/* Map box phải */}
                            {rows.map((row, idx) => {
                                const top = baseTopRight + idx * spacing;
                                return (
                                    <div
                                        data-aos="fade-left"
                                        key={`right-${idx}`}
                                        className="absolute flex items-center"
                                        style={{ top: `${top}px`, left: '50%' }} // dính về bên phải
                                    >
                                        {/* Đường ngang nối vào trục */}
                                        <div className="h-px bg-mainHP w-[40px]"></div>

                                        {/* Box phải */}
                                        <div className="flex items-center justify-start px-4 py-2 rounded-sm shadow-md bg-mainHP w-[400px]">
                                            <div className="mr-2 bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                                            <h3 className="font-semibold text-white truncate">
                                                {row.right}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Cột bên phải */}
                <div
                    className="relative w-full h-full col-span-1 row-span-1 "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Ảnh nền */}
                    <img
                        data-aos="zoom-in"
                        src={Banner9}
                        alt="banner6"
                        className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-[1000ms] ease-in-out opacity-100 p-1 shadow-gray-600/70"
                        style={{ opacity: isHovered ? 0 : 1 }}
                    />
                    {/* Ảnh hover */}
                    <img
                        src={Banner7}
                        alt="banner-hover"
                        className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-[1000ms] ease-in-out opacity-0 p-1 shadow-gray-600/70"
                        style={{ opacity: isHovered ? 1 : 0 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(FactoryPersonnel);
