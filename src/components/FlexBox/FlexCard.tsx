import React, { ReactNode } from "react";
import FlexItem from "src/components/FlexBox/FlexItem";
import Card from "@mui/material/Card";
import { ResponsiveStyle } from "src/types/FlexBox";
import { styled } from "@mui/material/styles";

interface FlexCardProps {
  responsive: ResponsiveStyle;
  children: ReactNode;
}

const StyledCard = styled(Card)({
  padding: "16px",
});

export const FlexCard: React.FC<FlexCardProps> = ({ responsive, children }) => {
  return (
    <FlexItem responsive={responsive}>
      <StyledCard elevation={2}>{children} </StyledCard>
    </FlexItem>
  );
};

export default FlexCard;
