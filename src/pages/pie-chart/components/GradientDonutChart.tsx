import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const GradientDonutChart = () => {
  const theme = useSelector((state: any) => state.theme).theme;

  const series = [44, 55, 41, 17, 15];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      width: 380,
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
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val: string, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
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
        width={400}
      />
    </div>
  );
};

export default GradientDonutChart;
