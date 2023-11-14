import React from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface OverviewCardProps {
  icon: JSX.Element;
  title: string;
  amount: number;
}

const RowDiv = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ContentDiv = styled("div")({
  padding: "0 16px 0",
});

const Amount = styled(Typography)({
  fontWeight: "bolder",
  fontSize: "1.2em",
}) as typeof Typography;

const Title = styled(Typography)({
  fontSize: "0.9em",
}) as typeof Typography;

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const OverviewCard: React.FC<OverviewCardProps> = ({
  icon,
  title,
  amount,
}) => {
  return (
    <FlexCard responsive={{ xs: 12, sm: 6, md: 4 }}>
      <RowDiv>
        {icon}
        <ContentDiv>
          <Amount>£ {numberFormatter.format(amount)}</Amount>
          <Title color="text.secondary">{title}</Title>
        </ContentDiv>
      </RowDiv>
    </FlexCard>
  );
};

export default OverviewCard;