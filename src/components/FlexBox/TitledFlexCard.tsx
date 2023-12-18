import React, { ReactNode } from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import CardHeader from "src/components/Title/CardHeader";
import { styled } from "@mui/material/styles";

import { ResponsiveStyle } from "src/types/FlexBox";

interface DetailsCardProps {
  title: string;
  children: ReactNode;
  responsive: ResponsiveStyle;
}

export const HeaderRow = styled("div")({
  margin: "0 0 16px",
});

export const TitledFlexCard: React.FC<DetailsCardProps> = ({
  title,
  children,
  responsive,
}) => {
  return (
    <FlexCard responsive={responsive}>
      <HeaderRow>
        <CardHeader>{title}</CardHeader>
      </HeaderRow>
      {children}
    </FlexCard>
  );
};

export default TitledFlexCard;
