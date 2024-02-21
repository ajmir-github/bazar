import { ReactNode } from "react";

export default function PageLayout({
  children,
  quickOptions,
}: {
  children: ReactNode;
  quickOptions?: ReactNode;
}) {
  return (
    <div className="grow flex flex-col overflow-y-scroll w-full">
      {quickOptions && (
        <div className="border-b-2 border-base-300 flex md:sticky top-0 z-10">
          <div className="flex gap-1 grow items-center">{quickOptions}</div>
        </div>
      )}
      <div className="grow">{children}</div>
    </div>
  );
}
