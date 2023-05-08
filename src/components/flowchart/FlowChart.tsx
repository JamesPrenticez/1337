import React, { useState, useCallback, type ReactElement } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type FitViewOptions,
  type Node,
  type Edge,
  // NodeChange,
  // EdgeChange,
  // Connection,
  type NodeTypes,
  type DefaultEdgeOptions,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
} from 'reactflow';

import MyCustomNode from './MyCustomNode';
import 'reactflow/dist/style.css';

const nodeTypes: NodeTypes = {
  custom: MyCustomNode,
};


const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', job: 'CEO', emoji: '😎' },
    position: { x: -500, y: -500 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Tyler Weary', job: 'Designer', emoji: '🤓' },

    position: { x: 0, y: 100 },
  },
];

const initialEdges: Edge[] = [
  {
    id: '1->2',
    source: '1',
    target: '2',
    animated: false,
  },
];

const FlowChart = ():ReactElement => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {setNodes((nds) => applyNodeChanges(changes, nds))},
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {setEdges((eds) => applyEdgeChanges(changes, eds))},
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => {setEdges((eds) => addEdge(connection, eds))},
    [setEdges]
  );

  const proOptions = { hideAttribution: true };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={fitViewOptions}
      defaultEdgeOptions={defaultEdgeOptions}
      className="bg-teal-50"
      proOptions={proOptions}
    />
  );
}

export default FlowChart