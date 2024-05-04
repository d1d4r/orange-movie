import { Check, Heart } from "lucide-react";
import { GetAccountStates } from "@/data/api/movies";
import ActionButton from "../ActionButton";

export default async function FavButton({ movieId }) {
  const { favorite: checked } = await GetAccountStates(movieId);



  return (
    <>
      {/* <Button
        className={cn({
          "bg-blue-600 border-blue-600 text-white ": checked,
        })}
      >
        <div className="flex items-center gap-2">
          <div className="text-lg">{checked ? <Check /> : <Heart />}</div>
          <div>Favorite</div>
        </div>
      </Button> */}
      <ActionButton movieId={movieId} checked={checked}>
        <div className="flex items-center gap-2">
          <div className="text-lg">{checked ? <Check /> : <Heart />}</div>
          <div>Favorite</div>
        </div>
      </ActionButton>
    </>
  );
}

