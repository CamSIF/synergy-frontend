import { PieChart as Pie } from "@mui/x-charts/PieChart";
import ChartTitle from "src/components/Title/ChartTitle";
import Switch from "src/components/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { PieData } from "src/types/DataDisplay";
import { chooseColor } from "src/components/DataDisplay/color";
import { styled } from "@mui/material";

const SwitchDiv = styled("div")({
  float: "right",
});

const convertDataToPercentage = (data: PieData[]): PieData[] => {
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  const dataInPercentage = data.map((entry) => ({
    ...entry,
    value: (entry.value / totalValue) * 100,
  }));

  return dataInPercentage;
};

const convertToPieData = (
  percentageState: boolean,
  data: PieData[]
): PieData[] => {
  const convertPercentageData = percentageState
    ? convertDataToPercentage(data)
    : data;
  return convertPercentageData.map((datum, idx) => ({
    ...datum,
    id: idx,
    color: chooseColor(idx),
  }));
};

interface PieChartComponentProps {
  data: PieData[];
  width?: number;
  height?: number;
  percentage?: boolean | "toggle";
  title?: string;
}

export const PieChart: React.FC<PieChartComponentProps> = ({
  data,
  height,
  title,
  percentage,
}) => {
  const [percentageState, setPercentageState] = useState<boolean>(
    !!(percentage === "toggle" || percentage)
  );

  return (
    <>
      {title && <ChartTitle>{title}</ChartTitle>}
      {percentage === "toggle" && (
        <SwitchDiv>
          <Switch
            state={percentageState}
            setState={setPercentageState}
            label="Show percentage"
            labelPlacement="end"
          />
        </SwitchDiv>
      )}

      <Pie
        series={[
          {
            data: convertToPieData(percentageState, data),
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={height}
      />
    </>
  );
};

export default PieChart;
