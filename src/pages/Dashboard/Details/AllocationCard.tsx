import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";
import PieChartComponent from "src/components/DataDisplay/PieChart";

interface AllocationCardProps {
  title: string;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <PieChartComponent
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
    </DetailsCard>
  );
};

export default AllocationCard;
