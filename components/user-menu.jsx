"use client"; // 👈 CRITICAL: This fixes the Hydration Error

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesColumn, ChevronDown, FileText, GraduationCap, PenBox, StarsIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const UserMenu = () => {
  return (
    <>
      <Link href={"/dashboard"}>
        <Button variant="outline">
          <ChartNoAxesColumn className="h-4 w-4 mr-2" />
          <span className="hidden md:block">Industry Insights</span>
        </Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <StarsIcon className="h-4 w-4 mr-2" />
            <span className="hidden md:block">Growth Tools</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>
            <Link href="/resume" className="flex items-center gap-2 w-full">
              <FileText className="h-4 w-4" />
              <span>Build Resume</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/ai-cover-letter" className="flex items-center gap-2 w-full">
              <PenBox className="h-4 w-4" />
              <span>Cover Letter</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/interview" className="flex items-center gap-2 w-full">
              <GraduationCap className="h-4 w-4" />
              <span>Interview Prep</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
          },
        }}
        afterSignOutUrl="/"
      />
    </>
  );
};