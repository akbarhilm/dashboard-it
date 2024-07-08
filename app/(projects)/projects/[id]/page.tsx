import getProject from "@/app/lib/getProjectById";
import TooltipItem from "@/app/(projects)/projects/[id]/components/tooltip";

import Link from "next/link";
import {
  FaCircleExclamation,
  FaCircleCheck,
  FaArrowLeftLong,
  FaCircleUser,
  FaCalendar,
  FaBookmark,
  FaBook,
} from "react-icons/fa6";
import { PiListNumbersFill } from "react-icons/pi";
import { GiBullseye } from "react-icons/gi";
import { HiClipboard } from "react-icons/hi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

type Params = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: { params: { id: string } }) {
  const ProjectData: Promise<Project> = getProject(params.id);
  const project = await ProjectData;

  const stepper = Object.keys(project.data[0].progress_by_step).map(
    (d: any, index: any): any => (
      <div className="p-4 grid grid-cols-6" key={index}>
        <div className="col-span-5 grid justify-items-start">
          <span className="flex items-center text-gray-800">
            <FaCircleExclamation className="mr-8 " />
            <h3 className="font-semibold ">{d}</h3>
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          {project.data[0].progress_by_step[d] === true ? (
            <FaCircleCheck className="text-xl text-green-600" />
          ) : (
            <FaCircleCheck className="text-xl" />
          )}
        </div>
      </div>
    )
  );
  let cats = "";
  switch (project.data[0].status) {
    case "BERJALAN":
      cats = "On-going";
      break;
    case "BARU":
      cats = "New";
      break;
    case "SELESAI":
      cats = "Closed";
      break;
    case "PENDING":
      cats = "Pending";
      break;
    case "HOLD":
      cats = "Hold";
      break;
    case "CANCEL":
      cats = "Cancel";
      break;
    case "BLOCKED":
      cats = "Blocked";
      break;
    case "DELAYED":
      cats = "Delayed";
      break;

    default:
      break;
  }
  return (
    <div className="h-screen grid grid-cols-6 overflow-auto">
      <div className="bg-transparentwhite50 rounded-l-lg backdrop-blur-md col-span-4 my-8 ml-8 p-8">
        <Link
          className="inline-flex items-center transition-all duration-300 hover:text-gray-800"
          href={`/projects`}
        >
          <FaArrowLeftLong className="mr-4" />
          <div className="text-gray-800 font-bold">Project : {cats}</div>
        </Link>
        <h1 className="mt-5 text-gray-800 font-bold text-3xl">
          {project.data[0].nama_proyek}
        </h1>

        <div className="mt-4">{project.data[0].keterangan}</div>

        <div className="mt-4 flex flex-row">
          <div className="mr-8">
            <div className="font-serif">Bussiness Process Owner : </div>
            <div className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaCircleUser className="mr-2" />
              {project.data[0].bisnis_owner}
            </div>
          </div>
          <div className="mr-8">
            <div className="font-serif">Project Manager : </div>
            <div className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaCircleUser className="mr-2" />
              <div>{project.data[0].project_mgr}</div>
            </div>
          </div>
          <div>
            <div className="font-serif">Service Number : </div>
            <div className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <PiListNumbersFill className="mr-2" />
              <div>{project.data[0].no_layanan}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-row">
          <div className="mr-8">
            <div className="font-serif">Master Plan TI : </div>
            <div className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaBook className="mr-2" />
              {project.data[0].ref_mpti}
            </div>
          </div>
          <div className="mr-8">
            <div className="font-serif">Job Program : </div>
            <div className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaBookmark className="mr-2" />
              <div>{project.data[0].ref_proker}</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <div className="">
              <div className="text-gray-800">
                {Math.round(
                  Object.values(project.data[0].bobot).reduce(
                    (a: number, b: any) => a + b,
                    0
                  )
                ) + "%"}
                <span> Complete</span>
              </div>
            </div>
            <div className="inline-flex">
              <div className="inline-flex items-center">
                <FaCalendar className="mr-2" />
                <div className="mr-2">
                  Start date :{" "}
                  <span className="text-gray-800 font-semibold">
                    {project.data[0].tanggal_mulai}
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center">
                <GiBullseye className="mr-2" />
                <div>
                  End date :{" "}
                  <span className="text-gray-800 font-semibold">
                    {project.data[0].tanggal_selesai}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex w-full h-4 bg-gray-400 rounded-full overflow-hidden dark:bg-gray-800">
            <div
              className="flex flex-col justify-center  bg-blue-600 text-xs text-white text-center"
              role="progressbar"
              style={{
                width:
                  Math.round(
                    Object.values(project.data[0].bobot).reduce(
                      (a: number, b: any) => a + b,
                      0
                    )
                  ) + "%",
              }}
              aria-valuenow={Math.round(
                Object.values(project.data[0].bobot).reduce(
                  (a: number, b: any) => a + b,
                  0
                )
              )}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>

        <h2 className="mt-4 font-bold text-2xl text-gray-800">Realisasi</h2>

        <div className="overflow-y-scroll grid grid-cols-8 mt-4 mb-2 gap-2 max-h-96">
          {project.data[0].realisasi.map((d: any, i: any): any => (
            <div
              className="col-span-4 bg-transparentwhite30 p-4 rounded-lg"
              key={i}
            >
              <div key={i}>
                <h3 className="text-gray-800 font-semibold">{d.kegiatan}</h3>
                <div className="flex justify-between mt-4">
                  <div className="inline-flex items-center">
                    <FaCalendar className="mr-2" />
                    <div className="mr-2">
                      Start date :{" "}
                      <span className="text-gray-800 font-semibold">
                        {d.tanggal_mulai}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center">
                    <GiBullseye className="mr-2" />
                    <div>
                      End date :{" "}
                      <span className="text-gray-800 font-semibold">
                        {d.tanggal_selesai}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="">
                    <div className="text-gray-800 font-semibold">
                      {project.data[0].no_layanan}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    {d.pelaksana.map((data: any, index: any): any => (
                      <div key={index}>
                        <div className="inline-flex items-center text-xs text-gray-800 font-semibold">
                          <TooltipItem name={data.split("-")[1]} key={index} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-transparentwhite30 rounded-r-lg backdrop-blur-md col-span-2 my-8 mr-8 p-4 grid content-between">
        {stepper}
      </div>
    </div>
  );
}
