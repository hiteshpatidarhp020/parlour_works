import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./pw-chart.module.css";
import PwDropdown from "../pw-dropdown";
import Radio from "../pw-radio";
import PwText from "../pw-text";
import PwIcon from "../pw-icon";
import IcVectordropdown from "../../icons/IcVecterdrop";
import IcChartHeadingIcon from "../../icons/IcChartHeadingIcon";


const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const labels = [
  { id: 1, name1: "Amount"},
];

// const labels = [
//   { id: 1, name1: "Amount" },
// ];

function PwChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: [1344, 2000, 2200, 600, 1161, 58, 3500],
      },
      {
        name: "Revenue",
        data: [25, 40, 20, 35, 17, 27, 30,],
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
          "Aug 2023",
          "Sep 2023",
          "Oct 2023",
          "Nov 2023",
          "Dec 2023",
          "Jan 2024",
          "Feb 2024",
          // "Sep",
          // "Oct",
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
      <div className={styles.chartcontentmain}>
      <div className={styles.chartheading}>
      <PwText color="#FFFFFF" 
      text="Business Performance" 
      appearance="body_m_med"/>
    
    <div className={styles.chartheadicon}>
      <PwIcon ic={<IcChartHeadingIcon />}/>
      </div>
      </div>

      <div className={styles.chartrightsec}>
      <div className={styles.chartradio} >
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
        type="bar"
        height={350}
        className="p-0 m-0 mx-3"
      />
      <div className={styles.verticalLine}></div>
      <div className={styles.leftText}><PwText text="Amount (₹)" appearance="body_s_reg"/></div>
      <div className={styles.rightText}><PwText text="Right text" appearance="body_s_reg"/></div>
    </div>
  );
}

export default PwChart;
