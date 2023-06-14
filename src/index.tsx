import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import DonutChart from "./DonutChart";
const data = [
  { name: "vc A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DonutChart data={data} colors={COLORS} centerLabel="Sunday" />
      <DonutChart data={data} colors={COLORS} centerLabel="monday" />
    </StyledEngineProvider>
  </React.StrictMode>
);
