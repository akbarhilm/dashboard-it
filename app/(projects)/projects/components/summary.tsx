import Link from "next/link";
import { TbCodePlus, TbClockCode, TbCode } from "react-icons/tb";

export default async function Summary(props: any) {
  //const dataSummary = await getSummary(tahun.tahun);
  //console.log(props)
  const { data, tahun } = props;
  //const summary = <div>test</div>
  const summary = data.data.map((d: any, i: any): any => (
    <div key={i} className="grid grid-cols-12 gap-4 mt-8">
      <Link
        href={{ pathname: "/projects/category/new", query: { year: tahun } }}
        className="max-md:col-span-12 md:col-span-4 duration-500 bg-transparentwhite50 hover:bg-gray-100 backdrop-blur-md rounded-xl"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 grid p-8">
            <div className=" bg-blue-200 place-self-center rounded-full p-3">
              <TbCodePlus className="text-gray-700 text-2xl" />
            </div>
          </div>

          <div className="col-span-7 py-8">
            <p className=" text-gray-700 dark:text-white">New Project</p>

            <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
              {d.new}
            </p>
          </div>
        </div>
      </Link>

      <Link
        href={{
          pathname: "/projects/category/ongoing",
          query: { year: tahun },
        }}
        className="max-md:col-span-12 md:col-span-4 duration-500 bg-transparentwhite50 hover:bg-gray-100 backdrop-blur-md rounded-xl"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 grid p-8">
            <div className=" bg-orange-200 place-self-center rounded-full p-3">
              <TbClockCode className="text-gray-700 text-2xl" />
            </div>
          </div>
          <div className="col-span-7 py-8">
            <p className=" text-gray-700 dark:text-white">On Going Project</p>

            <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
              {d.on_going}
            </p>
          </div>
        </div>
      </Link>

      <Link
        href={{ pathname: "/projects/category/done", query: { year: tahun } }}
        className="max-md:col-span-12 md:col-span-4 duration-500 bg-transparentwhite50 hover:bg-gray-100 backdrop-blur-md rounded-xl"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 grid p-8">
            <div className=" bg-green-200 place-self-center rounded-full p-3">
              <TbCode className="text-gray-700 text-2xl" />
            </div>
          </div>
          <div className="col-span-7 py-8">
            <p className=" text-gray-700 dark:text-white">Closed Project</p>

            <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
              {d.closed}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return <>{summary}</>;
}
