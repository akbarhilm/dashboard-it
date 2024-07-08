import "@/app/globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard IT",
  description: "Discovered Project and Resources Technology Information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.svg" />
      </head>
      <body>
        <div className="relative h-screen">
          <Suspense>{children}</Suspense>
        </div>
        {/* <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script> */}
      </body>
    </html>
  );
}
