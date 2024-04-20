"use client";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { useCallback, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export function FancyMultiSelect({ data }) {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected1 = searchParams.getAll("with_genres");

  const selectedFilters =
    selected1.toString().split(",").length !== 1
      ? selected1.toString().split(",")
      : [];

  const handleRoute = (value) => {
    const newParams = new URLSearchParams(searchParams);

    setSelected((prev) => [...prev, value.value]);

    newParams.set("with_genres", selected);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  const createQueryString = (value) => {
    const params = new URLSearchParams(searchParams);

    const filter = [];

    params.set("with_genre", [1, 2, 3, 4]);

    return params.toString();
  };

  const handleUnselect = useCallback((framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = useCallback((e) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, []);

  const selectables = data.filter(
    (framework) => !selected1.includes(framework)
  );

  return (
    <Command onKeyDown={handleKeyDown} className="w-56 overflow-visible">
      <div className="px-3 py-2 text-sm border rounded-md group border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selectedFilters.map((framework) => {
            return (
              <Badge key={framework} variant="secondary">
                {framework}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select data..."
            className="flex-1 ml-2 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute top-0 z-10 w-full border rounded-md shadow-md outline-none bg-popover text-popover-foreground animate-in">
            <CommandGroup className="overflow-auto h-80 ">
              {selectables.map((framework) => {
                return (
                  <Link
                    href={pathname + "?" + createQueryString(framework)}
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    // onSelect={(value) => {
                    //   handleRoute(framework);
                    //   setInputValue("");
                    //   // setSelected((prev) => [...prev, framework]);
                    // }}
                    className={"cursor-pointer "}
                  >
                    {framework.label}
                  </Link>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
