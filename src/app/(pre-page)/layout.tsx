import Header from "@/components/ui/Header";

const PrePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="custom-height w-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default PrePageLayout;
