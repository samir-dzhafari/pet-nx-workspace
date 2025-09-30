import { FC, JSX, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const createTypography = (tag: keyof JSX.IntrinsicElements, baseClass: string): FC<TypographyProps> => {
  return ({ children, className = "" }) => {
    const Component = tag as any;
    return <Component className={`${baseClass} ${className}`}>{children}</Component>;
  };
};

export const Typography = {
  H1: createTypography("h1", "font-roboto font-bold text-4xl leading-tight"),
  H2: createTypography("h2", "font-roboto font-bold text-3xl leading-snug"),
  H3: createTypography("h3", "font-roboto font-semibold text-2xl leading-snug"),
  H4: createTypography("h4", "font-roboto font-semibold text-xl leading-snug"),
  H5: createTypography("h5", "font-roboto font-medium text-lg leading-snug"),
  H6: createTypography("h6", "font-roboto font-medium text-base leading-snug"),
  Body: createTypography("p", "font-roboto font-normal text-base leading-relaxed"),
  Caption: createTypography("span", "font-roboto font-normal text-sm leading-snug text-gray-600"),
  Small: createTypography("small", "font-roboto font-light text-xs leading-snug text-gray-500"),
};
