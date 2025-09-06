import { Label, LabelBar } from '../../components';
import Banner6 from '../../assets/images/Br_HoaPhat.png';
import Banner7 from '../../assets/images/p11.jpg';

import { FaChevronRight } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="w-main">
            <div className="my-4">
                <Label title="THÔNG TIN NHÀ MÁY" />
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
                    src={Banner7}
                    alt="banner5"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>

                <div className="col-span-1 row-span-2 font-semibold text-white border border-gray-100 bg-mainHP">
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1">
                            <div className="m-2">
                                <LabelBar
                                    text="MÔ HÌNH"
                                    textColor="text-white"
                                    barColor="bg-white"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-1 text-[14px]">
                                <FaChevronRight size={16} color="white" />
                                <span>Ban Giám đốc</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Kỹ thuật</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Công nghệ</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 1</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-2">
                            <LabelBar
                                text="VĂN HÓA "
                                textColor="text-white"
                                barColor="bg-white"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={Banner6}
                    alt="banner6"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>
            </div>
            <div className="my-4">
                <Label title="THÔNG TIN NHÀ MÁY" />
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
                    src={Banner7}
                    alt="banner5"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>

                <div className="col-span-1 row-span-2 font-semibold text-white border border-gray-100 bg-mainHP">
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1">
                            <div className="m-2">
                                <LabelBar
                                    text="MÔ HÌNH"
                                    textColor="text-white"
                                    barColor="bg-white"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-1 text-[14px]">
                                <FaChevronRight size={16} color="white" />
                                <span>Ban Giám đốc</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Kỹ thuật</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Công nghệ</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 1</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-2">
                            <LabelBar
                                text="VĂN HÓA "
                                textColor="text-white"
                                barColor="bg-white"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={Banner6}
                    alt="banner6"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>
            </div>
            <div className="my-4">
                <Label title="THÔNG TIN NHÀ MÁY" />
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
                    src={Banner7}
                    alt="banner5"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>

                <div className="col-span-1 row-span-2 font-semibold text-white border border-gray-100 bg-mainHP">
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1">
                            <div className="m-2">
                                <LabelBar
                                    text="MÔ HÌNH"
                                    textColor="text-white"
                                    barColor="bg-white"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-1 text-[14px]">
                                <FaChevronRight size={16} color="white" />
                                <span>Ban Giám đốc</span>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Kỹ thuật</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Phòng Công nghệ</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2 text-[12px]">
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 1</span>
                                </div>
                                <div className="flex items-center justify-center w-1/2 gap-1">
                                    <FaChevronRight size={13} color="white" />
                                    <span>Xưởng Cơ điện PT 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-2">
                            <LabelBar
                                text="VĂN HÓA "
                                textColor="text-white"
                                barColor="bg-white"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={Banner6}
                    alt="banner6"
                    className="object-cover w-full h-full col-span-1 row-span-1"
                ></img>
            </div>
            <div className="my-4">
                <Label title="TIN TỨC NỔI BẬT" />
            </div>
        </div>
    );
};

export default Home;
