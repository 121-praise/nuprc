import React from "react";
import { Routes, Route } from "react-router-dom";
import { AllCompanies } from "./screens/AllCompanies/AllCompanies";
import { RegisteredCompanies } from "./screens/RegisteredCompanies/RegisteredCompanies";
import { PrequalifiedCompanies } from "./screens/PrequalifiedCompanies/PrequalifiedCompanies";
import { CompanyInfo } from "./screens/CompanyInfo/CompanyInfo";
import { CompanyUsers } from "./screens/CompanyUsers/CompanyUsers";
import { MyCompanyInfo } from "./screens/MyCompanyInfo/MyCompanyInfo";
import { MaxfrontTech } from "./screens/MaxfrontTech/MaxfrontTech";
import { AllBidApplications } from "./screens/AllBidApplications/AllBidApplications";
import { PendingApplications } from "./screens/PendingApplications/PendingApplications";
import { ApprovedApplications } from "./screens/ApprovedApplications/ApprovedApplications";
import { UnapprovedApplications } from "./screens/UnapprovedApplications/UnapprovedApplications";
import { SubmittedApplications } from "./screens/SubmittedApplications/SubmittedApplications";
import { Dashboard } from "./screens/Dashboard/Dashboard";

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/companies" element={<AllCompanies />} />
      <Route path="/companies/registered" element={<RegisteredCompanies />} />
      <Route path="/companies/prequalified" element={<PrequalifiedCompanies />} />
      <Route path="/companies/:id" element={<CompanyInfo />} />
      <Route path="/companies/:id/users" element={<CompanyUsers />} />
      <Route path="/my-company" element={<MyCompanyInfo />} />
      <Route path="/maxfront-tech" element={<MaxfrontTech />} />
      <Route path="/bid-applications" element={<AllBidApplications />} />
      <Route path="/bid-applications/pending" element={<PendingApplications />} />
      <Route path="/bid-applications/approved" element={<ApprovedApplications />} />
      <Route path="/bid-applications/unapproved" element={<UnapprovedApplications />} />
      <Route path="/bid-applications/submitted" element={<SubmittedApplications />} />
    </Routes>
  );
};