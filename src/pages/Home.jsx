import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizpntalScrollCard from "../components/HorizpntalScrollCard";
import UseFetch from "../hooks/UseFetch";

function Home() {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const { data: nowPlayingData } = UseFetch("/movie/now_playing");
  const { data: topRatedData } = UseFetch("/movie/top_rated");
  const { data: popularTvShowData } = UseFetch("/tv/popular");
  const { data: onAirShow } = UseFetch("/tv/on_the_air");
  

  return (
    <>
      <div>
        <BannerHome />
        <HorizpntalScrollCard
          data={trendingData}
          heading={"Trending"}
          trending={true}
        />
        <HorizpntalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>

        <HorizpntalScrollCard
          data={topRatedData}
          heading={"Top rated Movies"}
          media_type={"movie"}
        />
        <HorizpntalScrollCard
          data={popularTvShowData}
          heading={"Popular Tv Shows"}
          media_type={"tv"}
        />
        <HorizpntalScrollCard
          data={onAirShow}
          heading={"On Air Shows"}
          media_type={"tv"}
        />
      </div>
      
    </>
  );
}

export default Home;
