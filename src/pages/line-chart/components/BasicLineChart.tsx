import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const BasicLineChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      background: "transparent",
    },
    theme: {
      mode: theme === "light" ? "dark" : "light",
      palette: "palette1",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      borderColor: theme === "light" ? "#16181f" : "#e5e5e5",
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default BasicLineChart;
