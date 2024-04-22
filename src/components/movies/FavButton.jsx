import { Check, Heart } from "lucide-react";
import { GetAccountStates } from "@/data/api/movies";
import ActionButton from "../ActionButton";

export default async function FavButton({ movieId }) {
  const { favorite: checked } = await GetAccountStates(movieId);

  // const [checked, setChecked] = useState(false);
  // const [error, setError] = useState(null);

  // const pathname = usePathname();

  // const pathArray = pathname.split("/");
  // const movieId = pathArray[pathArray.length - 1];

  // async function fetchData() {
  //   try {
  //     const res = await GetAccountStates(+movieId);

  //     setChecked(res.favorite);
  //   } catch (error) {
  //     setError(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (error) {
  //   return (
  //     <div className="p-2 text-red-700 bg-white">
  //       {error.code}:{error.message}
  //     </div>
  //   );
  // }

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

// export async function GetFavMovieById(movieId) {
//   try {
//     const res = await api.get("account/21156670/favorite/movies");
//     const movieIds = res.data.results.map((movie) => movie.id); // Extract movie IDs
//     return movieIds.includes(movieId); // Check if movie ID exists in favorites
//   } catch (error) {
//     console.error("Error fetching favorite movies:", error);
//     throw error // Indicate error if fetching fails
//   }
// }
