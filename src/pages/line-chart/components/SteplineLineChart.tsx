import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const SteplineLineChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [
    {
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "line",
      height: 350,
      background: "transparent",
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1",
    },
    stroke: {
      curve: "stepline",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: theme === "light" ? "#16181f" : "#e5e5e5",
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default SteplineLineChart;
