import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Header1Props {
  children: string;
}

const StyledHeader2 = styled(Typography)({
    margin: "0.83em 0"
});

export const Header2: React.FC<Header1Props> = ({ children }) => {
  return <StyledHeader2 variant="h2" color="text.secondary">{children}</StyledHeader2>;
};

export default Header2;
