import React from "react";
import ReactApexChart from "react-apexcharts";

interface DataPoint {
  x: string;
  y: number;
}

const DashboardCardLineChart = () => {
  const series = [
    {
      name: "series1",
      data: [
        { x: "Ocak", y: 31 },
        { x: "Şubat", y: 55 },
        { x: "Mart", y: 28 },
        { x: "Nisan", y: 102 },
        { x: "Mayıs", y: 178 },
        { x: "Haziran", y: 25 },
        { x: "Temmuz", y: 100 },
        { x: "Ağustos", y: 72 },
        { x: "Eylül", y: 122 },
      ],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 75,
      type: "line",
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: "#5161ce",
        left: 2,
        top: 2,
      },
      animations: {
        enabled: true,
        speed: 800,
      }
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["rgba(81, 97, 206, 0.5)"]
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#5161ce"]
    },
    xaxis: {
      type: "category",
      categories: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül"
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
        type="line"
        height={75}
      />
    </div>
  );
};

export default DashboardCardLineChart;
