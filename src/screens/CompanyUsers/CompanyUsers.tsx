import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  UserPlusIcon, 
  SearchIcon, 
  MoreHorizontalIcon, 
  EditIcon, 
  TrashIcon, 
  MailIcon, 
  PhoneIcon,
  CalendarIcon,
  UserIcon,
  ShieldIcon,
  CheckCircleIcon,
  XCircleIcon
} from "lucide-react";

export const CompanyUsers = (): JSX.Element => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const companyInfo = {
    name: "Maxfront Tech",
    id: id || "1",
    totalUsers: 12,
    activeUsers: 10,
    pendingUsers: 2
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@maxfronttech.com",
      phone: "+234 801 234 5678",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-12-15 10:30 AM",
      joinDate: "2024-01-15",
      permissions: ["Full Access", "User Management", "Reports"],
      avatar: "JD"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@maxfronttech.com",
      phone: "+234 802 345 6789",
      role: "Manager",
      status: "Active",
      lastLogin: "2024-12-14 03:45 PM",
      joinDate: "2024-02-20",
      permissions: ["View Reports", "Manage Applications"],
      avatar: "JS"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@maxfronttech.com",
      phone: "+234 803 456 7890",
      role: "User",
      status: "Pending",
      lastLogin: "Never",
      joinDate: "2024-12-10",
      permissions: ["View Only"],
      avatar: "MJ"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@maxfronttech.com",
      phone: "+234 804 567 8901",
      role: "Manager",
      status: "Inactive",
      lastLogin: "2024-12-01 09:15 AM",
      joinDate: "2024-03-10",
      permissions: ["View Reports", "Manage Applications"],
      avatar: "SW"
    }
  ];

  const tabOptions = [
    { value: "all", label: "All Users", count: users.length },
    { value: "active", label: "Active", count: users.filter(u => u.status === "Active").length },
    { value: "pending", label: "Pending", count: users.filter(u => u.status === "Pending").length },
    { value: "inactive", label: "Inactive", count: users.filter(u => u.status === "Inactive").length }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || user.status.toLowerCase() === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-50 text-green-700 border-green-200";
      case "Pending": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Inactive": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-purple-50 text-purple-700 border-purple-200";
      case "Manager": return "bg-blue-50 text-blue-700 border-blue-200";
      case "User": return "bg-gray-50 text-gray-700 border-gray-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-full items-start gap-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
                Company Users
              </h1>
              <p className="text-gray-600 mt-1">
                Manage users for {companyInfo.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-auto border-neutral-200 text-gray-700 px-4 py-2 gap-2"
            >
              <img className="w-4 h-4" alt="Export" src="/vuesax-outline-export.svg" />
              Export Users
            </Button>
            <Button className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-4 py-2 gap-2">
              <UserPlusIcon className="w-4 h-4" />
              Add New User
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{companyInfo.totalUsers}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Active Users</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{companyInfo.activeUsers}</p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Pending Users</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">{companyInfo.pendingUsers}</p>
                </div>
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#e4e7ec] shadow-shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Admins</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">
                    {users.filter(u => u.role === "Admin").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="relative w-80">
              <Input
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border-[#cfd4dc] shadow-shadow-xs"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            <Select>
              <SelectTrigger className="w-40 bg-white border-[#cfd4dc] shadow-shadow-xs">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="bg-gray-100 p-1">
              {tabOptions.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-[#0e9145] data-[state=active]:shadow-sm"
                >
                  {tab.label} ({tab.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Users Table */}
        <Card className="w-full bg-white border-[#e4e7ec] shadow-shadow-sm rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0e9145] border-b border-[#d2d6db] hover:bg-[#0e9145]">
                  <TableHead className="text-white font-semibold text-sm pl-6 pr-4 py-4">User</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Contact</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Role</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Status</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Last Login</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Join Date</TableHead>
                  <TableHead className="text-white font-semibold text-sm px-4 py-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-b border-[#e4e7ec] hover:bg-gray-50">
                    <TableCell className="pl-6 pr-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0e9145] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MailIcon className="w-4 h-4" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <PhoneIcon className="w-4 h-4" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge className={`px-2 py-1 text-xs font-medium border ${getRoleColor(user.role)}`}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge className={`px-2 py-1 text-xs font-medium border ${getStatusColor(user.status)}`}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="text-sm text-gray-600">{user.lastLogin}</span>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <span className="text-sm text-gray-600">{user.joinDate}</span>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-500 hover:text-[#0e9145]"
                        >
                          <EditIcon className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-500 hover:text-red-600"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700"
                        >
                          <MoreHorizontalIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <UserIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">No users found</p>
                <p className="text-gray-400 text-sm">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between pt-4 pb-6 px-6 border-t border-[#e4e7ec]">
              <span className="text-sm text-gray-700">
                Showing {filteredUsers.length} of {users.length} users
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 py-1.5 text-sm"
                  disabled
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 py-1.5 text-sm"
                  disabled
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};