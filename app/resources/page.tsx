import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="flex px-16 py-8 z-40">
        <div className="max-lg:w-11/12 lg:w-full">
          <h1 className="text-gray-800 font-semibold max-lg:hidden">
            RESOURCES GENERAL IT
          </h1>
          <p className="pt-4">
            Visualization of status resources information existing divisi IT
          </p>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-2 2xl:col-span-3 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614101015&to=1691635701015&theme=light&panelId=18"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614776604&to=1691636376604&theme=light&panelId=2"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691615161661&to=1691636761661&theme=light&panelId=4"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614882118&to=1691636482118&theme=light&panelId=6"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614906824&to=1691636506824&theme=light&panelId=8"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614922854&to=1691636522854&theme=light&panelId=10"
              ></iframe>
            </div>
            <div className="xl:col-span-1 bg-transparentwhite50 backdrop-blur-md rounded-xl p-8">
              <iframe
                className="w-full aspect-auto rounded-xl"
                src="http://10.1.94.149:3000/d-solo/_LEDiVwVz/it-resource-general?orgId=1&refresh=1d&from=1691614942173&to=1691636542173&theme=light&panelId=12"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
