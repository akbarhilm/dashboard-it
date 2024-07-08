"use client";
import getProjects from "@/app/lib/getProjects";
import Card from "./category";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

// export async function getServerSideProps(context:any) {
//   const cat = context?.query?.cat ?? "new";
//   // Default value = "1"

//     return { props: { cat: cat } };
// }

export default async function Kategori({
  params,
}: {
  params: { cat: string };
}) {
  const searchParam = useSearchParams();
  const tahun = searchParam.get("year");
  const res = await getProjects(tahun);
  const dataProject = res.data;

  let cats = "";
  switch (params.cat[0]) {
    case "new":
      cats = "NEW";
      break;
    case "ongoing":
      cats = "ONGOING";
      break;
    case "done":
      cats = "CLOSED";
      break;

    default:
      break;
  }

  const dataCard = dataProject.filter((fil: any): any => fil.status === cats);

  return (
    <div className="flex px-16 py-8 z-40">
      <div className="w-full">
        <h1 className="text-gray-800 font-semibold max-lg:hidden">
          Project {params.cat[0]}
        </h1>
        <p className="pt-4">Project list by category progress</p>
        <div className="grid grid-cols-12 gap-4 mt-8">
          {dataCard.map((data: any, index: any): any => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
