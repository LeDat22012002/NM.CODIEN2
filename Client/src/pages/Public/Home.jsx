import { FactoryStructure, Label, LabelBar } from '../../components';
import Banner6 from '../../assets/images/Br_HoaPhat.png';
import Banner7 from '../../assets/images/p11.jpg';
import Banner8 from '../../assets/images/Image.jfif';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';
const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 800, // Thời gian chạy hiệu ứng (ms)
            once: false, // Chỉ chạy 1 lần khi scroll tới
            offset: 0, // Khoảng cách trước khi bắt đầu animation
        });
    }, []);
    return (
        <div className="flex flex-col gap-8 w-main">
            <div>
                <div className="my-4">
                    <Label title="THÔNG TIN NHÀ MÁY" />
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-2 ">
                        <div className="m-2">
                            <LabelBar
                                text="GIỚI THIỆU"
                                textColor="text-black"
                                barColor="bg-black"
                            />
                        </div>
                        <div className="px-4">
                            <span className="font-mono text-sm">
                                Nhà máy Cơ điện 2 là đơn vị thực hiện công tác
                                bảo trì , sửa chữa, lắp đặt, gia công, hiệu
                                chuẩn, kiểm định cho cụm thiết bị Nhà máy Luyện
                                gang, Nhà máy Nhiệt điện, Ban Dự án Luyện gang 2
                                và Ban Dự án Nhiệt điện 2 được hoạt động ổn
                                định, đảm bảo sản xuất. Đảm bảo, tăng cường tính
                                sẵn sàng thiết bị, nâng cao tuổi thọ của thiết
                                bị trong quá trình sử dụng và hạn chế những sự
                                cố rủi ro thiết bị gây ra. Đảm bảo phục vụ sản
                                xuất an toàn, vệ sinh môi trường, tiết kiệm và
                                đạt hiệu quả cao nhất.
                            </span>
                        </div>
                    </div>
                    <img
                        src={Banner7}
                        alt="banner5"
                        className="object-cover w-full h-full col-span-1 row-span-1"
                    ></img>

                    <div className="col-span-1 row-span-2 font-semibold text-white border border-gray-100 shadow-md bg-mainHP">
                        <div className="flex flex-col gap-1 ">
                            <div className="flex flex-col gap-1">
                                <div className="m-2">
                                    <LabelBar
                                        text="NHIỆM VỤ"
                                        textColor="text-white"
                                        barColor="bg-white"
                                    />
                                </div>
                                <div className="flex flex-col px-2">
                                    <span className="font-mono text-sm">
                                        Chịu trách nhiệm chủ trì, phối hợp thực
                                        hiện từ khâu lập kế hoạch, chuẩn bị tới
                                        thực hiện, đánh giá hiệu quả các công
                                        việc sau đối với cụm thiết bị Nhà máy
                                        Luyện gang, Nhà máy Nhiệt điện, Ban Dự
                                        án Luyện gang 2 và Ban Dự án Nhiệt điện
                                        2:
                                    </span>
                                    <span className="font-mono text-sm">
                                        ➤ Bảo trì: Hằng ngày, định kỳ, nguội cơ
                                        hội, chiến lược, trung/đại tu,
                                    </span>
                                    <span className="font-mono text-sm">
                                        ➤ Sửa chữa, lắp đặt gia công: Phục hồi
                                        thiết bị thay ra , gia công, lắp đặt
                                        mới, cải tiến - cải tạo.
                                    </span>
                                    <span className="font-mono text-sm">
                                        ➤ Hiệu chuẩn, kiểm định.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="m-2">
                                    <LabelBar
                                        text="QUYỀN HẠN"
                                        textColor="text-white"
                                        barColor="bg-white"
                                    />
                                </div>
                                <div className="px-2">
                                    <span className="font-mono text-sm">
                                        Được đề nghị các kế hoạch, cơ chế, chính
                                        sách để triển khai công việc của nhà
                                        máy. Trực tiếp làm việc với các đơn vị
                                        liên quan ở trong và ngoài Công ty khi
                                        cần thiết để yêu cầu, đề nghị phối hợp
                                        trong phạm vi đã có chủ trương chung của
                                        BGĐ, đúng với chức năng, nhiệm vụ đã quy
                                        định của các đơn vị. Được lập biên bản
                                        và đề xuất biện pháp, hình thức xử lý
                                        đối với các hành vi vi phạm, sự việc
                                        phát sinh trong phạm vi quản lý, liên
                                        quan tới công việc của bộ phận.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={Banner7}
                        alt="banner5"
                        className="object-cover w-full h-full col-span-1 row-span-1"
                    ></img>
                </div>
            </div>
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
                        data-aos="fade-left"
                        data-aos-delay="300"
                        className="col-span-3 row-span-2 font-semibold text-white border border-gray-100 shadow-md "
                    >
                        <div className="flex flex-col gap-1 ">
                            <div className="flex flex-col gap-1">
                                <div className="m-2">
                                    <LabelBar
                                        text="MÔ HÌNH"
                                        textColor="text-black"
                                        barColor="bg-black"
                                    />
                                </div>

                                <FactoryStructure />
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
                            src={Banner6}
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
            <div>
                <div className="my-4">
                    <Label title="VĂN HÓA NHÀ MÁY" />
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-2 border border-gray-400">
                        <div className="m-2">
                            <LabelBar
                                text="GIỚI THIỆU"
                                textColor="text-black"
                                barColor="bg-black"
                            />
                        </div>
                    </div>
                    <img
                        data-aos="fade-up-left"
                        src={Banner7}
                        alt="banner5"
                        className="object-cover w-full h-full col-span-1 row-span-1 shadow-md"
                    ></img>

                    <div
                        data-aos="fade-up-right"
                        className="col-span-1 row-span-1 font-semibold text-white border border-gray-100 shadow-md bg-mainHP"
                    >
                        <div className="flex flex-col gap-1 "></div>
                    </div>
                    <div
                        data-aos="fade-down-left"
                        className="col-span-1 row-span-1 font-semibold text-white border border-gray-100 shadow-md bg-mainHP"
                    >
                        <div className="flex flex-col gap-1 ">
                            {/* <div className="flex flex-col gap-1">
                            <div className="m-2">
                                <LabelBar
                                    text="MÔ HÌNH"
                                    textColor="text-white"
                                    barColor="bg-white"
                                />
                            </div>
                        </div> */}
                            {/* <div className="m-2">
                            <LabelBar
                                text="VĂN HÓA "
                                textColor="text-white"
                                barColor="bg-white"
                            />
                        </div> */}
                        </div>
                    </div>
                    <div className="w-full h-full col-span-1 row-span-1 ">
                        <img
                            data-aos="fade-down-right"
                            src={Banner8}
                            alt="banner6"
                            className="object-cover w-full h-full "
                        />
                    </div>
                </div>
            </div>
            <div className="my-4">
                <Label title="TIN TỨC NỔI BẬT" />
            </div>
        </div>
    );
};

export default Home;
