import React from "react";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ results, showHours }) => {
  const timestamps = [];
  const tempratures = [];
  const { start, end } = showHours;
  console.log(showHours);

  const generateDateSets = () => {
    results.list.slice(start, end).forEach((forecast, index) => {
      let forecastDate = new Date(forecast.dt * 1000);
      let hour = forecastDate.getHours();
      let ampm = hour >= 12 ? "pm" : "am";
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      let timeStr = `${hour} ${ampm}`;
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
  return <Line data={data} options={options} />;
};

export default LineChart;
