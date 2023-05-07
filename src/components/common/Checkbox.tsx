import React, { type ReactElement } from 'react';

interface CheckboxProps {
  value: string | number;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ value, checked, onChange }: CheckboxProps): ReactElement => {
  return (
    <input
      type="checkbox"
      className="h-5 w-5 text-blue-600 checked:bg-green-500"
      checked={checked}
      value={value}
      onChange={(e) => {onChange(e.target.checked)}}
    />
  );
};

export default Checkbox;