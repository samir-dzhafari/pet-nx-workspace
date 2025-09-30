import { FC, ReactNode, createContext } from "react";
import * as React from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface SubComponentProps {
  children: ReactNode;
  className?: string;
}

const CardContext = createContext({});

export const Card: FC<CardProps> & {
  Title: FC<SubComponentProps>;
  Content: FC<SubComponentProps>;
  Actions: FC<SubComponentProps>;
} = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${className}`}
    >
      <CardContext.Provider value={{}}>{children}</CardContext.Provider>
    </div>
  );
};

Card.Title = ({ children, className = "" }: SubComponentProps) => (
  <h3 className={`text-lg font-semibold mb-2 px-4 pt-4 ${className}`}>
    {children}
  </h3>
);

Card.Content = ({ children, className = "" }: SubComponentProps) => (
  <div className={`flex-1 px-4 pb-4 ${className}`}>{children}</div>
);

Card.Actions = ({ children, className = "" }: SubComponentProps) => (
  <div className={`flex gap-2 p-4 mt-auto ${className}`}>{children}</div>
);
