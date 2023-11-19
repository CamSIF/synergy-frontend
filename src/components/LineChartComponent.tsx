import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography';

export type LineChartData = {
  id: number
  value: number
  label: string
}

export interface LineChartComponentProps{
  xAxis: [{}] //e.g. xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
  yAxis: number[]
  width?: number  
  height?: number
  title?: string
}

export default function LineChartComponent({xAxis, yAxis, title, width, height}: LineChartComponentProps) {
  const theme = useTheme()
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <LineChart
            xAxis={xAxis}
            series={[
              {
                data: yAxis,
                color: theme.palette.secondary.main
              },
            ]}
            width={500}
            height={300}
          />
        </Typography>
      </CardContent>
    </Card> 
  );
}