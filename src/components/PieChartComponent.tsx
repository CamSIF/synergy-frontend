import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import Switch from '@mui/material/Switch';
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export type Data = {
    id: number
    value: number
    label: string
}

export interface PieChartComponentProps{
    data: any[]
    width?: number  
    height?: number
    percentage?: boolean
    title?: string
}

function convertDataToPercentage(data: Data[]): Data[] {
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

    const dataInPercentage = data.map(entry => ({
        ...entry,
        value: (entry.value / totalValue) * 100
    }));

    return dataInPercentage;
}

export default function PieChartComponent({data, width, height, title}: PieChartComponentProps) {
    const [percentage, setPercentage] = useState(true);

    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {title}
                <div style={{float: "right"}}>
                    <FormControlLabel
                        checked={percentage}
                        onChange={(event) => setPercentage((event.target as any).checked)}
                        control={<Switch color="primary" />}
                        label="show percentage"
                        labelPlacement="end"
                    />
                </div>

                <PieChart
                    series={[
                    {
                        data: percentage ? convertDataToPercentage(data) : data,
                    },
                    ]}
                    width={width}
                    height={height}
                />

            </Typography>
        </CardContent>
    </Card> 
    );
}
