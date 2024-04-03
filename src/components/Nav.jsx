import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Nav() {
  return (
    <header className="flex p-5 border">
      <nav
        className="max-w-[85rem] hidden w-full mx-auto px-4 sm:flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <Link
          className="flex-none text-xl font-semibold sm:order-1 dark:text-white"
          href="/"
        >
          Brand
        </Link>
        <div
          id="navbar-alignment"
          className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <MenuItemDropdown />
            <NavLink href={"/"} name={"Home"} />
            <NavLink href={"/actors"} name={"Actors"} />
            <NavLink href={"/tv-show"} name={"Tvshow"} />
          </div>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger className="self-end sm:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="flex flex-col gap-5 mt-5 sm:items-center sm:mt-0 sm:ps-5">
              <MenuItemDropdown />
              <NavLink href={"/"} name={"home"} />
              <NavLink href={"/actors"} name={"actors"} />
              <NavLink href={"/tv-show"} name={"tvshow"} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function NavLink({ href, name }) {
  return <Link href={href}>{name}</Link>;
}

export const MenuItemDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Movies</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>list</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/movies?type=popular"}>popular</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/movies?type=now_playing"}>now playing </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/movies?type=top_rated"}>top rated</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"#"}>up coming </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
