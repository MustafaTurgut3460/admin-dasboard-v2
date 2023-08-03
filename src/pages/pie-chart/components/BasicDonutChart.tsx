import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const BasicDonutChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [44, 55, 41, 17, 15];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "donut",
      background: "transparent",
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1",
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
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={380}
      />
    </div>
  );
};

export default BasicDonutChart;
