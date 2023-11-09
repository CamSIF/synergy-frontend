import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material/styles';

export default function LineChartComponent() {
  const theme = useTheme()
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: theme.palette.secondary.main
        },
      ]}
      width={500}
      height={300}
    />
  );
}