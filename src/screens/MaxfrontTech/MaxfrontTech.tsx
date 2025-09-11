import React from "react";
import { Layout } from "../../components/Layout/Layout";

export const MaxfrontTech = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
          Maxfront Tech
        </h1>
        <p className="text-gray-600">Maxfront Tech company details and management.</p>
      </div>
    </Layout>
  );
};