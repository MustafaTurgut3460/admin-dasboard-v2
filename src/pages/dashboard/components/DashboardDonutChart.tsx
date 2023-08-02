import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardDonutChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "donut",

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
