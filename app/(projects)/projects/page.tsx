"use client";
import Project from "./components/project";
import Summary from "./components/summary";
import Pie from "./components/piechart";
import getProjects from "@/app/lib/getProjects";
import getSummary from "@/app/lib/getSummary";
import getProker from "@/app/lib/getProkerStatus";
import { useState, useEffect, useRef } from "react";
import StackedChart from "./components/stackedChart";

export default function Home() {
  const [change, setChange] = useState(new Date().getFullYear());
  const [dataProject, setDataProject] = useState([]);
  const [dataSummary, setDataSummary] = useState();
  const [dataProker, setDataProker] = useState();
  const [datafilter, setDatafilter] = useState([]);

  const handleChange = (e: any) => {
    setChange(e.target.value);
  };

  var tahun = new Date().getFullYear();
  let i = 1;
  let option = [];
  for (i; i <= 3; i++) {
    option.push(tahun);
    tahun--;
  }

  useEffect(() => {
    async function fetchd() {
      const proj = await getProjects(change);

      const sum = await getSummary(change);
      const proker = await getProker(change);
      setDataProject(proj.data);
      setDataSummary(sum);
      setDataProker(proker);
      setDatafilter(proj.data);
    }

    fetchd();
  }, [change]);

  const handleRefresh = (e: any) => {
    e.preventDefault();
    setDatafilter(dataProject);
  };

  const handleCallBack = (childData: any) => {
    const data = [...dataProject];
    //let blocked: any = [];
    if (childData === "BLOCKED") {
      const blocked = ["PENDING", "CANCEL", "HOLD", "BLOCK"];
      setDatafilter(data.filter((d: any) => blocked.includes(d.status)));
    } else {
      setDatafilter(data.filter((d: any) => d.status.includes(childData)));
    }
  };

  return (
    <div className="flex px-16 py-8 z-40">
      <div className="max-lg:w-11/12 lg:w-full">
        {/* START: Isi konten */}
        {/* Description */}
        <h1 className="text-gray-800 font-semibold max-lg:hidden">PROJECTS</h1>

        <p className="pt-4">
          Track the progress of the IT CENTER division here. we can definitely
          reach the goal
        </p>

        <div className="px-0 py-6 flex pb-1">
          <div className="mr-4 flex items-center justify-center">
            <p className="text-gray-500">Select year :</p>
          </div>
          <div>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="selecttahun"
              onChange={(e) => handleChange(e)}
            >
              {option.map((v, i) => (
                <option key={i} value={v} className="align-content: center">
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* {dataSummary && <Summary data={dataSummary} tahun={change} />} */}

        <div className="px-0 py-8 z-10">
          <div className="max-lg:w-11/12 lg:w-full">
            <h2 className="text-gray-800 font-semibold max-lg:hidden">
              Chart project based status
            </h2>

            <div className="grid lg:grid-cols-2 2xl:grid-cols-2 gap-4 mt-4">
              <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8 h-full flex items-center">
                {dataSummary && (
                  <Pie
                    data={dataSummary}
                    tahun={change}
                    parentCallBack={handleCallBack}
                  />
                )}
              </div>
              <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8 h-full flex items-center">
                {dataProker && (
                  <StackedChart data={dataProker} tahun={change} />
                )}
              </div>
            </div>
          </div>
        </div>
        {dataProject && <Project data={datafilter} tahun={change} refresh={handleRefresh}/>}
      </div>
    </div>
  );
}
