import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";
import LineChart from "src/components/DataDisplay/LineChart";
import { YAxis } from "src/types/DataDisplay";

interface PnLCardProps {
  title: string;
}

export const PnLCard: React.FC<PnLCardProps> = ({ title }) => {
  const MockSeries: YAxis[] = [
    {
      data: [2, 5.5, 2, 8.5, -1, 5],
      label: "One",
    },
    {
      data: [10, 2, 6, -2, 7, 5],
      label: "Two",
    },
    {
      data: [8, 3, 1, 5, 4, 0],
      label: "Three",
    },
    {
      data: [0, 10, 0, 6, 0, 5],
      label: "Four",
    },
  ];

  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 12 }}>
      <LineChart
        xAxis={[1, 2, 3, 5, 8, 10]}
        series={MockSeries}
        title={"Sample line chart"}
        height={300}
      />
    </DetailsCard>
  );
};

export default PnLCard;
