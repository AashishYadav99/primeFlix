import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Card({ data, trending, index, media_type }) {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const mediaType = data.media_type ?? media_type;

  return (
    <>
      <Link
        to={"/" + mediaType + "/" + data.id}
        className="w-full min-w-[230px] max-w-[230px] rounded h-800 overflow-hidden block relative hover:scale-105 transion-all"
      >
        <img src={imageURL + data?.poster_path} alt="" />
        <div className="absolute top-4 ">
          {trending && (
            <div className="py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden">
              #{index}Trending
            </div>
          )}
        </div>
        <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2">
          <h2 className=" text-ellipsis line-clamp-1 text-lg font-semibold">
            {data?.title || data?.name}
          </h2>
          <div className="text-sm text-neutral-400 flex justify-between">
            <p>{data.release_date}</p>
            <p className="bg-black px-1 rounded-full text-xs items-center text-white">
              Rating:{Number(data.vote_average).toFixed(1)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
