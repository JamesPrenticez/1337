import React, { type ReactElement, useState } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle = ({ checked, onChange }: ToggleProps ): ReactElement => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = (): void => {
    console.log("here")
    setIsChecked(!isChecked);
    onChange(!isChecked);
  }

  return (
    <div className="relative flex rounded-full h-4 w-8 bg-red-500 border-2 border-black shadow-md ">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleClick}
      />

      <div className={`absolute ${ isChecked ? 'right-0' : 'left-0' } bg-yellow-400 w-4 h-4 rounded-full transform transition-transform duration-200 ease-in-out`}
      ></div>
    </div>
  );
};

export default Toggle;