"use client";
import LabelCategory from "@/app/(projects)/projects/components/labelcategory";
import LabelProker from "@/app/(projects)/projects/components/labelproker";
import LabelMpti from "@/app/(projects)/projects/components/labelmpti";
import Link from "next/link";
import { FaEye, FaCheck } from "react-icons/fa6";
import Pagination from "./pagination";
import { useState, useEffect } from "react";

interface DataProject {
  id: number;
  no_layanan: string;
  nama_proyek: string;
  keterangan: string;
  status: string;
}

export default function Project(props: any) {
  const { data, refresh } = props;
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataProject, setDataProject] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  //   for searchbar
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // const project = useCallback(async(tahun):void=> {
  //   // await getProjects(props.tahun).then(res=>{setDataProject(res.data);
  //   //                               setFilteredData(res.data);})
  //   const data = await getProjects(tahun)
  //   return data
  // ),[getProjects]
  // }

  useEffect(() => {
    setDataProject(data);
    setFilteredData(data);
    setSearchQuery("");
  }, [data]);

  const handleSearch = (query: string) => {
    const filtered = dataProject.filter(
      (data: any) =>
        data.no_layanan.toLowerCase().includes(query.toLowerCase()) ||
        data.nama_proyek.toLowerCase().includes(query.toLowerCase()) ||
        data.keterangan.toLowerCase().includes(query.toLowerCase()) ||
        data.status.toLowerCase().includes(query.toLowerCase())
      //data.id.includes(query)
    );
    setFilteredData(filtered);
    setSearchQuery(query); // Update the search query state
  };

  // const startIndex = (currentPage  - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // const filteredAndPaginatedData = filteredData
  //   .filter(
  //     (data:any) =>
  //       data.no_layanan.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       data.nama_proyek
  //         .toLowerCase()
  //         .includes(searchQuery.toLowerCase()) ||
  //       data.keterangan.toLowerCase().includes(searchQuery.toLowerCase())
  //       //data.id.includes(searchQuery)

  //   ) .slice(startIndex, endIndex);

  const paginate = (items: any, pageNumber: any, pageSize: any) => {
    items.filter(
      (data: any) =>
        data.no_layanan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.nama_proyek.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.keterangan.toLowerCase().includes(searchQuery.toLowerCase())
      //data.id.includes(searchQuery)
    );
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };
  // let blocked: any = [];
  // if (status === "BLOCKED") {
  //   blocked.push(["PENDING", "CANCEL", "HOLD", "BLOCK"]);
  // } else {
  //   blocked.push([status]);
  // }

  // const filterStatus = status
  //   ? filteredData.filter((d: any) =>
  //       d.status.includes(blocked)
  //     )
  //   : filteredData;

  // console.log(filterStatus, blocked);
  const paginatedPosts = paginate(filteredData, currentPage, itemsPerPage);
  //const paginatedPosts = filteredAndPaginatedData
  //console.log(filteredAndPaginatedData)

  const datatable = paginatedPosts.map((d: any, i: any): any => (
    <tr className="text-gray-600" key={i}>
      {/* <td className="px-4 py-2 text-xs text-gray-800">
        {i + 1}
      </td> */}
      <td className="px-8 py-4 text-xs text-gray-800">{d.no_layanan}</td>
      <td className="w-40 px-4 py-2 capitalize text-xs text-gray-800">
        <p className="w-40 truncate">{d.nama_proyek.toLowerCase()}</p>
        <p className="w-40 truncate text-gray-600">
          {d.keterangan.toLowerCase()}
        </p>
      </td>
      <td className="text-center px-4 py-2 capitalize text-xs">
        <LabelCategory name={d.status.toLowerCase()} />
      </td>
      <td className="text-center px-4 py-2 text-xs">{d.tanggal_mulai}</td>
      <td className="text-center px-4 py-2 text-xs">{d.tanggal_selesai}</td>

      <td className="text-center px-4 py-2 capitalize text-xs">
        <LabelProker name={d.proker} />
      </td>
      <td className="text-center px-4 py-2 capitalize text-xs">
        <LabelMpti name={d.mpti} />
      </td>
      <td className="w-40 text-center px-4 py-2 text-xs">
        <div className="flex items-center justify-center">
          <div className="flex w-full h-2 mr-4 bg-blue-50 rounded-full overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center bg-blue-900 text-xs py-0.5 px-2 text-gray-200 text-center"
              role="progressbar"
              style={{
                width:
                  Math.round(
                    Object.values(d.bobot).reduce(
                      (a: number, b: any) => a + b,
                      0
                    )
                  ) + "%",
              }}
              aria-valuenow={Math.round(
                Object.values(d.bobot).reduce((a: number, b: any) => a + b, 0)
              )}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          {Math.round(
            Object.values(d.bobot).reduce((a: number, b: any) => a + b, 0)
          ) + "%"}
        </div>
      </td>
      <td className="text-center px-8 py-2">
        {d.tanggal_mulai && d.tanggal_selesai && (
          <Link
            href={`/projects/${d.id}`}
            className="flex items-center justify-center duration-500 text-gray-500 hover:text-gray-800"
          >
            <FaEye />
          </Link>
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <div className="rounded-xl mt-4 pt-1">
        <h2 className="text-gray-800 font-bold">Table List Projects</h2>
        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="rounded-xl overflow-hidden bg-transparentwhite50 backdrop-blur-md ">
                <div className="px-8 py-4 flex">
                  <div className="mr-4 flex items-center justify-center">
                    <p className="text-gray-800">Search :</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="search"
                      value={searchQuery}
                      className="ring-1 ring-gray-200 bg-gray-50 rounded-sm px-2 py-0.5 focus:outline-none focus:ring focus:ring-blue-900"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
                  <div className="ml-5 gap-4">
                    <button
                      onClick={refresh}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-1 border border-blue-700 rounded gap-5"
                    >
                      Refresh Data
                    </button>
                  </div>
                </div>

                <table className="min-w-full">
                  <thead className="bg-transparentwhite50">
                    <tr>
                      {/* <th scope="col" className="px-4 py-4 text-center text-xs font-medium text-gray-500">
                        No
                      </th> */}
                      <th
                        scope="col"
                        className="px-8 py-4 text-left text-xs font-medium text-gray-500"
                      >
                        Service Number
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-left text-xs font-medium text-gray-500"
                      >
                        Project Name
                      </th>
                      {/* <th scope="col" className="px-4 py-4 text-center text-xs font-medium text-gray-500">
                        Deskripsi
                      </th> */}
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        Finish Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        Proker
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        MPTI
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-center text-xs font-medium text-gray-500"
                      >
                        Progress
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-4 text-center text-xs font-medium text-gray-500"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>{datatable}</tbody>
                </table>
                <div className="px-8 py-4">
                  <Pagination
                    items={filteredData.length} // 100
                    currentPage={currentPage} // 1
                    pageSize={itemsPerPage} // 10
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
