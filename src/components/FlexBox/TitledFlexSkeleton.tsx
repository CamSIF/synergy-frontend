import React from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import CardHeader from "src/components/Title/CardHeader";
import Skeleton from "@mui/material/Skeleton";

import { ResponsiveStyle } from "src/types/FlexBox";
import { HeaderRow } from "src/components/FlexBox/TitledFlexCard";

interface DetailsSkeletonProps {
  responsive: ResponsiveStyle;
  height: number;
}

export const TitledFlexSkeleton: React.FC<DetailsSkeletonProps> = ({
  responsive,
  height,
}) => {
  return (
    <FlexCard responsive={responsive}>
      <HeaderRow>
        <CardHeader>
          <Skeleton />
        </CardHeader>
      </HeaderRow>
      <Skeleton variant="rounded" height={height} />
    </FlexCard>
  );
};

export default TitledFlexSkeleton;
