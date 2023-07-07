interface BadgeProps {
  style: string;
  label: string;
  handleClick?: () => void;
}

const Badge = ({ style, label, handleClick }: BadgeProps) => {
  console.log("style", style);
  return (
    <span
      onClick={handleClick && handleClick}
      className={`${style} text-xs text-inter px-3 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300`}
    >
      {label}
    </span>
  );
};

export default Badge;
