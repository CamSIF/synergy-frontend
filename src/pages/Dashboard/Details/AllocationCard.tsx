import React from "react";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import PieChart from "src/components/DataDisplay/PieChart";

interface AllocationCardProps {
  title: string;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title }) => {
  return (
    <TitledFlexCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <PieChart
        title="Sample pie chart"
        data={[
          { value: 10, label: "series A" },
          { value: 15, label: "series B" },
          { value: 20, label: "series C" },
          { value: 5, label: "series D" },
        ]}
        percentage={"toggle"}
        height={200}
      />
    </TitledFlexCard>
  );
};

export default AllocationCard;
