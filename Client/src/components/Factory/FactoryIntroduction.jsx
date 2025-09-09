import { memo } from 'react';
import { Label, LabelBar } from '../';
import Banner6 from '../../assets/images/Br_HoaPhat.png';
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
                    <div data-aos="fade-right" className="px-4">
                        <span className="font-mono text-sm">
                            Nhà máy Cơ điện 2 là đơn vị thực hiện công tác bảo
                            trì , sửa chữa, lắp đặt, gia công, hiệu chuẩn, kiểm
                            định cho cụm thiết bị Nhà máy Luyện gang, Nhà máy
                            Nhiệt điện, Luyện gang 2 và Nhiệt điện 2 được hoạt
                            động ổn định, đảm bảo sản xuất. Đảm bảo, tăng cường
                            tính sẵn sàng thiết bị, nâng cao tuổi thọ của thiết
                            bị trong quá trình sử dụng và hạn chế những sự cố
                            rủi ro thiết bị gây ra. Đảm bảo phục vụ sản xuất an
                            toàn, vệ sinh môi trường, tiết kiệm và đạt hiệu quả
                            cao nhất.
                        </span>
                    </div>
                    <div className="">
                        <LabelBar
                            text="NHIỆM VỤ"
                            textColor="text-black"
                            barColor="bg-black"
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        <span className="font-mono text-sm">
                            Chịu trách nhiệm chủ trì, phối hợp thực hiện từ khâu
                            lập kế hoạch, chuẩn bị tới thực hiện, đánh giá hiệu
                            quả các công việc sau đối với cụm thiết bị Nhà máy
                            Luyện gang, Nhà máy Nhiệt điện,Luyện gang 2 và Nhiệt
                            điện 2:
                        </span>
                        <span className="font-mono text-sm">
                            ➤ Bảo trì: Hằng ngày, định kỳ, nguội cơ hội, chiến
                            lược, trung/đại tu,
                        </span>
                        <span className="font-mono text-sm">
                            ➤ Sửa chữa, lắp đặt gia công: Phục hồi thiết bị thay
                            ra , gia công, lắp đặt mới, cải tiến - cải tạo.
                        </span>
                        <span className="font-mono text-sm">
                            ➤ Hiệu chuẩn, kiểm định.
                        </span>
                    </div>
                </div>

                <img
                    data-aos="fade-left"
                    src={Banner6}
                    alt="banner5"
                    className="object-cover w-full h-full col-span-2 row-span-1"
                ></img>
            </div>
        </div>
    );
};

export default memo(FactoryIntroduction);
