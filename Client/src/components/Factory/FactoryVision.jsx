import { memo } from 'react';

const FactoryVision = () => {
    return (
        <div className="my-10">
            <div className="flex flex-col items-center justify-center gap-8">
                {/* Item 1 */}
                <div data-aos="fade-right" className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                        <h3 className="font-semibold text-[25px]">TẦM NHÌN</h3>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-sm italic">
                            Gì đó gì đó gì đó
                        </span>
                        <div className="h-px bg-mainHP w-[200px]"></div>
                    </div>
                </div>

                {/* Item 2 */}
                <div data-aos="fade-left" className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-no-repeat bg-icons bg-icon-next w-icon h-icon" />
                        <h3 className="font-semibold text-[25px]">
                            CHIẾN LƯỢC
                        </h3>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-sm italic">
                            Gì đó gì đó gì đó
                        </span>
                        <div className="h-px bg-mainHP w-[200px]"></div>
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
