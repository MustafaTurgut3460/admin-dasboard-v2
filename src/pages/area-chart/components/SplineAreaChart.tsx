import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const SplineAreaChart = () => {

  const theme = useSelector((state: any) => state.theme).theme;

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 350,
      type: "area",
      background: "transparent"
    },
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1"
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: theme === "light" ? "#16181f" : "#e5e5e5",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default SplineAreaChart;
