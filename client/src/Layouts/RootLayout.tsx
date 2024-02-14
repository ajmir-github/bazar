import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ReactNode } from "react";

const categories: string[] = [
  "Electronics",
  "Computers",
  "Clothes",
  "Cars",
  "House appliance",
];

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div data-theme="dark" className="bg-animea">
      <div className="min-h-screen flex flex-col justify-between items-stretch bg-base-300 bg-opacity-50">
        <NavBar categories={categories} />
        <main className="p-2 md:p-4 flex flex-col gap-2 md:gap-4 grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
