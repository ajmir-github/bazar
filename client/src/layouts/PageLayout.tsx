import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { ReactNode } from "react";

export default function PageLayout({
  children,
  options,
  quickOptions,
}: {
  children: ReactNode;
  options?: ReactNode;
  quickOptions?: ReactNode;
}) {
  return (
    <div className="grow flex flex-col overflow-hidden w-full">
      {(options || quickOptions) && (
        <div className="p-1 sm:p-2 border-b-2 border-base-300 flex items-center justify-between">
          <div className="flex gap-1 grow items-center">{quickOptions}</div>
          {options && (
            <div className="drawer drawer-end w-fit">
              <input
                id="options-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="options-drawer"
                  className="drawer-button btn btn-ghost"
                >
                  <SidebarCloseIcon />

                  <span className="hidden md:block">Options</span>
                </label>
              </div>
              <div className="drawer-side overflow-hidden z-20">
                <label
                  htmlFor="options-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="p-1 sm:p-2 w-72 min-h-full bg-base-200 text-base-content">
                  <div>
                    <label htmlFor="options-drawer" className="btn btn-ghost">
                      <SidebarOpenIcon />
                      <span className="hidden md:block">Close</span>
                    </label>
                  </div>
                  {options}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="grow overflow-y-scroll">{children}</div>
    </div>
  );
}
