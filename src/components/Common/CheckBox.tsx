import { useState } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = event.target.checked;
    setIsChecked(newCheckedValue);
    if (onChange) {
      onChange(newCheckedValue);
    }
  };

  return (
    <input
      className="w-4 h-4 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
