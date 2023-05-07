

// type NodeData = {
//   value: number;
// };

// type CustomNode = Node<NodeData>;

// function MyCustomNode({ data }: NodeProps<NodeData>) {
//   return <div className='bg-red-500'>A big number: {data.value}</div>;
// }

// export default MyCustomNode

import React, { memo, type ReactElement } from 'react';
import type { NodeProps } from 'reactflow';
import { Handle, Position } from 'reactflow';

// This is effectivly NodeProps.data
interface NodeData {
  name: string;
  job: string;
  emoji: string;
};

const MyCustomNode = ({ data }: NodeProps<NodeData>): ReactElement => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(MyCustomNode);