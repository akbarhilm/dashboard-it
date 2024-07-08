"use client";
import getProjectsById from "@/app/lib/getProjectById";
import Link from "next/link";
import {
  FaCircleExclamation,
  FaCircleCheck,
  FaArrowLeftLong,
  FaCircleUser,
  FaCalendar,
} from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default async function ProjectById({ params }: any) {
  // const params = await getProjectsById());

  const stepper = Object.keys(params.data[0].progress_by_step).map(
    (d: any, index: any): any => (
      <div className="p-4 grid grid-cols-6" key={index}>
        <div className="col-span-5 grid justify-items-start">
          <span className="flex items-center text-gray-800">
            <FaCircleExclamation className="mr-8 " />
            <h3 className="font-semibold ">{d}</h3>
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          {params.data[0].progress_by_step[d] === true ? (
            <FaCircleCheck className="text-xl text-green-600" />
          ) : (
            <FaCircleCheck className="text-xl" />
          )}
        </div>
      </div>
    )
  );
  console.log(params.data[0].progress_by_step);
  return (
    <div className="h-screen grid grid-cols-6 w-full">
      <div className="bg-transparentwhite50 rounded-l-lg backdrop-blur-md col-span-4 my-8 ml-8 p-8">
        <Link
          className="inline-flex items-center transition-all duration-300 hover:text-gray-800"
          href={`/project`}
        >
          <FaArrowLeftLong className="mr-4" />
          <p className="text-gray-800">Project : {params.data[0].status}</p>
        </Link>
        <h1 className="mt-8 text-gray-800 font-bold text-3xl">
          {params.data[0].nama_proyek}
        </h1>
        <p className="mt-4">{params.data[0].keterangan}</p>
        <div className="mt-4 inline-flex">
          <div className="mr-8">
            <p className="font-serif">Bussiness Process Owner : </p>
            <p className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaCircleUser className="mr-2" />
              {params.data[0].bisnis_owner}
            </p>
          </div>
          <div>
            <p className="font-serif">Project Manager : </p>
            <p className="mt-2 border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-gray-800 font-semibold">
              <FaCircleUser className="mr-2" />
              <p>{params.data[0].project_mgr}</p>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <div className="">
              <p className="text-gray-800">
                {Math.round(
                  Object.values(params.data[0].bobot).reduce(
                    (a: number, b: any) => a + b,
                    0
                  )
                ) + "%"}
                <span> Complete</span>
              </p>
            </div>
            <div className="inline-flex">
              <div className="inline-flex items-center">
                <FaCalendar className="mr-2" />
                <p className="mr-2">
                  Start :{" "}
                  <span className="text-gray-800 font-semibold">
                    {params.data[0].tanggal_mulai}
                  </span>
                </p>
              </div>
              <div className="inline-flex items-center">
                <GiBullseye className="mr-2" />
                <p>
                  End :{" "}
                  <span className="text-gray-800 font-semibold">
                    {params.data[0].tanggal_selesai}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-4 font-bold text-2xl text-gray-800">Realisasi</h2>
        <br />
        <Swiper
          className=""
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          speed={3000}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          //  onSlideChange={() => console.log('slide change')}
          //  onSwiper={(swiper) => console.log(swiper)}
        >
          {params.data[0].realisasi.map((d: any, i: any): any => (
            <SwiperSlide
              className="bg-transparentwhite30 p-8 rounded-lg"
              key={i}
            >
              <h3 className="text-gray-800 font-semibold">{d.kegiatan}</h3>
              <div className="flex justify-between mt-4">
                <div className="inline-flex items-center">
                  <FaCalendar className="mr-2" />
                  <p className="mr-2">
                    Start :{" "}
                    <span className="text-gray-800 font-semibold">
                      {d.tanggal_mulai}
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center">
                  <GiBullseye className="mr-2" />
                  <p>
                    End :{" "}
                    <span className="text-gray-800 font-semibold">
                      {d.tanggal_selesai}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="">
                  <p className="text-gray-800 font-semibold">
                    {params.data[0].no_layanan}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  {d.pelaksana.map((data: any, index: any): any => (
                    <>
                      <p className="border border-gray-800 rounded-full py-0.5 px-2 inline-flex items-center text-xs text-gray-800 font-semibold">
                        <FaCircleUser className="mr-2" />
                        <span className="font-serif font-normal" key={index}>
                          {data.split("-")[1]}
                        </span>
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-transparentwhite30 rounded-r-lg backdrop-blur-md col-span-2 my-8 mr-8 p-4 grid content-between">
        {stepper}
      </div>
    </div>
  );
}
