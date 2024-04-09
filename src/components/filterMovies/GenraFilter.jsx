"use client";

import { Check, ArrowDownUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function GenraFilter({ data, name }) {
  const [open, setOpen] = useState(false);

  const params = useSearchParams();
  const value1 = params.get("with_genres");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value1
            ? data?.find((item) => item.value === value1)?.label
            : `Select ${name}`}
          <ArrowDownUp className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search item..." className="h-9" />
          <CommandEmpty>{`No ${name} found.`}</CommandEmpty>
          <CommandGroup>
            {data?.map((item) => (
              <CommandItem key={item.value} className="p-0 ">
                <Link
                  className="flex w-full p-2 text-center "
                  href={`?with_genres=${item.value}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value1 === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
