"use client";

import { SearchMulti } from "@/data/api/movies";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import SearchCard from "./movies/SearchCard";

export function SearchCommand() {
  const [SearchResult, setSearchResult] = useState({ movie: [], tv: [] });

  const SearchHandle = async (e) => {
    const { movie, tv } = await SearchMulti(e.target.value);
    setSearchResult((prev) => ({ ...prev, movie: movie, tv: tv }));
  };

  const closeSearch = () => {
    console.log("clicked");
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 relative">
      <Input
        className="rounded-lg"
        placeholder="Search..."
        type="search"
        onChange={SearchHandle}
      />

      {(SearchResult.movie.length > 0 || SearchResult.tv.length > 0) && (
        <div className="bg-white border  rounded-md  w-[600px] absolute top-12 left-0 right-0 z-30 ">
          <div className="">
            <Tabs defaultValue="movies" className="w-[400px]">
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
                      return (
                        <SearchCard
                          key={movie.id}
                          movie={movie}
                          onClick={closeSearch}
                        />
                      );
                    })}
                  </ul>
                </TabsContent>
                <TabsContent value="tvshow">
                  <ul>
                    {SearchResult.tv.map((movie) => {
                      return (
                        <SearchCard
                          key={movie.id}
                          movie={movie}
                          onClick={closeSearch}
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
