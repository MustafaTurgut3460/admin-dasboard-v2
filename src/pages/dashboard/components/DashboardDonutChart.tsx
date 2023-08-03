import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const DashboardDonutChart = () => {

  const theme = useSelector((state: any) => state.theme).theme;

  const series = [44, 55, 41, 17, 15];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "donut",
      background: "transparent"
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1"
    },
    labels: ["Windows", "MacOS", "Linux", "Android", "IOS"],
    stroke: {
        width: 5,
    },
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
      <ReactApexChart options={options} series={series} type="donut"/>
    </div>
  );
};

export default DashboardDonutChart;
