import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";
import PieChartComponent from "src/components/PieChartComponent";

const data1 = { id: 0, value: 10, label: "series A" }
const data2 = { id: 1, value: 15, label: "series B" }
const data3 = { id: 2, value: 20, label: "series C" }
const pieChartData = [data1, data2, data3]

interface AllocationCardProps {
  title: string;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <PieChartComponent
        data={pieChartData}
        height={200}
        width={400}
        percentage={true}
        title={"sample pie chart"}
      />
    </DetailsCard>
  );
};

export default AllocationCard;
