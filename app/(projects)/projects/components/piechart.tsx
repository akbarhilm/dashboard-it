import { Pie, getElementAtEvent, getDatasetAtEvent } from "react-chartjs-2";
import { useState, useEffect, useRef } from "react";
import "chartjs-plugin-datalabels";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { TbBulbOff, TbBulbFilled } from "react-icons/tb";
import { AnyARecord } from "dns";

Chart.register(ChartDataLabels, ArcElement, Tooltip, Legend);

export default function Piechart(props: any) {
  const { data, parentCallBack } = props;

  const dataFrame = data.data.map(({ total, ...d }: any) => ({ ...d }));

  const [key, setKey] = useState([]);
  const [amount, setAmount] = useState([]);

  const resData = dataFrame[0];

  const newFormat = {
    new: resData.new,
    ongoing: resData.on_going,
    delayed: resData.delay,
    tobe_launch: resData.tobe_launch,
    closed: resData.closed,
    get blocked() {
      return resData.pending + resData.hold + resData.cancel;
    },
  };

  const labels: any = Object.keys(newFormat).map((data) => data.toUpperCase());
  const values: any = Object.values(newFormat);

  const getdata = () => {
    setKey(labels);
    setAmount(values);
  };

  const chartRef: any = useRef();
  const onClick = (e: any) => {
    if (getElementAtEvent(chartRef.current, e).length > 0) {
      const datasetIndexNum = getElementAtEvent(chartRef.current, e)[0]
        .datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, e)[0].index;
      // console.log(dataChart.labels[dataPoint]);
      parentCallBack(dataChart.labels[dataPoint]);
    }
  };

  useEffect(() => {
    getdata();
  }, [data]);

  const dataChart = {
    labels: key,
    datasets: [
      {
        data: amount,
        backgroundColor: [
          "rgb(161 161 170)",
          "rgb(34 197 94)",
          "rgb(249 115 22)",
          "rgb(21 128 61)",
          "rgb(34 211 238)",
          "rgb(225 29 72)",
        ],
        borderColor: [
          "rgb(161 161 170)",
          "rgb(34 197 94)",
          "rgb(249 115 22)",
          "rgb(21 128 61)",
          "rgb(34 211 238)",
          "rgb(225 29 72)",
        ],
        borderWidth: 1,
        offset: [40, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  return (
    <div className="w-full relative">
      <div className="group">
        <TbBulbOff className="absolute cursor-pointer top-1 right-0 text-gray-700 text-2xl duration-75 transition-all visible group-hover:invisible" />
        <TbBulbFilled className="absolute cursor-pointer top-1 right-0 text-gray-700 text-2xl duration-75 transition-all invisible group-hover:visible" />
        <div className="absolute top-10 right-0 rounded-xl bg-transparentwhite50 backdrop-blur-md shadow-lg shadow-black/30 p-4 w-full duration-300 transition-all invisible group-hover:visible">
          <p className="text-gray-700 text-xl font-bold mb-4">Hints</p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">New</span> : Inisiasi
            Data/Registered
          </p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">On Going</span> : Work in
            progress
          </p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">Delay</span> : Define by
            Data (keterlambatan penyelesaian proyek)
          </p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">To Be Launch</span> : UAT
            Release
          </p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">Closed</span> : Proyek
            selesai dikerjakan
          </p>
          <p className="text-gray-600 capitalize">
            <span className="text-gray-700 font-bold">Blocked</span> : Terhenti
            (Pending, Hold, Cancel, Block)
          </p>
        </div>
      </div>
      <Pie
        data={dataChart}
        height={400}
        width={600}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              align: "start",
              display: true,
              text: "",
            },
            legend: {
              display: true,
              position: "top",
              align: "center",
              labels: {
                font: { size: 12 },
                color: "#000;",
                usePointStyle: true,
                boxWidth: 20,
                boxHeight: 7,
              },
            },
            datalabels: {
              backgroundColor: function (context: any) {
                let bck;
                if (context !== "" || context !== 0) {
                  bck = context.dataset.backgroundColor;
                } else {
                  bck = context.dataset.white;
                }
                return bck;
              },
              // formatter: (val: any, context: any) =>
              //   `${
              //     (Number(val) * 100) /
              //     context.chart.data.datasets[context.datasetIndex].data.reduce(
              //       (a: any, b: any) => Number(a) + Number(b),
              //       0
              //     )
              //   }%`,
              formatter: (val: any, context: any) =>
                `${val}` !== "0"
                  ? `${val} / ` +
                    `${context.chart.data.datasets[
                      context.datasetIndex
                    ].data.reduce(
                      (a: any, b: any) =>
                        Math.round(Number(a)) + Math.round(Number(b)),
                      0
                    )}`
                  : 0,
              borderRadius: 25,
              borderWidth: 3,
              display: "auto",
              color: "black",
              font: {
                weight: "bold",
              },
              padding: 6,
            },
            tooltip: {
              callbacks: {
                label: (ttItem) =>
                  `${ttItem.label}: ${Math.round(
                    (ttItem.parsed * 100) /
                      ttItem.dataset.data.reduce(
                        (a, b) => Number(a) + Number(b),
                        0
                      )
                  )}%`,
              },
            },
          },
        }}
        onClick={onClick}
        ref={chartRef}
      />
    </div>
  );
}
