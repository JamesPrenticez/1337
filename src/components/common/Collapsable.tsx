import React, {useState, type ReactNode, type ReactElement} from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronDown } from "react-icons/hi";

interface CollapsibleProps {
  title: string;
  time: string;
  space: string;
  children: ReactNode
}

const Collapsible = ({title, time, space, children}: CollapsibleProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div>

        <div className="p-3 flex bg-gray-200 items-center w-full space-x-2">
          <h1 className='text-3xl grow'>{title}</h1>
          <h1 className='text-2xl font-medium ml-auto'>{time}</h1>
          <h1 className='text-2xl font-medium ml-auto'>{space}</h1>
          <div className='ml-auto'>
            {isOpen ?
              <HiOutlineChevronDown onClick={() => {setIsOpen(false)}} className='h-12 w-12 cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
              :
              <HiOutlineChevronLeft onClick={() => {setIsOpen(true)}} className='h-12 w-12 cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
            }
          </div>
        </div>

        {isOpen &&
          <div>
              <div className="p-3 bg-gray-100">
                {children}
              </div>
          </div>
        }

      </div>
  )
}

export default Collapsible
// https://medium.com/edonec/build-a-react-collapsible-component-from-scratch-using-react-hooks-typescript-73dfd02c9208