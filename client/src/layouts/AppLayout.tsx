import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col-reverse w-screen overflow-hidden">
      <Navbar />
      <ScrollArea className="grow">{children}</ScrollArea>
    </div>
  );
}
