import { memo } from 'react';
import { Label, LabelBar } from '../';
import Banner6 from '../../assets/images/Screenshot_2.png';
const FactoryIntroduction = () => {
    return (
        <div>
            <div className="my-4">
                <Label title="THÔNG TIN NHÀ MÁY" />
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                <div className="col-span-2 row-span-1 ">
                    <div className="">
                        <LabelBar
                            text="GIỚI THIỆU"
                            textColor="text-black"
                            barColor="bg-black"
                        />
                    </div>
                    <div data-aos="fade-right" className="flex flex-col px-4">
                        <span className="font-sans text-sm">
                            Nhà máy Cơ Điện 2 được thành lập vào ngày{' '}
                            <span className="font-semibold text-black">01</span>{' '}
                            tháng{' '}
                            <span className="font-semibold text-black">07</span>{' '}
                            năm{' '}
                            <span className="font-semibold text-black">
                                2023
                            </span>{' '}
                            , là đơn vị bảo trì, sửa chữa thiết bị, dây chuyền
                            cho 04 đơn vị sản xuất: Nhà máy Luyện Gang 1, nhà
                            máy Luyện Gang 2, nhà máy Nhiệt Điện 1, nhà máy
                            Nhiệt Điện 2. Đảm bảo, tăng cường tính sẵn sàng
                            thiết bị, nâng cao tuổi thọ của thiết bị trong quá
                            trình sử dụng và hạn chế những sự cố rủi ro thiết bị
                            gây ra. Đảm bảo phục vụ sản xuất an toàn, vệ sinh
                            môi trường, tiết kiệm và đạt hiệu quả cao nhất.
                        </span>
                        <span className="font-sans text-sm">
                            Nhà máy Cơ Điện 2 được quản lý, định hướng quản lý
                            trên tinh thần đảm bảo thiết bị hoạt động ổn định,
                            phục vụ sản xuất ở hiệu suất cao nhất.
                        </span>
                    </div>
                    <div className="mt-2">
                        <LabelBar
                            text="NHIỆM VỤ"
                            textColor="text-black"
                            barColor="bg-black"
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <span className="font-sans text-sm">
                            Chịu trách nhiệm chủ trì, phối hợp thực hiện từ khâu
                            lập kế hoạch, chuẩn bị tới thực hiện, đánh giá hiệu
                            quả các công việc sau đối với cụm thiết bị Nhà máy
                            Luyện gang, Nhà máy Nhiệt điện,Luyện gang 2 và Nhiệt
                            điện 2:
                        </span>
                        <span className="font-sans text-sm">
                            ➤ Bảo trì: Hằng ngày, định kỳ, nguội cơ hội, chiến
                            lược, trung/đại tu,
                        </span>
                        <span className="font-sans text-sm">
                            ➤ Sửa chữa, lắp đặt gia công: Phục hồi thiết bị thay
                            ra , gia công, lắp đặt mới, cải tiến - cải tạo.
                        </span>
                        <span className="font-sans text-sm">
                            ➤ Hiệu chuẩn, kiểm định.
                        </span>
                    </div>
                </div>

                <img
                    data-aos="fade-left"
                    src={Banner6}
                    alt="banner5"
                    className="object-cover w-full h-full col-span-2 row-span-1 p-1 shadow-xl shadow-gray-600/70"
                ></img>
            </div>
        </div>
    );
};

export default memo(FactoryIntroduction);
