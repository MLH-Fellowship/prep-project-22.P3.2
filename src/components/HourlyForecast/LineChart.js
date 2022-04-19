import React from "react";
import classes from "./css/HourlyForecast.module.css";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getTimeStr } from "../../utils/hourlyForecast";
import { tempConversionNoUnit } from "../../utils/unitConversion";

const LineChart = ({ currentUnit, results, showHours }) => {
  const timestamps = [];
  const tempratures = [];
  const { start, end } = showHours;

  const generateDateSets = () => {
    results.list.slice(start, end).forEach((forecast) => {
      let timeStr = getTimeStr(forecast.dt);
      timestamps.push(timeStr);
      tempratures.push(tempConversionNoUnit(currentUnit, forecast.main.temp));
    });
  };
  generateDateSets();

  const data = {
    labels: [...timestamps],
    datasets: [
      {
        label: "Temperature",
        data: [...tempratures],
        backgroundColor: "rgb(15, 144, 254, .3)",
        borderColor: "#1e59ac",
        fill: true,
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
