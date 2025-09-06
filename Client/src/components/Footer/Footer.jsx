import { memo } from 'react';
import bgfooter from '../../assets/images/background_footer.png';
import bgfooterright from '../../assets/images/background_footer_right.png';
const Footer = () => {
    return (
        <div className="bg-mainHP w-full h-[400px]">
            <div className="flex items-center justify-between ">
                <img
                    src={bgfooter}
                    alt="footer"
                    className="w-2/12 h-[400px] object-cover"
                ></img>
                <div className="w-8/12 h-[400px] ">Main</div>
                <img
                    src={bgfooterright}
                    alt="footer"
                    className="w-2/12 h-[400px] object-cover"
                ></img>
            </div>
        </div>
    );
};

export default memo(Footer);
