import React from "react";

export default function MovieInfo({
  overview,
  budget,
  release_date,
  vote_average,
  language,
}) {
  return (
    <div className="w-1/2 m-auto space-y-10 border">
      <Info name="Over view" info={overview} />
      <Info name="Budget" info={budget} />
      <Info name="Release date" info={release_date} />
      <Info name="Vote average" info={vote_average} />
      <Info name="Language" info={language} />
    </div>
  );
}

export const Info = ({ name, info }) => {
  return (
    <div className="space-y-2 ">
      <h2 className="text-2xl">
        {name}:{info}
      </h2>
      {/* <p>{info}</p> */}
    </div>
  );
};
