import React from "react";

type SpinnerProps = {
  size?: number;
  color?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 48,
  color = "border-blue-500",
}) => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <div
        className={`border-4 border-dashed rounded-full animate-spin ${color}`}
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};
