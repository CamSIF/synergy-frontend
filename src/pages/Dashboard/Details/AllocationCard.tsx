import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";
import PieChartComponent from "src/components/PieChartComponent";

interface AllocationCardProps {
  title: string;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <PieChartComponent
        title="Test"
        data={[
          { id: 0, value: 10, label: "series A" },
          { id: 1, value: 15, label: "series B" },
          { id: 2, value: 20, label: "series C" },
        ]}
        percentage={false}
        width={400}
        height={200}
      />
    </DetailsCard>
  );
};

export default AllocationCard;
