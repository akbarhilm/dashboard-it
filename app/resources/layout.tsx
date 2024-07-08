import "../globals.css";
import { Suspense } from "react";
import Navbar from "@/app/components/navbar";
// import { UserContext, GetAllproject } from '../utils/context';

export const metadata = {
  title: "Dashboard IT",
  description: "Discovered Project and Resources Technology Information",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { proj } = GetAllproject();
  return (
    <section className="flex min-h-screen bg-mainbg bg-cover bg-no-repeat bg-fixed">
      <Navbar />
      <div className="overflow-hidden w-full z-40">
        <Suspense fallback={<h2>Loadiiiing.....</h2>}>{children}</Suspense>
      </div>
    </section>
  );
}
