import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 py-4">
      <AdminHeader />
      <div>{children}</div>
    </div>
  );
}
