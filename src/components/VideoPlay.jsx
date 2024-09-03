import { IoCloseSharp } from "react-icons/io5";
import UseFetchDetail from "../hooks/useFetchDetail";

function VideoPlay({ data, close, media_type }) {
  const { data: videoData } = UseFetchDetail(
    `/${media_type}/${data?.id}/videos`
  );
  const videoKey =
    videoData?.results?.length > 0 ? videoData.results[0].key : null;
  return (
    <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh]  max-w-screen-lg aspect-video rounded relative">
        <button onClick={close} className="absolute right-0 ">
          <IoCloseSharp className="text-3xl" />
        </button>
        {videoKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p className="text-white text-center">Video not available</p>
        )}
      </div>
    </section>
  );
}

export default VideoPlay;
