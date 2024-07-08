import "@/app/globals.css";
import { Suspense } from "react";
import Navbar from "@/app/components/navbar";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen bg-mainbg bg-cover bg-no-repeat bg-fixed">
      <Navbar />
      <div className="overflow-hidden w-full z-40">
        <Suspense>{children}</Suspense>
      </div>
    </section>
  );
}
