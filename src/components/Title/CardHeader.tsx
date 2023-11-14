import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Header1Props {
  children: string;
}

const StyledCardHeader = styled(Typography)({
    margin: "0.83em 0"
});

export const CardHeader: React.FC<Header1Props> = ({ children }) => {
  return <StyledCardHeader variant="h4">{children}</StyledCardHeader>;
};

export default CardHeader;
