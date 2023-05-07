import React, { type ReactElement, type ReactNode} from 'react'

interface BodyProps {
  children: ReactNode
}

const Body = ({children}: BodyProps): ReactElement => {
  return (
    <div className='w-full max-w-7xl mx-auto min-h-screenNav bg-white'>
      {children}
    </div>
  )
}

export default Body