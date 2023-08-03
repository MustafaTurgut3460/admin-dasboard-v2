import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const BasicBarChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "bar",
      height: 350,
      background: "transparent" 
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1"
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    grid: {
      borderColor: theme === "light" ? "#16181f" : "#e5e5e5",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BasicBarChart;
