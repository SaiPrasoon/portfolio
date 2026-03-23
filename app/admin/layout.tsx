import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-2">
      <AdminHeader />
      <div>{children}</div>
    </div>
  );
}
