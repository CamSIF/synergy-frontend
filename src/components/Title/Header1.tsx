import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Header1Props {
  children: string;
}

const StyledHeader1 = styled(Typography)({
    margin: "0.67em 0"
});

export const Header1: React.FC<Header1Props> = ({ children }) => {
  return <StyledHeader1 variant="h1">{children}</StyledHeader1>;
};

export default Header1;
