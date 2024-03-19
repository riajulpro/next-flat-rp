import DetailsHeader from "@/components/shared/DetailsHeader";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="h-[76px]">
        <DetailsHeader />
      </div>
      <div className="h-full w-full overflow-y-auto">{children}</div>
    </div>
  );
}
