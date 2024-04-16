"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
export default function MoviesPagination({ type }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
 

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", +pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage-1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive
            className={cn("border bg-black text-white")}
            href={createPageURL(currentPage)}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage+1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
