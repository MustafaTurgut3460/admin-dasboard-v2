import React from "react";
import ReactApexChart from "react-apexcharts";

const SteplineLineChart = () => {
  const series = [
    {
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "line",
      height: 350,
    },
    stroke: {
      curve: "stepline",
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Stepline Chart",
      align: "left",
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
