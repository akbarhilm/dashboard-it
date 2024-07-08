import { FaCalendar } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
export default function Card({ data }: any) {
  const date: Date = new Date();
  const today = date.toLocaleDateString();
  // const now = parseFloat(today);

  return (
    <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 bg-transparentwhite50 backdrop-blur-md rounded-xl p-4">
      <p className="text-lg font-bold text-gray-700 dark:text-gray-400">
        {data.nama_proyek}
      </p>

      <div className="flex justify-between mt-4">
        <div className="inline-flex items-center">
          <FaCalendar className="mr-2" />
          <div className="mr-2">
            Start date :{" "}
            <span className="text-gray-800 font-semibold">
              {data.tanggal_mulai}
            </span>
          </div>
        </div>
        <div className="inline-flex items-center">
          <GiBullseye className="mr-2" />
          <div>
            End date :{" "}
            <span className="text-gray-800 font-semibold">
              {data.tanggal_selesai}
            </span>
          </div>
        </div>
        <div className="text-gray-800">
          {Math.round(
            Object.values(data.bobot).reduce((a: number, b: any) => a + b, 0)
          ) + "%"}
          <span> Complete</span>
        </div>
      </div>

      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="mt-2 bg-primary p-0.5 text-center text-xs leading-none text-white font-bold bg-blue-600"
          style={{
            width:
              Math.round(
                Object.values(data.bobot).reduce(
                  (a: number, b: any) => a + b,
                  0
                )
              ) + "%",
          }}
        ></div>
      </div>
      <p className="mt-4 text-gray-700">Service number : {data.no_layanan}</p>
    </div>
  );
}
