import React from "react";
import { Layout } from "../../components/Layout/Layout";

export const SubmittedApplications = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
          Submitted Applications
        </h1>
        <p className="text-gray-600">All applications that have been submitted for review.</p>
      </div>
    </Layout>
  );
};