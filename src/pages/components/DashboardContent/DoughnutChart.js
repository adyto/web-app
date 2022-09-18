import React from "react";
import { useState } from "react";
// import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const [userData, setUserData] = useState({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  return <div>CHART</div>;
};

export default DoughnutChart;
