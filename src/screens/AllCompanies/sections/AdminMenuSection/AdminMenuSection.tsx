import React from "react";
import { Button } from "../../../../components/ui/button";

export const AdminMenuSection = (): JSX.Element => {
  const menuItems = [
    {
      icon: "/vuesax-outline-category.svg",
      label: "Dashboard",
      isActive: false,
    },
    {
      icon: "/vuesax-outline-building-3.svg",
      label: "Companies",
      isActive: true,
    },
    {
      icon: "/vuesax-outline-folder-open.svg",
      label: "Bid Applications",
      isActive: false,
    },
    {
      icon: "/vuesax-outline-judge.svg",
      label: "Bidding",
      isActive: false,
    },
    {
      icon: "/vuesax-outline-wallet-money.svg",
      label: "Invoices",
      isActive: false,
    },
    {
      icon: "/vuesax-outline-setting-2.svg",
      label: "System Settings",
      isActive: false,
    },
    {
      icon: "/vuesax-outline-messages-2.svg",
      label: "Feedback",
      isActive: false,
    },
  ];

  return (
    <nav className="flex flex-col h-full w-[270px] items-start justify-between px-6 py-3 bg-[#135e35]">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="inline-flex items-center justify-center gap-4">
          <img
            className="w-[57px] h-[57px] object-cover"
            alt="Nuprc logo"
            src="/nuprc-logo-1.png"
          />

          <div className="[font-family:'Inter',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-[32.4px] whitespace-nowrap">
            <span className="font-semibold text-[#ffffff]">BR</span>
            <span className="font-medium text-[#ffc726]">ADMIN</span>
          </div>
        </div>

        <div className="flex gap-2 flex-col items-start w-full">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`flex w-full h-auto gap-2.5 p-3 rounded-lg flex-col items-start justify-start ${
                item.isActive
                  ? "bg-[#ffffff] hover:bg-[#ffffff]"
                  : "bg-transparent hover:bg-[#ffffff]/10"
              }`}
            >
              <div className="flex w-full h-6 items-center gap-4">
                <img
                  className="w-6 h-6"
                  alt={`${item.label} icon`}
                  src={item.icon}
                />

                <div
                  className={`[font-family:'Inter',Helvetica] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap ${
                    item.isActive
                      ? "font-semibold text-[#00751f]"
                      : "font-medium text-[#ffffff]"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        <img className="w-full h-px" alt="Line" src="/line.svg" />

        <div className="inline-flex h-14 items-center justify-center p-4 flex-col gap-2.5 rounded-lg">
          <div className="w-full items-center gap-1 flex">
            <div className="inline-flex flex-col items-start justify-center gap-1">
              <div className="[font-family:'Roboto',Helvetica] font-medium text-[#ffffff] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                Powered by NUPRC
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-100 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                © 2025. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
