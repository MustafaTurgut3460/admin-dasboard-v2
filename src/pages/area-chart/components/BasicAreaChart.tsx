import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const BasicAreaChart = () => {

  const theme = useSelector((state: any) => state.theme).theme;

  
  const series = [
    {
      name: "STOCK ABC",
      data: [12, 51, 11, 22, 25, 63, 41, 11, 22, 42, 52, 121],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
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
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    xaxis: {
      type: "category",
      position: "0"
    },
    grid: {
      borderColor: theme === "light" ? "#16181f" : "#e5e5e5",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
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

export default BasicAreaChart;
