import React, { ReactNode } from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import CardHeader from "src/components/Title/CardHeader";
import { styled } from "@mui/material/styles";

import { ResponsiveStyle } from "src/types/FlexBox";

interface PnLCardProps {
  title: string;
  children: ReactNode;
  responsive: ResponsiveStyle;
}

const HeaderRow = styled("div")({
  margin: "0 0 16px",
});

export const DetailsCard: React.FC<PnLCardProps> = ({
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

export default DetailsCard;
