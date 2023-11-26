import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography';
import { LineChartComponentProps } from 'src/types/LineChartType';

export default function LineChartComponent({xAxis, yAxis, title, width, height}: LineChartComponentProps) {
  const theme = useTheme()
  return (
    <Card sx={{ minWidth: 275 }}>
      <div>
        <div style={{paddingLeft: '5vw'}}>
          <h3 color="text.secondary" style={{marginBottom:'0', marginTop:'5'}}>
            {title}
          </h3>
          </div>
          <LineChart
            xAxis={[{data: xAxis}]}
            series={[
              {
                data: yAxis,
                color: theme.palette.secondary.main
              },
            ]}
            width={width}
            height={height}
          />
      </div>
    </Card> 
  );
}