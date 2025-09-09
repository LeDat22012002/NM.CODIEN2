import { memo } from 'react';
import { Label, LabelBar } from '../';
import Banner7 from '../../assets/images/p11.jpg';
import Banner8 from '../../assets/images/Image.jfif';
const FactoryCulture = () => {
    return (
        <div>
            <div className="my-4">
                <Label title="VĂN HÓA NHÀ MÁY" />
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                <div className="col-span-2 row-span-1">
                    <div className="">
                        <LabelBar
                            text="VĂN HÓA LAO ĐỘNG"
                            textColor="text-black"
                            barColor="bg-black"
                        />
                    </div>
                    <div
                        data-aos="fade-right"
                        className="flex flex-col gap-1 px-4"
                    >
                        <span className="font-mono text-sm">
                            Khẩu hiệu “An toàn là số 1” không chỉ là lời nhắc
                            nhở, mà đã trở thành nguyên tắc sống trong từng thao
                            tác làm việc. Mỗi công nhân đều tuân thủ nghiêm ngặt
                            quy định bảo hộ lao động, giữ gìn không gian xưởng
                            luôn gọn gàng - sạch sẽ và đảm bảo quy trình vận
                            hành đúng chuẩn
                        </span>
                        <span className="font-mono text-sm">
                            Ở đây, tinh thần đồng đội được thể hiện rõ qua sự
                            phối hợp nhịp nhàng giữa ca trưởng và công nhân, qua
                            sự hỗ trợ lẫn nhau để công việc trôi chảy. Mỗi người
                            đều mang trong mình tinh thần trách nhiệm, làm việc
                            hăn say. Và càng ý nghĩa hơn khi trong nhà máy vẫn
                            còn đó những câu chuyện gắn bó nhiều năm, xem nhà
                            máy như là ngôi nhà thứ 2 của mình.
                        </span>
                    </div>
                    <div className="">
                        <LabelBar
                            text="TINH THẦN SÁNG TẠO"
                            textColor="text-black"
                            barColor="bg-black"
                        />
                    </div>
                    <div data-aos="fade-right" className="px-4">
                        <span className="font-mono text-sm">
                            Với tinh thần không ngừng học hỏi và đổi mới anh em
                            công nhân viên Nhà máy Cơ Điện 2 đã tạo nên nhiều
                            dấu ấn với nhiều giải pháp cải tiến cải tạo đã giúp
                            tăng cường hiệu quả sản xuất. Đây là thành quả từ sự
                            phối hợp chặt chẽ giữa các thành viên trong nhóm và
                            tinh thần sáng tạo trong từng giải pháp. Nhà máy Cơ
                            điện 2 tự hào khi góp phần tối ưu hóa hoạt động sản
                            xuất qua từng năm của Thép Hòa Phát Dung Quất
                        </span>
                    </div>
                </div>
                <div className="w-full h-full col-span-1 row-span-1 ">
                    <img
                        data-aos="fade-up-left"
                        src={Banner7}
                        alt="banner5"
                        className="object-cover w-full h-full border border-gray-600 "
                    />
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
    );
};

export default memo(FactoryCulture);
