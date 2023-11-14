import React, { ReactNode } from "react";
import { styled } from "@mui/system";

interface WrapperProps {
  children: ReactNode;
}

const StyledWrapper = styled("div")({
  padding: "24px 48px",
});

export const Header1: React.FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Header1;
