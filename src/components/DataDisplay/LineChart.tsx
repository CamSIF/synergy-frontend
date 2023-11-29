import { LineChart as Line } from "@mui/x-charts/LineChart";
import ChartTitle from "src/components/Title/ChartTitle";
import { YAxis } from "src/types/DataDisplay";
import { chooseColor } from "src/components/DataDisplay/color";

interface LineChartProps {
  xAxis: (string | number)[];
  series: YAxis[];
  width?: number;
  height?: number;
  title?: string;
}

const containString = (array: (string | number)[]): boolean => {
  for (const i in array) {
    if (typeof i === "string") {
      return true;
    }
  }
  return false;
};

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
          xAxis={[
            {
              scaleType: containString(xAxis) ? "point" : undefined,
              data: xAxis,
            },
          ]}
          series={series.map((yaxis, idx) => ({
            ...yaxis,
            curve: "linear",
            color: chooseColor(idx),
          }))}
          width={width}
          height={height}
          sx={{ overflowX: "scroll" }}
        />
    </>
  );
};

export default LineChart;
