"use client";
import { SearchMulti } from "@/data/api/movies";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useRef, useState } from "react";
import SearchCard from "./movies/SearchCard";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchCommand() {
  const [SearchResult, setSearchResult] = useState({ movie: [], tv: [] });
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  const pathname = usePathname();

  const SearchHandle = useDebouncedCallback(async (e) => {
    try {
      const { movie, tv } = await SearchMulti(e.target.value);
      setSearchResult((prev) => ({ ...prev, movie: movie, tv: tv }));
    } catch (error) {
      console.log("🚀 ~ SearchHandle ~ error:", error);
    }
  }, 400);

  useEffect(() => {
    if (pathname !== "/" || !focus) {
      setSearchResult({ movie: [], tv: [] });
    }
  }, [pathname, focus]);

  return (
    <div className="flex items-center w-full max-w-sm space-x-2 ">
      <Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={inputRef}
        className="rounded-lg"
        placeholder="Search..."
        type="search"
        onChange={SearchHandle}
      />
      {(SearchResult.movie.length > 0 || SearchResult.tv.length > 0) && (
        <div className="absolute right-0 z-30 h-screen w-screen bg-white border rounded-md md:w-[600px] md:left-0 top-14 overflow-y-scroll overflow-x-hidden">
          <div className="">
            <Tabs defaultValue="movies">
              <div className="my-4 text-center">
                <TabsList>
                  <TabsTrigger
                    value="movies"
                    name="movies"
                    onClick={() => {
                      setFocus(false);
                    }}
                  >
                    movies ({SearchResult.movie.length})
                  </TabsTrigger>
                  <TabsTrigger
                    value="tvshow"
                    name="tvshow"
                    onClick={() => {
                      setFocus(false);
                    }}
                  >
                    tvshow ({SearchResult.tv.length})
                  </TabsTrigger>
                </TabsList>
              </div>
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
                      <SearchCard path="tv-show" key={movie.id} movie={movie} />
                    );
                  })}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}
