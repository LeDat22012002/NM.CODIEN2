import { memo } from 'react';
import { Label } from '../';
const FactoryVision = () => {
    return (
        <div>
            <div className="my-4">
                <Label title="ĐỊNH HƯỚNG" />
            </div>
        </div>
    );
};

export default memo(FactoryVision);
