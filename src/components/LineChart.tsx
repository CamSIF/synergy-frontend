import { LineChart as Line } from "@mui/x-charts/LineChart";
import ChartTitle from "src/components/Title/ChartTitle";
import { YAxis } from "src/types/DataDisplay";

interface LineChartProps {
  xAxis: number[];
  series: YAxis[];
  width?: number;
  height?: number;
  title?: string;
}

export default function LineChart({
  xAxis,
  series,
  title,
  width,
  height,
}: LineChartProps) {
  return (
    <>
      {title && <ChartTitle>{title}</ChartTitle>}
      <Line
        xAxis={[{ data: xAxis }]}
        series={series.map((yaxis) => ({ ...yaxis, curve: "linear" }))}
        width={width}
        height={height}
      />
    </>
  );
}
