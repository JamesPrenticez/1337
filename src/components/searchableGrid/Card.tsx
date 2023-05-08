import React, { type ReactElement } from "react";
import { motion } from "framer-motion";

import { type IAlgorithmData } from '../../modals/IData'
import { Link } from "react-router-dom";

const Card = ({ item }: { item: IAlgorithmData}): ReactElement => {

  return (
    <Link to="/algorithms/two-number-sum">
      <motion.li 
        tabIndex={0}
        className="relative rounded-md cursor-pointer select-none border-2 border-sky-500 hover:bg-sky-400/20 transition-colors duration-400 ease-in-out"
        layoutId={item.id}
      >
        <div className="flex items-center h-full w-full rounded-md px-2 space-x-5">
          <h1 className="flex-grow truncate">{item.id}. {item.title}</h1>
          <div 
            className={`
              rounded-full
              h-2
              w-2
              ${item.difficulty === 'easy' ? 'bg-green-500' :
              item.difficulty === 'medium' ? 'bg-orange-500'
              : 'bg-red-500'}
              justify-self-end
            `}/>
        </div>
      </motion.li>
    </Link>
  )
};

export default Card