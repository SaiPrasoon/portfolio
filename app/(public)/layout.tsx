import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="px-6 lg:pl-[260px] lg:pr-10">
        <Navbar />
        <main className="reading-column py-10 lg:py-16">{children}</main>
      </div>
    </>
  );
}
