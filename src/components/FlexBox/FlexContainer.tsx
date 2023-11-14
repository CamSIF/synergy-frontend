import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";

interface GridContainerProps {
  spacing?: number | string;
  children: ReactNode;
}

export const FlexContainer: React.FC<GridContainerProps> = ({
  spacing = "24px",
  children,
}) => {
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
};

export default FlexContainer;
