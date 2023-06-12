import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  disabled: boolean;
  type: "button" | "submit" | "reset" | undefined;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  disabled,
  type,
  containerStyle,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex flex-row relative justify-center items-center py-2 px-4 outline-none">
        {title}
      </span>
    </button>
  );
};

export default CustomButton;
