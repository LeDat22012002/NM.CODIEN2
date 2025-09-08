import { memo } from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => {
    return (
        <div
            className="relative flex items-center justify-center px-2 py-1 text-center rounded shadow-lg"
            style={{
                width: data.width || 180,
                height: data.height || 60,
                backgroundColor: data.bgColor || '#1D4ED8',
                border: '1px solid #0f172a',
                color: data.textColor || 'white',
                fontSize: data.fontSize || 8,
                fontWeight: 500,
                lineHeight: 1.2,
                wordBreak: 'break-word',
                padding: '0.25rem 0.5rem',
            }}
        >
            <span className="w-full leading-tight">{data.label}</span>

            {/* Handle kết nối (tuỳ chọn) */}
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default memo(CustomNode);
