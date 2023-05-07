import React, {type ReactElement} from 'react';

interface FormControlProps {
  label: string;
  children: React.ReactNode;
};

const FormControl = ({ label, children }: FormControlProps): ReactElement => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormControl;