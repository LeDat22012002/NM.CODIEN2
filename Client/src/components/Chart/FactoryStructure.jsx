import { memo } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { CustomNode } from '../';

const nodeTypes = {
    custom: CustomNode,
};
const nodes = [
    // Cấp 1: Giám đốc
    {
        id: '1',
        type: 'custom',
        data: {
            label: 'Giám đốc,Phó giám đốc nhà máy cơ điện 2',
            width: 150,
            height: 50,
        },
        position: { x: 350, y: -150 },
    },

    // Cấp 2: Quản đốc phân xưởng
    {
        id: '2',
        type: 'custom',
        data: { label: 'Kỹ thuật,kế hoạch', width: 80, height: 50 },
        position: { x: 60, y: -15 },
    },
    {
        id: '3',
        type: 'custom',
        data: {
            label: 'Quản đốc xưởng Cơ điện phụ trợ,XLN 110Kv ',
            width: 80,
            height: 50,
        },
        position: { x: 280, y: -15 },
    },
    {
        id: '4',
        type: 'custom',
        data: {
            label: 'Quản đốc,Phó quản đốc xưởng Cơ điện Nhiệt điện 1',
            width: 80,
            height: 50,
        },
        position: { x: 450, y: -15 },
    },

    {
        id: '5',
        type: 'custom',
        data: {
            label: 'Quản đốc,Phó quản đốc xưởng Cơ điện Nhiệt điện 2',
            width: 80,
            height: 50,
        },
        position: { x: 600, y: -15 },
    },

    {
        id: '6',
        type: 'custom',
        data: {
            label: 'Quản đốc,Phó quản đốc xưởng Cơ điện Luyện gang 1',
            width: 80,
            height: 50,
        },
        position: { x: 800, y: -15 },
    },
    {
        id: '7',
        type: 'custom',
        data: {
            label: 'Quản đốc,Phó quản đốc xưởng Cơ điện Luyện gang 2',
            width: 80,
            height: 50,
        },
        position: { x: 1000, y: -15 },
    },
    {
        id: '8',
        type: 'custom',
        data: { label: 'ANTMT', width: 40, height: 80 },
        position: { x: 230, y: 80 },
    },
    {
        id: '9',
        type: 'custom',
        data: { label: 'ANTMT', width: 40, height: 80 },
        position: { x: 230, y: 80 },
    },

    // Cấp 3: Phụ trách ca
    {
        id: '2a',
        type: 'custom',
        data: { label: 'Phụ trách Ca A1', width: 40, height: 80 },
        position: { x: 50, y: 80 },
    },
    {
        id: '2b',
        type: 'custom',
        data: { label: 'Phụ trách Ca A1', width: 40, height: 80 },
        position: { x: 110, y: 80 },
    },
    {
        id: '2c',
        type: 'custom',
        data: { label: 'KTV Cơ khí, CNTT', width: 40, height: 70 },
        position: { x: 150, y: 200 },
    },
    {
        id: '2d',
        type: 'custom',
        data: { label: 'KTV Cơ khí, CNTT', width: 40, height: 70 },
        position: { x: 180, y: 290 },
    },
    {
        id: '8a',
        type: 'custom',
        data: { label: 'Nhân viên ANTMT', width: 40, height: 70 },
        position: { x: 230, y: 200 },
    },

    // Cấp 4: Công nhân ca
    {
        id: '2a1',
        type: 'custom',
        data: { label: 'KTV ', width: 30, height: 70 },
        position: { x: 55, y: 200 },
    },

    {
        id: '2b1',
        type: 'custom',
        data: { label: 'KTV ', width: 30, height: 70 },
        position: { x: 115, y: 200 },
    },
    {
        id: '3a1',
        data: { label: 'Công nhân Ca B1 - 1' },
        position: { x: 420, y: 450 },
    },
    {
        id: '3b1',
        data: { label: 'Công nhân Ca B2 - 1' },
        position: { x: 520, y: 450 },
    },
    {
        id: '8a1',
        type: 'custom',
        data: { label: 'KTV ', width: 40, height: 70 },
        position: { x: 230, y: 290 },
    },
];

const edges = [
    // Cấp 1 → Cấp 2
    { id: 'e1-2', source: '1', target: '2', type: 'step', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true, type: 'step' },
    { id: 'e1-4', source: '1', target: '4', animated: true, type: 'step' },
    { id: 'e1-5', source: '1', target: '5', animated: true, type: 'step' },
    { id: 'e1-6', source: '1', target: '6', animated: true, type: 'step' },
    { id: 'e1-7', source: '1', target: '7', animated: true, type: 'step' },
    { id: 'e1-8', source: '1', target: '8', animated: true, type: 'step' },

    // Cấp 2 → Cấp 3
    { id: 'e2-2a', source: '2', type: 'step', animated: true, target: '2a' },
    { id: 'e2-2b', source: '2', type: 'step', animated: true, target: '2b' },
    { id: 'e2-2c', source: '2', type: 'step', animated: true, target: '2c' },
    { id: 'e2-2d', source: '2', type: 'step', animated: true, target: '2d' },
    { id: 'e3-3a', source: '3', type: 'step', animated: true, target: '3a' },
    { id: 'e3-3b', source: '3', type: 'step', animated: true, target: '3b' },
    { id: 'e8-8a', source: '8', type: 'step', animated: true, target: '8a' },

    // Cấp 3 → Cấp 4
    {
        id: 'e2a-2a1',
        source: '2a',
        type: 'step',
        animated: true,
        target: '2a1',
    },
    {
        id: 'e2a-2a2',
        source: '2a',
        type: 'step',
        animated: true,
        target: '2a2',
    },
    {
        id: 'e2b-2b1',
        source: '2b',
        type: 'step',
        animated: true,
        target: '2b1',
    },
    {
        id: 'e3a-3a1',
        source: '3a',
        type: 'step',
        animated: true,
        target: '3a1',
    },
    {
        id: 'e3b-3b1',
        source: '3b',
        type: 'step',
        animated: true,
        target: '3b1',
    },
    {
        id: 'e8a-8a1',
        source: '8a',
        type: 'step',
        animated: true,
        target: '8a1',
    },
];

const FactoryStructure = () => {
    return (
        <div style={{ width: '100%', height: '700px' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default memo(FactoryStructure);
