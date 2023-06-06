import React from "react";

interface BoxProp {
  icon: React.ReactNode;
  bgColor: string;
  label: string;
  value: string;
}

const Box = (props: BoxProp) => {
  const { bgColor, icon, label, value } = props;
  return (
    <div className="w-72 h-24 border-2 mt-2 shadow:3xl bg-gray-300 rounded-lg border-border-100">
      <div className="h-full flex items-center pl-8">
        <div
          className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="pl-4">
          <span className="font-inter text-xl font-medium">{value}</span>
          <p className="text-sm text-gray-500 font-inter font-normal">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
