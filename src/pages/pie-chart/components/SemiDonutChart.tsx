import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const SemiDonutChart = () => {
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
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
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
        width={500}
      />
    </div>
  );
};

export default SemiDonutChart;
