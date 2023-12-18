import React from "react";
import Typography from "@mui/material/Typography";

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <Typography variant="h4">{children}</Typography>;
};

export default CardHeader;
