import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import CardComponent from "./components/CardComponent";
import LineChartComponent from "./components/LineChartComponent";
import { Button } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm">
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <Box sx={{ my: 8 }}>
          <h2>Overview</h2>
          <div style={{ display: "flex" }}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <h2>Details</h2>
          <div style={{ display: "flex" }}>
            <LineChartComponent />
          </div>

          <div style={{ display: "flex" }}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </Box>
      </div>

      <Button variant="contained">Hi</Button>
      <Button variant="contained" color="secondary">
        Hi
      </Button>

    </Container>
  );
}
