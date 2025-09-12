import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { 
  BuildingIcon, 
  EditIcon,
  SaveIcon,
  UploadIcon,
  FileTextIcon,
  UsersIcon,
  SettingsIcon,
  BellIcon,
  ShieldIcon,
  CameraIcon,
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  InfoIcon
} from "lucide-react";

export const MyCompanyInfo = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Maxfront Tech",
    type: "Single Company",
    rcNumber: "RC2368856",
    tin: "12345678",
    email: "contact@maxfronttech.com",
    phone: "+234 708 847 6682",
    website: "www.maxfronttech.com",
    address: "123 Technology Drive, Victoria Island, Lagos, Nigeria",
    description: "Maxfront Tech is a leading technology solutions provider specializing in oil and gas sector digital transformation, offering cutting-edge software solutions and consulting services.",
    ceo: "Dr. Michael Adebayo",
    founded: "2018",
    employees: "150-200"
  });

  const companyStats = {
    status: "Approved",
    registrationDate: "2024-01-15",
    lastUpdated: "2024-12-15",
    totalUsers: 12,
    activeApplications: 8,
    documentsUploaded: 15,
    complianceScore: 95
  };

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Document Verified",
      message: "Your Tax Clearance Certificate has been verified successfully.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "warning",
      title: "Document Expiring Soon",
      message: "Your Certificate of Incorporation will expire in 30 days.",
      time: "1 day ago",
      read: false
    },
    {
      id: 3,
      type: "info",
      title: "New Bid Round Available",
      message: "2024 Marginal Fields Round is now open for applications.",
      time: "3 days ago",
      read: true
    }
  ];

  const recentDocuments = [
    {
      name: "Certificate of Incorporation",
      status: "Verified",
      uploadDate: "2024-01-15",
      expiryDate: "2025-01-15",
      size: "2.4 MB"
    },
    {
      name: "Tax Clearance Certificate",
      status: "Verified",
      uploadDate: "2024-01-20",
      expiryDate: "2024-12-31",
      size: "1.8 MB"
    },
    {
      name: "Audited Financial Statement 2023",
      status: "Under Review",
      uploadDate: "2024-12-01",
      expiryDate: "N/A",
      size: "5.2 MB"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Saving company data:", formData);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified": return "bg-green-50 text-green-700 border-green-200";
      case "Under Review": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Expired": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success": return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case "warning": return <AlertTriangleIcon className="w-5 h-5 text-yellow-500" />;
      case "info": return <InfoIcon className="w-5 h-5 text-blue-500" />;
      default: return <InfoIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-[#0e9145] rounded-xl flex items-center justify-center">
                <BuildingIcon className="w-8 h-8 text-white" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <CameraIcon className="w-3 h-3 text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
                My Company Information
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <Badge className="bg-green-50 text-green-700 border-green-200 px-3 py-1 text-sm font-medium border">
                  {companyStats.status}
                </Badge>
                <span className="text-gray-500 text-sm">Last updated: {companyStats.lastUpdated}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isEditing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="h-auto border-neutral-200 text-gray-700 px-4 py-2"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-4 py-2 gap-2"
                >
                  <SaveIcon className="w-4 h-4" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-4 py-2 gap-2"
              >
                <EditIcon className="w-4 h-4" />
                Edit Information
              </Button>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{companyStats.totalUsers}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Active Applications</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{companyStats.activeApplications}</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileTextIcon className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Documents</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">{companyStats.documentsUploaded}</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileTextIcon className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Compliance Score</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">{companyStats.complianceScore}%</p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-100 p-1 w-full justify-start">
            <TabsTrigger value="profile" className="px-6 py-3 text-sm font-medium">
              Company Profile
            </TabsTrigger>
            <TabsTrigger value="documents" className="px-6 py-3 text-sm font-medium">
              Documents
            </TabsTrigger>
            <TabsTrigger value="notifications" className="px-6 py-3 text-sm font-medium">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="settings" className="px-6 py-3 text-sm font-medium">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Information */}
              <div className="lg:col-span-2">
                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BuildingIcon className="w-5 h-5" />
                      Company Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Company Name</label>
                        {isEditing ? (
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Company Type</label>
                        {isEditing ? (
                          <Input
                            value={formData.type}
                            onChange={(e) => handleInputChange('type', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.type}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">RC Number</label>
                        {isEditing ? (
                          <Input
                            value={formData.rcNumber}
                            onChange={(e) => handleInputChange('rcNumber', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.rcNumber}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">TIN</label>
                        {isEditing ? (
                          <Input
                            value={formData.tin}
                            onChange={(e) => handleInputChange('tin', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.tin}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">CEO</label>
                        {isEditing ? (
                          <Input
                            value={formData.ceo}
                            onChange={(e) => handleInputChange('ceo', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.ceo}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Founded</label>
                        {isEditing ? (
                          <Input
                            value={formData.founded}
                            onChange={(e) => handleInputChange('founded', e.target.value)}
                            className="w-full"
                          />
                        ) : (
                          <p className="text-base font-medium text-gray-900 py-2">{formData.founded}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Company Description</label>
                      {isEditing ? (
                        <textarea
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md resize-none"
                        />
                      ) : (
                        <p className="text-base text-gray-900 leading-relaxed py-2">{formData.description}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Address</label>
                      {isEditing ? (
                        <Input
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full"
                        />
                      ) : (
                        <p className="text-base text-gray-900 py-2">{formData.address}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                      {isEditing ? (
                        <Input
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full"
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <MailIcon className="w-4 h-4 text-gray-400" />
                          <p className="font-medium text-gray-900">{formData.email}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                      {isEditing ? (
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full"
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <PhoneIcon className="w-4 h-4 text-gray-400" />
                          <p className="font-medium text-gray-900">{formData.phone}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Website</label>
                      {isEditing ? (
                        <Input
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          className="w-full"
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <GlobeIcon className="w-4 h-4 text-gray-400" />
                          <p className="font-medium text-gray-900">{formData.website}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                  <CardHeader>
                    <CardTitle>Registration Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Registration Date</span>
                      <span className="font-semibold text-gray-900">{companyStats.registrationDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Status</span>
                      <Badge className="bg-green-50 text-green-700 border-green-200 px-2 py-1 text-xs font-medium border">
                        {companyStats.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Compliance Score</span>
                      <span className="font-semibold text-orange-600">{companyStats.complianceScore}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Documents</CardTitle>
                    <Button className="bg-[#0e9145] hover:bg-[#0e9145]/90 text-white gap-2">
                      <UploadIcon className="w-4 h-4" />
                      Upload Document
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentDocuments.map((doc, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <FileTextIcon className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium text-gray-900">{doc.name}</p>
                              <p className="text-sm text-gray-500">{doc.size}</p>
                            </div>
                          </div>
                          <Badge className={`px-2 py-1 text-xs font-medium border ${getStatusColor(doc.status)}`}>
                            {doc.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Uploaded: {doc.uploadDate}</span>
                          {doc.expiryDate !== "N/A" && (
                            <span>Expires: {doc.expiryDate}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                <CardHeader>
                  <CardTitle>Document Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                        <h4 className="font-medium text-green-800">Required Documents Complete</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        All mandatory documents have been uploaded and verified.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Document Checklist:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">Certificate of Incorporation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">Tax Clearance Certificate</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <AlertTriangleIcon className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">Audited Financial Statement</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">Technical Capability Assessment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BellIcon className="w-5 h-5" />
                    Recent Notifications
                  </CardTitle>
                  <Button variant="outline" className="text-sm">
                    Mark All as Read
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border rounded-lg ${
                        notification.read ? 'border-gray-200 bg-white' : 'border-blue-200 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-gray-900">{notification.title}</h4>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="w-5 h-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add extra security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Data Export</p>
                      <p className="text-sm text-gray-500">Download your company data</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldIcon className="w-5 h-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <h4 className="font-medium text-green-800">Account Secure</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      Your account meets all security requirements.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Last Login</span>
                      <span className="text-sm font-medium text-gray-900">Today, 10:30 AM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Password Last Changed</span>
                      <span className="text-sm font-medium text-gray-900">30 days ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Active Sessions</span>
                      <span className="text-sm font-medium text-gray-900">2 devices</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#0e9145] hover:bg-[#0e9145]/90 text-white">
                    Change Password
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};