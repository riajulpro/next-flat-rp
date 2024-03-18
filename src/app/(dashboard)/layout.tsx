import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import SidebarControl from "@/contexts/SidebarControl";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarControl>
      <article className="flex flex-col justify-between h-screen w-screen overflow-hidden">
        <Header />
        <section className="custom-height w-full flex justify-center items-start">
          <Sidebar />
          {children}
        </section>
      </article>
    </SidebarControl>
  );
}
