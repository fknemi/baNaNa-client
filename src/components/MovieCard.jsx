import { Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useNavigate } from "react-router";
function MovieCard({ poster, rating, rated, title, imdbID }) {
    const navigate = useNavigate()
return (
  <div 
    className="flex flex-col gap-4 w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-fit items-start justify-center cursor-pointer p-4 sm:p-6" 
    onClick={() => navigate(`/movie/${imdbID}`)}
  >
    {/* Image */}
    <Image 
      src={poster} 
      width={200} 
      height={300} 
      className="aspect-auto w-full sm:w-auto object-cover rounded-lg" 
      alt={`Poster of ${title}`}
    />

    {/* Rating and Chip */}
    <div className="text-white flex flex-row gap-4 items-center justify-start">
      <Chip 
        className={`flex items-center justify-center ${rated === "N/A" ? "bg-transparent text-white" : "bg-darkBlue/40 font-medium font-infinity text-white"} `}
      >
        {rated}
      </Chip>
      <h3 className="flex items-center gap-1 text-sm sm:text-base">
        {rating && (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
          </svg>
        )}
        <span>{rating ? rating[0] : "Not Rated Yet"}</span>
      </h3>
    </div>

    {/* Movie Title */}
    <h2 className="text-lg sm:text-xl lg:text-2xl font-infinity text-white break-words">
      {title}
    </h2>
  </div>
);

}


export default MovieCard
