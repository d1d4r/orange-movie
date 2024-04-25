import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
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
import AccountMenu from "./account/AccountMenu";
import { SearchCommand } from "./SearchCommand";

export default function Nav() {
  return (
    <header className="flex justify-between p-3 text-primary">
      <div className="flex w-full gap-2">
        <div className="flex items-center justify-center gap-2 ">
          <AccountMenu />
          <Link
            className="flex-none text-xl font-semibold sm:order-1 text-foreground/60 hover:text-foreground/80"
            href="/"
          >
            Brand
          </Link>
        </div>
        {/* <SearchModal /> */}
        <SearchCommand/>
      </div>
      <nav
        className="flex-wrap items-center justify-between hidden px-4 w-fit sm:flex "
        aria-label="Global"
      >
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
        <SheetTrigger className=" sm:hidden">
          <Menu className="text-primary" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="flex flex-col gap-5 mt-5 sm:items-center sm:mt-0 sm:ps-5">
              <SheetClose asChild>
                <NavLink href={"/"} name={"home"} />
              </SheetClose>
              <SheetClose asChild>
                <MenuItemDropdown />
              </SheetClose>
              <SheetClose asChild>
                <NavLink href={"/actors"} name={"actors"} />
              </SheetClose>
              <SheetClose asChild>
                <NavLink href={"/tv-show"} name={"tvshow"} />
              </SheetClose>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function NavLink({ href, name }) {
  return (
    <Link
      href={href}
      className="cursor-pointer text-foreground/60 hover:text-foreground/80"
    >
      {name}
    </Link>
  );
}

export const MenuItemDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-foreground/60 hover:text-foreground/80">
        Movies
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={"/movies"}>
          <DropdownMenuItem className="cursor-pointer">All</DropdownMenuItem>
        </Link>
        <Link href={"/movies?type=popular"}>
          <DropdownMenuItem className="cursor-pointer">
            Popular
          </DropdownMenuItem>
        </Link>
        <Link href={"/movies?type=now_playing"}>
          <DropdownMenuItem className="cursor-pointer">
            Now Playing
          </DropdownMenuItem>
        </Link>
        <Link href={"/movies?type=top_rated"}>
          <DropdownMenuItem className="cursor-pointer">
            Top Rated
          </DropdownMenuItem>
        </Link>
        <Link href={"/movies?type=up_coming"}>
          <DropdownMenuItem className="cursor-pointer">
            up coming
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
