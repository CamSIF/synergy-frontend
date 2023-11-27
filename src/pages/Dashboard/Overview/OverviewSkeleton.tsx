import React from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

const RowDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "51px",
});

const ContentDiv = styled("div")({
  padding: "0 16px 0",
  width: "100%",
});

export const OverviewSkeleton: React.FC<{}> = () => {
  return (
    <FlexCard responsive={{ xs: 12, sm: 6, md: 4 }}>
      <RowDiv>
        <div>
          <Skeleton variant="circular" width={"1.75em"} height={"1.75em"} />
        </div>
        <ContentDiv>
          <Skeleton variant="text" sx={{ fontSize: "1.2em" }} />
          <Skeleton variant="text" sx={{ fontSize: "0.9em" }} />
        </ContentDiv>
      </RowDiv>
    </FlexCard>
  );
};

export default OverviewSkeleton;
