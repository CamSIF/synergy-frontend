import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";
import { LineChart, PieChart } from "@mui/x-charts";
import LineChartComponent from "src/components/LineChartComponent";
import PieChartComponent from "src/components/PieChartComponent";

const data1 = { id: 0, value: 10, label: "series A" }
const data2 = { id: 1, value: 15, label: "series B" }
const data3 = { id: 2, value: 20, label: "series C" }
const pieChartData = [data1, data2, data3]

export const Dashboard: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header1>Dashboard</Header1>
      <Overview />
      <Details />
      <LineChartComponent xAxis={[1, 2, 3, 5, 8, 10]} yAxis={[2, 5.5, 2, 8.5, 1.5, 5]} title={"sample line chart"} height={300} width={500}/>
      <PieChartComponent
              data = {pieChartData}
              height={200}
              width={400}
              percentage={true}
              title={'sample pie chart'}
            />
    </Wrapper>
  );
};

export default Dashboard;
