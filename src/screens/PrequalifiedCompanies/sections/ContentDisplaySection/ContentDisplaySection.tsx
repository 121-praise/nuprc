import {
  CalendarIcon,
  DownloadIcon,
  EyeIcon,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const companyData = [
  {
    id: 1,
    name: "Prequalified Corp A",
    type: "Single",
    rcNumber: "PQ123456",
    email: "contact@prequalcorpa.com",
    status: "Prequalified",
    action: true,
    details: {
      rcNumber: "PQ123456",
      tin: "12345678",
      contactPhone: "07088476682",
      website: "www.prequalcorpa.com",
      prequalificationDate: "2024-01-15",
      validUntil: "2025-01-15",
    },
  },
  {
    id: 2,
    name: "Prequalified Corp B",
    type: "Joint Venture",
    rcNumber: "PQ789012",
    email: "info@prequalcorpb.com",
    status: "Prequalified",
    action: true,
    details: {
      rcNumber: "PQ789012",
      tin: "87654321",
      contactPhone: "08012345678",
      website: "www.prequalcorpb.com",
      prequalificationDate: "2024-02-20",
      validUntil: "2025-02-20",
    },
  },
];

const tabOptions = [
  { value: "all", label: "All Prequalified" },
  { value: "valid", label: "Valid Prequalification" },
  { value: "expiring", label: "Expiring Soon" },
];

export const ContentDisplaySection = (): JSX.Element => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const toggleRowExpansion = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full items-start gap-6 relative">
      <div className="flex flex-col w-full items-start gap-4 relative">
        <div className="flex items-center justify-between w-full">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[32px] tracking-[0] leading-[43.2px]">
            Prequalified Companies
          </h1>

          <Button className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-5 py-3 gap-1">
            <img
              className="w-5 h-5"
              alt="Export"
              src="/vuesax-outline-export.svg"
            />
            Export
          </Button>
        </div>

        <div className="flex items-start gap-4 w-full">
          <div className="relative flex-1">
            <div className="relative">
              <Input
                placeholder="Search prequalified companies"
                className="pl-3.5 pr-12 py-2.5 bg-white border-[#cfd4dc] shadow-[0px_1px_2px_#1018280d] [font-family:'Inter',Helvetica] font-normal text-[#667084] text-base"
              />
              <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <SearchIcon className="w-5 h-5 text-[#667084]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 w-[328px]">
            <div className="flex-1">
              <div className="relative">
                <Input
                  placeholder="From"
                  className="pl-3.5 pr-12 py-2.5 bg-white border-[#cfd4dc] shadow-shadow-xs [font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm"
                />
                <CalendarIcon className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Input
                  placeholder="To"
                  className="pl-3.5 pr-12 py-2.5 bg-white border-[#cfd4dc] shadow-shadow-xs [font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm"
                />
                <CalendarIcon className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-[269px] bg-white border-[#cfd4dc] shadow-shadow-xs [font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm">
              <SelectValue placeholder="With Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prequalified">Prequalified</SelectItem>
              <SelectItem value="valid">Valid</SelectItem>
              <SelectItem value="expiring">Expiring</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="h-auto px-3 py-1.5 border-neutral-200 [font-family:'Inter',Helvetica] font-semibold text-[#8d8d8d] text-sm"
          >
            Filter
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList className="bg-transparent p-0 gap-2">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`px-2.5 py-2.5 rounded-[30px] border ${
                  activeTab === tab.value
                    ? "bg-[#0e9145] text-white border-[#0e9145] font-text-sm-semibold"
                    : "bg-transparent text-neutral-600 border-neutral-200 [font-family:'Inter',Helvetica] font-normal text-sm"
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-1.5 w-[328px]">
          <Select>
            <SelectTrigger className="flex-1 bg-white border-[#cfd4dc] shadow-shadow-xs [font-family:'Inter',Helvetica] font-normal text-gray-500 text-sm">
              <SelectValue placeholder="Bulk Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="renew">Renew Prequalification</SelectItem>
              <SelectItem value="revoke">Revoke</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="h-auto px-3 py-1.5 border-neutral-200 [font-family:'Inter',Helvetica] font-semibold text-[#8d8d8d] text-sm"
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[35px] w-full">
        <Card className="w-full bg-white border-[#e4e7ec] shadow-shadow-sm rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0e9145] border-b-[1.11px] border-[#d2d6db] hover:bg-[#0e9145]">
                  <TableHead className="text-white font-semibold text-sm w-12 pl-4 pr-2.5">
                    SN
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-[201px] pl-4 pr-2.5">
                    <div className="flex items-center gap-1.5">
                      Names
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-[98px] pr-2.5">
                    <div className="flex items-center gap-1.5">
                      Type
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-[131px] pr-2.5">
                    <div className="flex items-center gap-1.5">
                      RC Number
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-[166px] pr-2.5">
                    <div className="flex items-center gap-1.5">
                      Email
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-24 pr-2.5">
                    <div className="flex items-center gap-1.5">
                      Status
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-sm w-[135px] pr-2.5">
                    <div className="flex items-center gap-1.5">
                      Action
                      <img
                        className="w-[13.3px] h-[13.3px]"
                        alt="Sort"
                        src="/icon-chevrons-up-down.svg"
                      />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companyData.map((company) => (
                  <React.Fragment key={company.id}>
                    <TableRow className="border-b-[1.11px] border-[#d2d6db]">
                      <TableCell className="pl-4 pr-2.5 py-3.5">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#090a0b] text-[15.5px]">
                          {company.id}
                        </span>
                      </TableCell>
                      <TableCell className="pl-4 pr-2.5 py-3.5">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#090a0b] text-[15.5px]">
                          {company.name}
                        </span>
                      </TableCell>
                      <TableCell className="pr-2.5 py-3.5">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#090a0b] text-[15.5px]">
                          {company.type}
                        </span>
                      </TableCell>
                      <TableCell className="px-2.5 py-3.5">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#090a0b] text-[15px]">
                          {company.rcNumber}
                        </span>
                      </TableCell>
                      <TableCell className="px-2.5 py-3.5">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#090a0b] text-[15px]">
                          {company.email}
                        </span>
                      </TableCell>
                      <TableCell className="px-2.5 py-3.5">
                        <Badge className="bg-purple-50 text-purple-700 rounded-lg px-1.5 py-px">
                          <span className="font-11-11-semib font-[number:var(--11-11-semib-font-weight)] text-[length:var(--11-11-semib-font-size)] text-center tracking-[var(--11-11-semib-letter-spacing)] leading-[var(--11-11-semib-line-height)] [font-style:var(--11-11-semib-font-style)]">
                            {company.status}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell className="px-2.5 py-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-5 h-5"
                            alt="Toggle"
                            src={
                              company.action
                                ? "/vuesax-bold-toggle-on-circle.svg"
                                : "/vuesax-bold-toggle-off-circle.svg"
                            }
                          />
                          <span className="[font-family:'Roboto',Helvetica] font-normal text-lightslate-12 text-sm">
                            {company.action ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="pr-2.5">
                        <Collapsible>
                          <CollapsibleTrigger
                            onClick={() => toggleRowExpansion(company.id)}
                            className="p-0 border-0 bg-transparent"
                          >
                            <img
                              className="w-6 h-6"
                              alt="Expand"
                              src="/vuesax-outline-arrow-square-down.svg"
                            />
                          </CollapsibleTrigger>
                        </Collapsible>
                      </TableCell>
                    </TableRow>
                    {expandedRow === company.id && (
                      <TableRow className="border-b border-neutral-200">
                        <TableCell colSpan={8} className="px-[91px] py-[25px]">
                          <div className="flex flex-col gap-6 w-full">
                            <div className="grid grid-cols-3 gap-8 w-full">
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  RC Number
                                  <br />
                                </span>
                                <br />
                                {company.details.rcNumber}
                              </div>
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  TIN
                                  <br />
                                </span>
                                <br />
                                {company.details.tin}
                              </div>
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  Contact Phone
                                  <br />
                                  <br />
                                </span>
                                <a
                                  href={`tel:${company.details.contactPhone}`}
                                  className="underline"
                                >
                                  {company.details.contactPhone}
                                </a>
                              </div>
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  Website
                                  <br />
                                </span>
                                <br />
                                {company.details.website}
                              </div>
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  Prequalification Date
                                  <br />
                                </span>
                                <br />
                                {company.details.prequalificationDate}
                              </div>
                              <div className="[font-family:'Roboto',Helvetica] font-normal text-neutral-600 text-base">
                                <span className="font-bold">
                                  Valid Until
                                  <br />
                                </span>
                                <br />
                                {company.details.validUntil}
                              </div>
                            </div>
                            <img
                              className="w-full h-px object-cover"
                              alt="Divider"
                              src="/line-4.svg"
                            />
                            <div className="flex justify-end gap-[17px]">
                              <Button className="h-auto bg-[#0e9145] hover:bg-[#0e9145]/90 text-white px-3 py-1.5 gap-0.5">
                                <EyeIcon className="w-4 h-4" />
                                View
                              </Button>
                              <Button
                                variant="outline"
                                className="h-auto border-neutral-200 text-[#0e9145] px-3 py-1.5 gap-0.5"
                              >
                                <DownloadIcon className="w-4 h-4" />
                                Download
                              </Button>
                              <Button
                                variant="outline"
                                className="h-auto border-orange-200 text-orange-600 px-3 py-1.5 gap-0.5"
                              >
                                Renew
                              </Button>
                              <Button
                                variant="ghost"
                                className="h-auto text-[#da1e28] px-3 py-1.5 gap-0.5 underline"
                              >
                                <Trash2Icon className="w-5 h-5" />
                                Revoke
                              </Button>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between pt-3 pb-4 px-6 border-t border-[#e4e7ec]">
              <span className="font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-gray-700 text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] [font-style:var(--text-sm-medium-font-style)]">
                Page 1 of 3
              </span>

              <div className="flex items-start gap-3">
                <Button
                  variant="outline"
                  className="h-auto bg-white border-[#cfd4dc] shadow-[0px_1px_2px_#1018280d] px-3.5 py-2 font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-gray-700 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  className="h-auto bg-white border-[#cfd4dc] shadow-[0px_1px_2px_#1018280d] px-3.5 py-2 font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-gray-700 text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]"
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};