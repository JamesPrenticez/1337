import React, { type ReactElement} from 'react'
import FlowChart from '../components/flowchart/FlowChart'

const RoadMap = (): ReactElement => {
  return (
    <div>
      <h1>RoadMap</h1>
      <div className='h-screen'>
        <FlowChart />
      </div>
    </div>
  )
}

export default RoadMap