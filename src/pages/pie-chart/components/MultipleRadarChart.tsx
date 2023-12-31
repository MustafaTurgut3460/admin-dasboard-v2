import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const MultipleRadarChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const [series] = useState([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ]);

  const [options] = useState<ApexCharts.ApexOptions | undefined>({
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      background: "transparent",
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={285}
      />
    </div>
  );
};

export default MultipleRadarChart;
