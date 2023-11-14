import React from "react";
import Typography from "@mui/material/Typography";

interface Header1Props {
  children: string;
}

export const CardHeader: React.FC<Header1Props> = ({ children }) => {
  return <Typography variant="h4">{children}</Typography>;
};

export default CardHeader;
