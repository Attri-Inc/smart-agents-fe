import React, { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  disabled: boolean;
  type: "button" | "submit" | "reset" | undefined;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
}

const ButtonWithIcon = ({
  title,
  disabled,
  type,
  icon,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`text-white w-full bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      onClick={handleClick}
    >
      <span className="pr-2"> {icon}</span>
      {title}
    </button>
  );
};

export default ButtonWithIcon;
