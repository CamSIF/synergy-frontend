import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";
import LineChartComponent from "src/components/LineChartComponent";

interface PnLCardProps {
  title: string;
}

export const PnLCard: React.FC<PnLCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 12 }}>
      <LineChartComponent xAxis={[{ data: [1, 2, 3] }]} yAxis={[1, 4, 9]} />
    </DetailsCard>
  );
};

export default PnLCard;
