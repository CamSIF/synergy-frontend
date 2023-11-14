import React, { ReactNode } from "react";
import FlexItem from "src/components/FlexBox/FlexItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ResponsiveStyle } from "src/types/FlexBox";

interface FlexCardProps {
  responsive: ResponsiveStyle;
  children: ReactNode;
}

export const FlexCard: React.FC<FlexCardProps> = ({ responsive, children }) => {
  return (
    <FlexItem responsive={responsive}>
      <Card elevation={2}>
        <CardContent>{children}</CardContent>
      </Card>
    </FlexItem>
  );
};

export default FlexCard;
