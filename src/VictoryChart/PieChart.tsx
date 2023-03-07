import React from "react";
import { VictoryLabel, VictoryPie } from "victory";

import { amount_by_categories } from "../util";

const CustomLabel = ({ datum }): any => (
  <VictoryLabel
    text={`${datum.x}\n${datum.y}`}
    x={100}
    y={100}
    textAnchor="middle"
    verticalAnchor="middle"
    style={{ fontSize: 12 }}
  />
);

function PieChart() {
  return (
    <VictoryPie
      data={amount_by_categories}
      labelComponent={<CustomLabel />}
      width={400}
      height={200}
      labelPosition="startAngle"
    />
  );
}

export default PieChart;
