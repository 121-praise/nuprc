import React from "react";
import { Layout } from "../../components/Layout/Layout";

export const Dashboard = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="bg-white p-6 rounded-xl border border-[#e4e7ec] shadow-shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Companies</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1,234</p>
              </div>
              <div className="w-12 h-12 bg-[#0e9145]/10 rounded-lg flex items-center justify-center">
                <img className="w-6 h-6" alt="Companies" src="/vuesax-outline-building-3.svg" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-[#e4e7ec] shadow-shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Bid Applications</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">567</p>
              </div>
              <div className="w-12 h-12 bg-[#0e9145]/10 rounded-lg flex items-center justify-center">
                <img className="w-6 h-6" alt="Applications" src="/vuesax-outline-folder-open.svg" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-[#e4e7ec] shadow-shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Reviews</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">89</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <img className="w-6 h-6" alt="Pending" src="/vuesax-outline-judge.svg" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-[#e4e7ec] shadow-shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Bids</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">23</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <img className="w-6 h-6" alt="Bids" src="/vuesax-outline-wallet-money.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};