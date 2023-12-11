import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./pw-chart.module.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function PwChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [2344, 55, 2200, 600, 1161, 58, 3500, 60, 2000],
      },
      {
        name: "Revenue",
        data: [7, 8, 20, 35, 17, 27, 30, 14, 10],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        // background: "#242834",

        toolbar: {
          show: false,
        },
      },
      colors: ["rgba(255, 200, 153, 1)", "rgba(207, 199, 255, 1)"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      grid: {
        borderColor: "rgba(48, 53, 68, 1)",
        row: {
          colors: ["transparent"],
          opacity: 0.5,
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        labels: {
          style: {
            colors: "#fff",
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          color: "#616470",
        },
      },
      yaxis: [
        {
          tickAmount: 7,
          max: 3500,
          labels: {
            style: {
              colors: "rgba(255, 200, 153, 1)",
            },
          },
        },
        {
          opposite: true,
          tickAmount: 7,
          max: 35,
          labels: {
            style: {
              colors: "#fff",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
    },
  });

  return (
    <div className={`${styles.chartContainer} ${styles.chartSection}`}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
        className="p-0 m-0 mx-3"
      />
      <div className={styles.verticalLine}></div>
      <div className={styles.leftText}>Amount (₹)</div>
      <div className={styles.rightText}>right text</div>
    </div>
  );
}

export default PwChart;
