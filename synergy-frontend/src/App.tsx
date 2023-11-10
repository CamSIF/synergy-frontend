import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import { ChartContainer } from '@mui/x-charts';
import { LineChart, LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import DataGridDemo from './grid';
import BasicCard from './components/BasicCard';
import BasicLineChart from './components/BasicLineChart';
// import BasicLineChart from './components/BasicLineChart';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function App() {
  return (
    <Container maxWidth="sm">
      <div style={{'display': 'flex'}}>
        <Box sx={{ my: 8 }}>
          <h2 style={{'color':'grey'}}>Overview</h2>
          <div style={{'display': 'flex'}}>
            {/* <Skeleton variant="rounded" width={210} height={60} /> */}
            <BasicCard/>
            <BasicCard/>
            <BasicCard/>
          </div>
          <h2 style={{'color':'grey'}}>Details</h2>
          <div style={{'display': 'flex'}}>
            <BasicLineChart/>

          </div>
          

          <div  style={{'display': 'flex'}}>

            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </Box>

      </div>

    </Container>
  );
}