import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BasicRadarChart = () => {
  const [series] = useState([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ]);

  const [options] = useState<ApexCharts.ApexOptions | undefined>({
    chart: {
      height: 350,
      type: 'radar',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radar" height={285} />
    </div>
  );};

export default BasicRadarChart;
