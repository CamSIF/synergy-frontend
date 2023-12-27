import React from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface OverviewCardProps {
  icon: JSX.Element;
  title: string;
  value: string;
}

const IconDiv = styled("div")({
  width: "28px",
  textAlign: "center"
});

const RowDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "51px",
});

const ContentDiv = styled("div")({
  padding: "0 16px 0",
});

export const Value = styled(Typography)({
  fontWeight: "bolder",
  fontSize: "1.2em",
}) as typeof Typography;

export const Title = styled(Typography)({
  fontSize: "0.9em",
}) as typeof Typography;

export const OverviewCard: React.FC<OverviewCardProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <FlexCard responsive={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <RowDiv>
        <IconDiv>{icon}</IconDiv>
        <ContentDiv>
          <Value>{value}</Value>
          <Title color="text.secondary">{title}</Title>
        </ContentDiv>
      </RowDiv>
    </FlexCard>
  );
};

export default OverviewCard;
