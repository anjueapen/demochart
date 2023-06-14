import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const DonutChart = ({ data, colors, centerLabel }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        stroke="false"
        dominantBaseline="central"
      >
        {`${data[index].value}`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          label={renderCustomizedLabel}
          fill="#8884d8"
          labelLine={false}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <Label
            value={centerLabel}
            position="center"
            fontSize={18}
            fontWeight="bold"
            fill="#555"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
