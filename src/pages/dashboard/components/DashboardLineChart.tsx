import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardLineChart = () => {
    const series = [
        {
          name: 'Mağaza',
          data: [31, 40, 28, 51, 42, 109, 100, 55, 12, 66, 87, 98],
        },
        {
          name: 'İnternet Sitesi',
          data: [11, 32, 45, 32, 34, 52, 41, 75, 32, 26, 67, 18],
        },
      ];
    
      const options: ApexCharts.ApexOptions | undefined = {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'category',
          categories: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
          position: "0"
        },
      };
    
      return (
        <div id="chart">
          <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
      );
};

export default DashboardLineChart;
