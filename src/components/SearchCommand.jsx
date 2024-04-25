"use client";
import { SearchMulti } from "@/data/api/movies";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";
import SearchCard from "./movies/SearchCard";
import { usePathname } from "next/navigation";

export function SearchCommand() {
  const [SearchResult, setSearchResult] = useState({ movie: [], tv: [] });
  const pathname = usePathname();

  const SearchHandle = async (e) => {
    const { movie, tv } = await SearchMulti(e.target.value);
    setSearchResult((prev) => ({ ...prev, movie: movie, tv: tv }));
  };

  useEffect(() => {
    if (pathname !== "/") {
      setSearchResult({ movie: [], tv: [] });
    }
  }, [pathname]);

  return (
    <div className="flex items-center w-full max-w-sm space-x-2 ">
      <Input
        className="rounded-lg"
        placeholder="Search..."
        type="search"
        onChange={SearchHandle}
      />

      {(SearchResult.movie.length > 0 || SearchResult.tv.length > 0) && (
        <div className="absolute right-0 z-30 h-screen w-screen bg-white border rounded-md md:w-[600px] md:left-0 top-14 overflow-y-scroll overflow-x-hidden">
          <div className="">
            <Tabs defaultValue="movies" className="">
              <div>
                <TabsList>
                  <TabsTrigger value="movies">
                    movies ({SearchResult.movie.length})
                  </TabsTrigger>
                  <TabsTrigger value="tvshow">
                    tvshow ({SearchResult.tv.length})
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="movies">
                  <ul>
                    {SearchResult.movie.map((movie) => {
                      return <SearchCard key={movie.id} movie={movie} />;
                    })}
                  </ul>
                </TabsContent>
                <TabsContent value="tvshow">
                  <ul>
                    {SearchResult.tv.map((movie) => {
                      return (
                        <SearchCard
                          path="tv-show"
                          key={movie.id}
                          movie={movie}
                        />
                      );
                    })}
                  </ul>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}
