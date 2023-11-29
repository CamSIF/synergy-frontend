import React from "react";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import PieChart from "src/components/DataDisplay/PieChart";

export const AllocationCard: React.FC<{}> = () => {
  return (
    <TitledFlexCard
      title="Allocation per equity"
      responsive={{ xs: 12, sm: 12, md: 6 }}
    >
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
