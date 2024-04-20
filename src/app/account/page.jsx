import FavMovies from "@/components/account/FavMovies";
import WatchListMovies from "@/components/account/WatchListMovies";
import SwiperSkeleton from "@/components/SwiperSkeleton";
import React, { Suspense } from "react";

export default async function AccountPage() {
  return (
    <div className="min-h-screen p-5">
      <Suspense fallback={<SwiperSkeleton />}>
        <FavMovies />
      </Suspense>
      <Suspense fallback={<SwiperSkeleton />}>
        <WatchListMovies />
      </Suspense>
      {/* <FavMovies />
      <WatchListMovies /> */}
    </div>
  );
}
