import Link from "next/link";
import "@/app/globals.css";

export default function landing() {
  return (
    <div className="h-screen max-w-7xl m-auto flex flex-col items-center justify-center">
      <div className="p-8 border-x border-gray-300 border-dashed">
        <p className="border rounded-full border-gray-200 px-2 py-1 bg-gray-50 text-xs">
          Based on <span className="text-gray-800">NextJS</span>
        </p>
      </div>
      <h1 className="w-full text-center text-5xl font-extrabold text-gray-800 backdrop-blur-md p-8 border-t border-x border-gray-300 border-dashed">
        Dashboard IT Center
      </h1>
      <p className="w-full text-center text-xl backdrop-blur-md p-8 border border-gray-300 border-dashed">
        This application aims to display data from all application development,
        available resources such as (RAM, HDD, CPU etc.). Here you can see what
        applications the team has developed, the work schedule and there are
        several services to find out how much resources the IT center has.
      </p>
      <div className="inline-flex">
        <Link
          className="w-44 flex justify-center text-gray-800 text-xl p-8 border-l border-b border-gray-300 border-dashed font-semibold duration-500 hover:bg-gray-100 hover:text-gray-950"
          href={`/projects`}
        >
          Projects
        </Link>
        <Link
          className="w-44 flex justify-center text-gray-800 text-xl p-8 border-x border-b border-gray-300 border-dashed font-semibold duration-500 hover:bg-gray-100 hover:text-gray-950"
          href={`/resources`}
        >
          Resources
        </Link>
      </div>
    </div>
  );
}
