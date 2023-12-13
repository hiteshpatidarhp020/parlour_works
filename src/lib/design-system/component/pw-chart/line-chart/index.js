import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "../pw-chart.module.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function PwLineChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [300, 400, 505, 1001, 1209, 1402, 1509, 1200, 3208],
        style: {
          width: 1,
        },
      },
      {
        name: "Revenue",
        data: [488, 551, 775, 1112, 1449, 1662, 1779, 2341, 3548],
        stroke: {
          width: 1,
        },
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["rgba(255, 200, 153, 1)", "rgba(207, 199, 255, 1)"],
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
      stroke: {
        curve: "straight",
        width: 1.5,
      },
      yaxis: [
        {
          tickAmount: 7,
          min: 0,
          max: 3500,
          labels: {
            style: {
              colors: "rgba(255, 200, 153, 1)",
            },
          },
        },
      ],
      legend: {
        show: false,
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
        grid: {
          backgroundColore: " #616470",
        },
      },
    },
  });

  return (
    <div>
      <div className={`${styles.chartContainer} ${styles.chartSection}`}>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
          className="p-0 m-0"
        />
      </div>
      <div className={styles.verticalLineChart}></div>
    </div>
  );
}

export default PwLineChart;
