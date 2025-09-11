import { memo } from 'react';

const FactoryVision = () => {
    return (
        <div className="my-10 w-[400px] flex justify-center ">
            <div className="flex flex-col items-center justify-center gap-8">
                {/* Item 1 */}
                <div data-aos="fade-right" className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                        <h3 className="font-semibold text-[25px] italic">
                            TẦM NHÌN
                        </h3>
                    </div>
                    <div className="flex flex-col items-start gap-3 pl-3">
                        <span className="text-sm italic">
                            Gì đó gì đó gì đó
                        </span>
                        <div className="h-px bg-mainHP w-[400px]"></div>
                    </div>
                </div>

                {/* Item 2 */}
                <div
                    data-aos="fade-left"
                    className="flex flex-col justify-center"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                        <h3 className="font-semibold text-[25px] italic">
                            CHIẾN LƯỢC
                        </h3>
                    </div>
                    <div className="flex flex-col items-start gap-3 pl-3">
                        <span className="text-sm italic">
                            Với định hướng lấy{' '}
                            <span className="font-semibold">Chất lượng</span> -{' '}
                            <span className="font-semibold">An toàn</span> -{' '}
                            <span className="font-semibold">Đổ mới</span> làm
                            giá trị cốt lõi, Nhà máy Cơ Điện 2 triển khai chiến
                            lược phát triển toàn diện nhằm nâng cao năng lực
                            cạnh tranh và đóng góp bền vững cho hệ sinh thái sản
                            xuất của Hòa Phát
                        </span>
                        <div className="h-px bg-mainHP w-[400px]"></div>
                    </div>
                </div>

                {/* Item 3 */}
                {/* <div data-aos="fade-right" className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                        <h3 className="font-semibold text-[25px]">
                            GIÁ TRỊ CỐT LÕI
                        </h3>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-sm italic">
                            Gì đó gì đó gì đó
                        </span>
                        <div className="h-px bg-mainHP w-[200px]"></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default memo(FactoryVision);
