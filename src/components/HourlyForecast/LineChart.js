import React from "react";
import classes from "./HourlyForecast.module.css";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getTimeStr } from "../../utils/hourlyForecast";

const LineChart = ({ results, showHours }) => {
  const timestamps = [];
  const tempratures = [];
  const { start, end } = showHours;

  const generateDateSets = () => {
    results.list.slice(start, end).forEach((forecast, index) => {
      let timeStr = getTimeStr(forecast.dt);
      timestamps.push(timeStr);
      tempratures.push(forecast.main.temp);
    });
  };
  generateDateSets();

  const data = {
    labels: [...timestamps],
    datasets: [
      {
        label: "Temperature in Celsius",
        data: [...tempratures],
        fill: false,
        backgroundColor: "#1e59ac",
        borderColor: "rgb(131, 156, 192, .3)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "black",
        },
      },
      x: {
        ticks: {
          color: "black",
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className={classes.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
