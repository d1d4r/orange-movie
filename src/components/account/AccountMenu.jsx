import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import OpenModal from "../OpenModal";
import Link from "next/link";
import { Button } from "../ui/button";
import { CircleUserRound, LogOut } from "lucide-react";

export default function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4 ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem asChild>
          <Link
            href={"/account"}
            className="flex justify-between w-full p-0 m-0"
          >
            <span>Account</span>
            <CircleUserRound className="text-primary size-6" />
          </Link>
        </DropdownMenuItem> */}
        {/* <DropdownMenuItem asChild>
          <Button
            variant="destructive"
            className="flex justify-between w-full p-0 m-0"
          >
            <span>Sign Out</span>
            <LogOut className=" size-6" />
          </Button>
        </DropdownMenuItem> */}
        <DropdownMenuItem asChild>
          <Link href={"/sign-in"}>SignIn</Link>
        </DropdownMenuItem>

        {/* <DropdownMenuItem asChild>
          <OpenModal />
        </DropdownMenuItem> */}
        {/* <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
