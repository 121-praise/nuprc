import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { EditIcon, DownloadIcon, UserIcon, BuildingIcon } from "lucide-react";

export const CompanyInfo = (): JSX.Element => {
  const { id } = useParams();

  const companyData = {
    id: id,
    name: "Maxfront Tech",
    type: "Single",
    rcNumber: "RC2368856",
    tin: "12345678",
    email: "maxfront@gmail.com",
    phone: "07088476682",
    website: "www.maxfronttech.com",
    address: "123 Business District, Lagos, Nigeria",
    status: "Approved",
    registrationDate: "2024-01-15",
    lastUpdated: "2024-12-15",
    documents: [
      { name: "Certificate of Incorporation", status: "Verified", date: "2024-01-15" },
      { name: "Tax Clearance Certificate", status: "Verified", date: "2024-01-20" },
      { name: "Audited Financial Statement", status: "Pending", date: "2024-12-01" },
    ],
    users: 5,
    applications: 12,
  };

  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
              Company Information
            </h1>
            <Badge className="bg-basic-white rounded-lg px-3 py-1 relative overflow-hidden">
              <div className="absolute inset-0 rounded-lg bg-[linear-gradient(270deg,rgba(208,249,190,1)_0%,rgba(173,233,241,1)_100%)] opacity-40" />
              <span className="relative font-11-11-semib font-[number:var(--11-11-semib-font-weight)] text-button-textgreen text-[length:var(--11-11-semib-font-size)] text-center tracking-[var(--11-11-semib-letter-spacing)] leading-[var(--11-11-semib-line-height)] [font-style:var(--11-11-semib-font-style)]">
                {companyData.status}
              </span>
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-auto border-neutral-200 text-[#0e9145] px-4 py-2 gap-2"
            >
              <UserIcon className="w-4 h-4" />
              View Users ({companyData.users})
            </Button>
            <Button className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-4 py-2 gap-2">
              <EditIcon className="w-4 h-4" />
              Edit Company
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BuildingIcon className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company Name</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company Type</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">RC Number</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.rcNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">TIN</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.tin}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-base font-medium text-gray-900 mt-1">{companyData.phone}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Website</label>
                  <p className="text-base font-medium text-gray-900 mt-1">{companyData.website}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <p className="text-base font-medium text-gray-900 mt-1">{companyData.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {companyData.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">Uploaded: {doc.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`px-2 py-1 text-xs ${
                          doc.status === 'Verified' 
                            ? 'bg-green-50 text-green-700' 
                            : 'bg-yellow-50 text-yellow-700'
                        }`}>
                          {doc.status}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#0e9145] hover:text-[#0e9145]/80"
                        >
                          <DownloadIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Users</span>
                  <span className="font-semibold text-gray-900">{companyData.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Applications</span>
                  <span className="font-semibold text-gray-900">{companyData.applications}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Registration Date</span>
                  <span className="font-semibold text-gray-900">{companyData.registrationDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last Updated</span>
                  <span className="font-semibold text-gray-900">{companyData.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-[#0e9145] hover:bg-[#0e9145]/90 text-white">
                  View Applications
                </Button>
                <Button variant="outline" className="w-full border-neutral-200 text-gray-700">
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full border-red-200 text-red-600">
                  Suspend Company
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};