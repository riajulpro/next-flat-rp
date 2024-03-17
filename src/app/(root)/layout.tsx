import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Flat",
  description: "Your secure residence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} lg:container xl:w-full`}>
        <article className="flex flex-col justify-between h-screen w-screen overflow-hidden">
          <Header />
          <section className="h-full w-full flex justify-center items-start">
            <Sidebar />
            <main className="flex-1 h-full w-full overflow-y-auto">
              {children}
            </main>
          </section>
        </article>
      </body>
    </html>
  );
}
