export default function Skeleton() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-5">
      {[...Array(10)].map((movie, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="w-full overflow-hidden bg-gray-300 aspect-square h-[18rem]"></div>
          <p className="w-1/2 h-4 mt-2 bg-gray-600 rounded-lg"></p>
          <p className="block h-4 mt-2 text-sm font-medium bg-gray-600 rounded-lg"></p>
          <p className="block h-4 mt-2 text-sm font-medium bg-gray-600 rounded-lg"></p>
        </li>
      ))}
    </ul>
  );
}
