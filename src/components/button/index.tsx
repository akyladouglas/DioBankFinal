import { Button as ButtonChakra } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  colorScheme?: string;
  color?: string;
  size: string;
  onClick: () => void;
  children: ReactNode;
  width?: string;
}

export const Button = ({
  colorScheme,
  color,
  size,
  onClick,
  children,
  width,
}: ButtonProps) => {
  return (
    <ButtonChakra
      colorScheme={colorScheme}
      backgroundColor={color}
      color="#f3f3f3"
      size={size}
      onClick={onClick}
      width={width}
    >
      {children}
    </ButtonChakra>
  );
};
