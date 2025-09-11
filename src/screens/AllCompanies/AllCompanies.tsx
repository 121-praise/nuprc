import React from "react";
import { AdminMenuSection } from "./sections/AdminMenuSection/AdminMenuSection";
import { ContentDisplaySection } from "./sections/ContentDisplaySection/ContentDisplaySection";

export const AllCompanies = (): JSX.Element => {
  return (
    <div className="w-full bg-[#ffffff] flex">
      <AdminMenuSection />
      <div className="flex flex-col flex-1">
        <header className="w-full h-[84px] bg-[#ffffff] border-b-2 border-neutral-100 flex items-center justify-between px-8">
          <div className="[font-family:'Inter',Helvetica] font-bold text-[#135e35] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            The 2025 Bid Round Portal
          </div>
          <img className="w-11 h-11" alt="Frame" src="/frame-1618869607.svg" />
        </header>
        <ContentDisplaySection />
      </div>
    </div>
  );
};
