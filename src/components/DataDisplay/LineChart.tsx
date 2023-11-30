import { LineChart as Line } from "@mui/x-charts/LineChart";
import ChartTitle from "src/components/Title/ChartTitle";
import { YAxis } from "src/types/DataDisplay";
import { chooseColor } from "src/components/DataDisplay/color";

interface LineChartProps {
  xAxis: number[];
  series: YAxis[];
  width?: number;
  height?: number;
  title?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  xAxis,
  series,
  title,
  width,
  height,
}) => {
  return (
    <>
      {title && <ChartTitle>{title}</ChartTitle>}
      <Line
        xAxis={[{ data: xAxis }]}
        series={series.map((yaxis, idx) => ({
          ...yaxis,
          curve: "linear",
          color: chooseColor(idx),
        }))}
        width={width}
        height={height}
      />
    </>
  );
};

export default LineChart;
