import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart component to display counter values as a line chart
const CounterChart = ({ dataPoints }) => {
  // data for the chart
  const chartData = {
    labels: dataPoints.map((index) => index),
    datasets: [
      {
        label: "Counter Linear Graph",
        data: dataPoints,
        borderColor: "rgb(255,0,0)", // border color
        backgroundColor: "rgb(0,0,255)", // fill color
        innerWidth: 10,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // options for the x and y axis in chart
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Times ",
          color: "black",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Counter Value",
          color: "black",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default CounterChart;
