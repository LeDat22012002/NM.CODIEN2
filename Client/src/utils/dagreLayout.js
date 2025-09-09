import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getLayoutedElements = (nodes, edges, direction = 'TB') => {
    dagreGraph.setGraph({ rankdir: direction });

    const nodeDefaultWidth = 120;
    const nodeDefaultHeight = 50;

    // Chỉ thêm vào Dagre những node KHÔNG có sẵn position
    nodes.forEach((node) => {
        if (!node.position && !node.isFixed) {
            dagreGraph.setNode(node.id, {
                width: node.data?.width || nodeDefaultWidth,
                height: node.data?.height || nodeDefaultHeight,
            });
        }
    });

    // Thêm tất cả edges (Dagre cần để tính layout chuẩn)
    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        // Nếu node đã có position => giữ nguyên
        if (node.position) return node;

        const dagrePos = dagreGraph.node(node.id);
        return {
            ...node,
            position: {
                x: dagrePos.x,
                y: dagrePos.y,
            },
            positionAbsolute: {
                x: dagrePos.x,
                y: dagrePos.y,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};
