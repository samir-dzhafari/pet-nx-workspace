import { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 ${className}`}>{children}</div>
  );
};
