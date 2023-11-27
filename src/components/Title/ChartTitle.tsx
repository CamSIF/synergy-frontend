import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface ChartHeaderProps {
  children: string;
}

const StyledChartTitle = styled(Typography)({
  margin: "0 0 0 2em",
}) as typeof Typography;

export const ChartTitle: React.FC<ChartHeaderProps> = ({ children }) => {
  return <StyledChartTitle color="text.secondary">{children}</StyledChartTitle>;
};

export default ChartTitle;
