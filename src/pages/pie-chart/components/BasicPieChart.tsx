import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const BasicPieChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [44, 55, 13, 43, 22];
  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      width: 380,
      type: "pie",
      background: "transparent",
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={380}
      />
    </div>
  );
};

export default BasicPieChart;
