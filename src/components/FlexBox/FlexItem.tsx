import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import { ResponsiveStyle } from "src/types/FlexBox";

interface GridItemsProps {
  responsive: ResponsiveStyle;
  children: ReactNode;
}

export const FlexItem: React.FC<GridItemsProps> = ({
  responsive,
  children,
}) => {
  return (
    <Grid
      item
      xs={responsive.xs}
      sm={responsive.sm}
      md={responsive.md}
      lg={responsive.lg}
    >
      {children}
    </Grid>
  );
};

export default FlexItem;
