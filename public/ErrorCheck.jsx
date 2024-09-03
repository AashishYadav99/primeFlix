<div className="">
<div className="w-full h-[280px] relative lg:block">
  <div className="w-full h-full">
    <img
      src={imageURL + data?.backdrop_path}
      alt="error"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute h-full w-full bg-gradient-to-t from-neutral-900/90 to-transparent"></div>

  <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">

    <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
      <img
        src={imageURL + data?.poster_path}
        alt="error"
        className="h-80 w-60 object-cover rounded"
      />
      <button
        onClick={() => handlePlayVideo(data)}
        className="mt-3 py-2 px-4 w-full text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l  from-red-200 to-orange-500"
      >
        Play Now
      </button>
    </div>


    <div className="w-full">
      <h2 className="text-2xl font-bold text-white">
        {data.title || data.name}
      </h2>
      <p className="text-neutral-400">{data.tagline}</p>
      <Divider />

      <div className="flex items-center gap-3">
        <p className="text-neutral-400">
          Rating: {Number(data.vote_average).toFixed(1)}+
        </p>
        <span>|</span>
        <p>View: {data.vote_count}</p>
        <span>|</span>
        <p>
          Duration: {duration[0]}h{duration[1]}m
        </p>
      </div>
      <Divider />

      <div className="w-full">
        <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
        <p>{data?.overview}</p>
        <Divider />

        {params.explore === "movie" && (
          <div className="flex items-center gap-3 my-3 text-center">
            <p>Status: {data?.status}</p>
            <span>|</span>
            <p>Release Date: {data?.release_date}</p>
            <span>|</span>
            <p>Revenue: {data?.revenue}</p>
          </div>
        )}

        <h2 className="font-bold text-lg">Cast</h2>

        <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
          {castData?.cast
            ?.filter((el) => el?.profile_path)
            .map((cast, index) => (
              <div key={index}>
                <div>
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    src={imageURL + cast?.profile_path}
                    alt=""
                  />
                </div>
                <p className="font-bold text-center">{cast?.name}</p>
              </div>
            ))}
        </div>
      </div>
      <Divider />

    </div>
  </div>
  <div>
    <HorizpntalScrollCard
      data={similarData}
      heading={"Similar " + params?.explore}
      media_type={params?.explore}
    />
  </div>
</div>
{playVideo && (
  <VideoPlay
    data={playVideoId}
    close={() => setPlayVideo(false)}
    media_type={params?.explore}
  />
)}
</div>