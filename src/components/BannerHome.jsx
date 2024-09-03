import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BannerHome() {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentImage]);
  return (
    <>
      <section className="w-full h-full">
        <div className="flex min-h-full max-h-[95vh] overflow-hidden ">
          {bannerData.map((data, index) => {
            return (
              <div
                key={index}
                className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <div key={index} className="w-full h-full">
                  <img
                    src={imageURL + data.backdrop_path}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute top-0 w-full h-full hidden flex items-center justify-between px-4 group-hover:lg:flex">
                  <button className="bg-white p-1 rounded-full text-2xl z-10 text-black">
                    <FaAngleLeft onClick={handlePrevious} />
                  </button>
                  <button className="bg-white p-1 rounded-full text-2xl z-10 text-black">
                    <FaAngleRight onClick={handleNext} />
                  </button>
                </div>

                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

                <div className="container mx-auto px-4">
                  <div className="w-full max-auto absolute bottom-0 max-w-md px-0 lg:px-6">
                    <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-sm ">
                      {data?.title || data?.name}
                    </h2>
                    <p className="text-ellipsis line-clamp-3 my-2">
                      {data.overview}
                    </p>
                    <div className="flex items-center gap-4">
                      <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                      <span>|</span>
                      <p>View : {Number(data.popularity).toFixed(0)}</p>
                    </div>
                    <Link to={"/" + data?.media_type + "/" + data.id}>
                      <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 shadow-md transition-all">
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default BannerHome;
