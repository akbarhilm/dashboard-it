"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function StackedChart(props: any) {
  const { data } = props;

  const [nonMpti, setNonmpti] = useState([]);
  const [mpti, setMpti] = useState([]);
  const [proker, setProker] = useState([]);

  const getProker = [] as any;
  const getMpti = [] as any;
  const getNonmpti = [] as any;

  const resData = data.data;

  const getdata = () => {
    for (let i = 0; i < resData.length; i++) {
      getProker.push(resData[i].PROKER);
      getMpti.push(resData[i].MPTI);
      getNonmpti.push(resData[i].NON_MPTI);
    }

    setProker(getProker);
    setMpti(getMpti);
    setNonmpti(getNonmpti);
  };

  const labels = proker;

  useEffect(() => {
    getdata();
  }, [data]);

  return (
    <>
      <Bar
        options={{
          plugins: {
            // title: {
            //   display: true,
            //   align: 'start',
            //   text: "Chart project based status",
            //   font: { size: 20, weight: '400' },
            //   color: "#000;",
            // },
            datalabels: {
              display: true,
              align: "center",
              anchor: "center",
              color: "black",
            },
            legend: {},
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "MPTI",
              data: mpti,
              backgroundColor: "rgb(255, 99, 132)",
            },
            {
              label: "NON MPTI",
              data: nonMpti,
              backgroundColor: "rgb(53, 162, 235)",
            },
          ],
        }}
      />
    </>
  );
}
