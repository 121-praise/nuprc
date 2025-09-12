import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { 
  BuildingIcon, 
  UsersIcon, 
  FileTextIcon, 
  TrendingUpIcon,
  EditIcon,
  DownloadIcon,
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  AlertCircleIcon,
  DollarSignIcon
} from "lucide-react";

export const MaxfrontTech = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("overview");

  const companyData = {
    name: "Maxfront Tech",
    type: "Single Company",
    rcNumber: "RC2368856",
    tin: "12345678",
    email: "contact@maxfronttech.com",
    phone: "+234 708 847 6682",
    website: "www.maxfronttech.com",
    address: "123 Technology Drive, Victoria Island, Lagos, Nigeria",
    status: "Approved",
    registrationDate: "2024-01-15",
    lastUpdated: "2024-12-15",
    description: "Maxfront Tech is a leading technology solutions provider specializing in oil and gas sector digital transformation, offering cutting-edge software solutions and consulting services.",
    ceo: "Dr. Michael Adebayo",
    founded: "2018",
    employees: "150-200",
    revenue: "$5.2M (2023)"
  };

  const stats = [
    {
      title: "Total Users",
      value: "12",
      change: "+2 this month",
      icon: UsersIcon,
      color: "blue"
    },
    {
      title: "Active Applications",
      value: "8",
      change: "+3 pending",
      icon: FileTextIcon,
      color: "green"
    },
    {
      title: "Success Rate",
      value: "85%",
      change: "+5% from last year",
      icon: TrendingUpIcon,
      color: "purple"
    },
    {
      title: "Total Value",
      value: "$12.5M",
      change: "Bid applications",
      icon: DollarSignIcon,
      color: "orange"
    }
  ];

  const recentApplications = [
    {
      id: "BID-2024-001",
      title: "2024 Marginal Fields Round",
      status: "Under Review",
      submittedDate: "2024-12-01",
      amount: "$2.5M",
      progress: 75
    },
    {
      id: "BID-2024-002",
      title: "Deep Water Exploration License",
      status: "Approved",
      submittedDate: "2024-11-15",
      amount: "$5.0M",
      progress: 100
    },
    {
      id: "BID-2024-003",
      title: "Onshore Production License",
      status: "Pending",
      submittedDate: "2024-12-10",
      amount: "$3.2M",
      progress: 45
    }
  ];

  const documents = [
    {
      name: "Certificate of Incorporation",
      status: "Verified",
      uploadDate: "2024-01-15",
      size: "2.4 MB"
    },
    {
      name: "Tax Clearance Certificate",
      status: "Verified",
      uploadDate: "2024-01-20",
      size: "1.8 MB"
    },
    {
      name: "Audited Financial Statement 2023",
      status: "Verified",
      uploadDate: "2024-02-01",
      size: "5.2 MB"
    },
    {
      name: "Technical Capability Assessment",
      status: "Pending Review",
      uploadDate: "2024-12-01",
      size: "3.1 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-50 text-green-700 border-green-200";
      case "Under Review": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Pending": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Verified": return "bg-green-50 text-green-700 border-green-200";
      case "Pending Review": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-100 text-blue-600";
      case "green": return "bg-green-100 text-green-600";
      case "purple": return "bg-purple-100 text-purple-600";
      case "orange": return "bg-orange-100 text-orange-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#0e9145] rounded-xl flex items-center justify-center">
              <BuildingIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
                {companyData.name}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <Badge className={`px-3 py-1 text-sm font-medium border ${getStatusColor(companyData.status)}`}>
                  {companyData.status}
                </Badge>
                <span className="text-gray-500 text-sm">{companyData.type}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-auto border-neutral-200 text-gray-700 px-4 py-2 gap-2"
            >
              <DownloadIcon className="w-4 h-4" />
              Generate Report
            </Button>
            <Button className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-4 py-2 gap-2">
              <EditIcon className="w-4 h-4" />
              Edit Company
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getStatColor(stat.color)}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-100 p-1 w-full justify-start">
            <TabsTrigger value="overview" className="px-6 py-3 text-sm font-medium">
              Overview
            </TabsTrigger>
            <TabsTrigger value="applications" className="px-6 py-3 text-sm font-medium">
              Applications
            </TabsTrigger>
            <TabsTrigger value="documents" className="px-6 py-3 text-sm font-medium">
              Documents
            </TabsTrigger>
            <TabsTrigger value="users" className="px-6 py-3 text-sm font-medium">
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Company Information */}
              <div className="lg:col-span-2">
                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BuildingIcon className="w-5 h-5" />
                      Company Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
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
                        <label className="text-sm font-medium text-gray-500">CEO</label>
                        <p className="text-base font-medium text-gray-900 mt-1">{companyData.ceo}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Founded</label>
                        <p className="text-base font-medium text-gray-900 mt-1">{companyData.founded}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Employees</label>
                        <p className="text-base font-medium text-gray-900 mt-1">{companyData.employees}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Annual Revenue</label>
                        <p className="text-base font-medium text-gray-900 mt-1">{companyData.revenue}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">Description</label>
                      <p className="text-base text-gray-900 mt-1 leading-relaxed">{companyData.description}</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">Address</label>
                      <p className="text-base text-gray-900 mt-1">{companyData.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact & Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{companyData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">{companyData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <GlobeIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <p className="font-medium text-gray-900">{companyData.website}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Registration Date</span>
                      <span className="font-semibold text-gray-900">{companyData.registrationDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Last Updated</span>
                      <span className="font-semibold text-gray-900">{companyData.lastUpdated}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Status</span>
                      <Badge className={`px-2 py-1 text-xs font-medium border ${getStatusColor(companyData.status)}`}>
                        {companyData.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-[#0e9145] hover:bg-[#0e9145]/90 text-white">
                      View All Applications
                    </Button>
                    <Button variant="outline" className="w-full border-neutral-200 text-gray-700">
                      Manage Users
                    </Button>
                    <Button variant="outline" className="w-full border-neutral-200 text-gray-700">
                      Download Documents
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{app.title}</h4>
                          <p className="text-sm text-gray-500">ID: {app.id}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={`px-2 py-1 text-xs font-medium border ${getStatusColor(app.status)}`}>
                            {app.status}
                          </Badge>
                          <p className="text-sm font-semibold text-gray-900 mt-1">{app.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Submitted: {app.submittedDate}</span>
                        <span>Progress: {app.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-[#0e9145] h-2 rounded-full" 
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Company Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileTextIcon className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">Uploaded: {doc.uploadDate} • {doc.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`px-2 py-1 text-xs font-medium border ${getStatusColor(doc.status)}`}>
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
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <CardTitle>Company Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <UsersIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium">12 Active Users</p>
                  <p className="text-gray-400 text-sm mb-4">Manage all users for this company</p>
                  <Button className="bg-[#0e9145] hover:bg-[#0e9145]/90 text-white">
                    View All Users
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};