import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "../pw-chart.module.css";
import PwDropdown from "../../pw-dropdown";
import PwText from "../../pw-text";
import IcChartHeadingIcon from "../../../icons/IcChartHeadingIcon";
import PwIcon from "../../pw-icon";
import Radio from "../../pw-radio";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const labels = [
  { id: 1, name1: "Quick Sale" },
];


function PwLineChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [300, 400, 505, 1001, 1209, 1402, 1509],
        style: {
          width: 1,
        },
      },
      {
        name: "Revenue",
        data: [488, 551, 775, 1112, 1449, 1662, 1779],
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
          "Aug 2023",
          "Sep 2023",
          "Oct 2023",
          "Nov 2023",
          "Dec 2023",
          "Jan 2024",
          "Feb 2024",
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
    <div className="position-relative">
      <div className={`${styles.chartContainer} ${styles.chartSection}`}>

      <div className={styles.chartcontentmain}>
      <div className={styles.chartheading}>
      <PwText color="#FFFFFF" text="Summary of Quick Sale v/s Appointments" appearance="body_m_med"/>
      <PwText color="" text="Summary of Quick Sale v/s Appointments" appearance="body_m_med"/>
      </div>

      <div className={styles.chartrightsec}>
      <div className={styles.chartradio}>
      <Radio labels={labels} />
      <Radio labels={labels} />
      </div>
      <div >
          <PwDropdown
            width="157px"
           marginBottom="0"
          dropItems={["Monthly", "iphone", "laptop", "Hp"]}
         />
       </div>
       </div>
       </div>

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
