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
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
export default function ActorPaginatio({ type = "person" }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`actors?type=${type}&page=${currentPage - 1}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            isActive
            className={cn("border bg-black text-white")}
            href={`actors?type=${type}&page=${currentPage}`}
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`actors?type=${type}&page=${500}`}>
            {500}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`actors?type=${type}&page=${currentPage + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
